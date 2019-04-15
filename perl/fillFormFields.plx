#!/usr/bin/perl
use CAM::PDF;
use JSON::MaybeXS qw(decode_json);
use Try::Tiny;
use Data::Dumper qw(Dumper);
use List::MoreUtils 'firstidx';
use IO::Prompter;
use strict;
use warnings;

# Create CAMPDF object from our pdf
# Does not work with pdf version 1.7
my $pdf = CAM::PDF->new('./resources/tax-form.pdf');
my @camFieldList = $pdf->getFormFieldList();

my $filename = './client/src/data/formFields.json';
open(my $fh, '<', $filename)
  or die "Could not open file '$filename' $!";
# Allows us to put whole file in string
my $fileContent = do { local $/; <$fh> };
my $formFieldJSON = decode_json $fileContent;

my $passedJSON = decode_json $ARGV[0];

# print "This program will ask you questions provided by Canada's 2018 income tax and benefit return form and fill it in for you. It will output the filled form pdf into the directory it was called in.\n";

# my $simulate = prompt("Would you like to simulate input? (Type 'yes' or 'no')", -yesno);
my $simulate = 1;

my %inputHash;

my %lineNumHash;
foreach my $field (@{ $formFieldJSON }) {
  my $lineNum = $field->{ 'lineNum' };
  $lineNumHash{ $lineNum } = $field;
}

my @calcList;
foreach my $lineNumKey (keys %{ $passedJSON }) {
  my $value = $passedJSON->{ $lineNumKey };
  my $fieldHash = $lineNumHash{$lineNumKey};

  if ( !$fieldHash ) {
    next;
  }

  # Extract data from json
  my $jsonFieldID = $fieldHash->{id};
  my $sum = $fieldHash->{sum};
  my $mult = $fieldHash->{mult};
  my $difference = $fieldHash->{difference};
  my $lineNum = $fieldHash->{lineNum} + 0;

  # Get the name which matches our json id from the cam::pdf list
  my $index = firstidx { $_ eq $jsonFieldID } @camFieldList;

  my $camFieldID = $camFieldList[$index - 1];

  my $input;
  if ( $sum or $mult or $difference ) {
    push @calcList, $fieldHash;
    next;
  } else {
    $input = $value;
  }

  # Store the input for later reference
  $inputHash{$lineNum} = $input;

  # Fill in the fields and surround it with a try catch because it throws errors
  # that we can ignore and we don't want them to stop the program
  try {
    if ( !defined $input ) {
      print "lineNumKey: $lineNumKey\n";
      print "fieldHash: ", Dumper $fieldHash;
      print "value: $value\n";
    }
    $pdf->fillFormFields($camFieldID => "$input");
  } catch {};
}

my $refund;
foreach my $fieldHash ( @calcList ) {
  # Extract data from json
  my $jsonFieldID = $fieldHash->{id};
  my $content = $fieldHash->{content};
  my $sum = $fieldHash->{sum};
  my $mult = $fieldHash->{mult};
  my $difference = $fieldHash->{difference};
  my $noneg = $fieldHash->{noneg};
  my $reforbal = $fieldHash->{reforbal};
  my $lineNum = $fieldHash->{lineNum} + 0;

  # Get the name which matches our json id from the cam::pdf list
  my $index = firstidx { $_ eq $jsonFieldID } @camFieldList;

  my $camFieldID = $camFieldList[$index - 1];


  # Change input for the different cases
  my $input = 0;

  # The reforbal if statements handle the refund/balance owing logic necessary
  # at the end of the form
  if ( $reforbal and $reforbal eq 'ref' ) {
    if (
    !defined $refund
      or !defined $inputHash{0}
    ) {
      push @calcList, $fieldHash;
      next;
    }
    # Fill the refund box and change it to a positive value or skip depending
    # on the refund variable
    if ( $refund ) {
      $input = $inputHash{0} * -1;
    } else {
      next;
    }
  } elsif ( $reforbal and $reforbal eq 'bal' ) {
    if (
    !defined $refund
      or !defined $inputHash{0}
    ) {
      push @calcList, $fieldHash;
      next;
    }
    # Fill the balance box or skip depending on the refund variable
    if ( $refund ) {
      next;
    } else {
      $input = $inputHash{0};
    }
  } elsif ($reforbal) {
    if (
      !defined $inputHash{ $difference->[0] }
      or !defined $inputHash{ $difference->[1] }
    ) {
      push @calcList, $fieldHash;
      next;
    }
    # Calculate the input and determine whether it is a refund or a balance
    $input = $inputHash{ $difference->[0] } - $inputHash{ $difference->[1] };
    if ($input < 0) {
      $refund = 1;
    } else {
      $refund = 0;
    }
  } elsif ($sum) {
    # Sum the lines provided in the data and ignore lines which were not
    # calculated. JSON includes lines which do not exist in the sum value and
    # I'm too lazy to take them out
    foreach my $line ( @{ $sum } ) {
      if ( $inputHash{"$line"} ) {
        $input += $inputHash{"$line"};
      }
    }
  } elsif ($difference) {
    if (
      !defined $inputHash{ $difference->[0] }
      or !defined $inputHash{ $difference->[1] }
    ) {
      push @calcList, $fieldHash;
      next;
    }
    # Calculate the value and if negative and the field does not allow negative values just
    # make input 0
    $input = $inputHash{ $difference->[0] } - $inputHash{ $difference->[1] };
    if ( $noneg and $input < 0 ) {
      $input = 0;
    }
  } elsif ($mult) {
    if (
      !defined $inputHash{ $mult->[0] }
    ) {
      push @calcList, $fieldHash;
      next;
    }
    $input = $inputHash{ $mult->[0] } * $mult->[1];
  }

  # Store the input for later reference
  $inputHash{$lineNum} = $input;

  # Fill in the fields and surround it with a try catch because it throws errors
  # that we can ignore and we don't want them to stop the program
  try {
    if ( !defined $input ) {
      print "fieldHash: ", Dumper $fieldHash;
    }
    $pdf->fillFormFields($camFieldID => "$input");
  } catch {};
}

$pdf->cleanoutput('./resources/output.pdf');
print 'done';
