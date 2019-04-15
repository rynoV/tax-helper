# Creates a json file titled 'formFields' in temp directory which contains an
# array of objects describing the form fields in the 2018 Canada income tax
# form.
# Requires some manual modification of data, but still better than writing by hand
# Run :%s/\r//g in vim to remove error raising ^M characters
#!/usr/bin/perl
# Library that allows us to access pdf data
use CAM::PDF;
# Library that allows us to create and access json data
use JSON::MaybeXS;

# Useful for debugging
use Data::Dumper qw(Dumper);
use strict;
use warnings;

# Create CAMPDF object from our pdf
# Does not work with pdf version 1.7
my $pdf = CAM::PDF->new('/Users/calumsieppert/School/CSE/perl-itf-filler/2018-income-tax-form-1.5.pdf');
# Create MAYBEXS object and tell it to format the outputted data
my $json = JSON::MaybeXS->new(utf8 => 1, pretty => 1, sort_by => 1);

# Get a list of the form fields in the pdf by calling a method on our object
my @fields = $pdf->getFormFieldList();

my $filename = 'temp/formFields.json';
# open file for writing or create file if it doesn't exist
open(my $fh, '>', $filename) or die "Could not open file '$filename' $!";

# Initialize empty array which will hold our field representing objects
my @fieldArray;

# Loop through the fields list
for my $fieldName (@fields) {
  # Filter out field names that we don't want to use
  # We want to match field names that look like this:
  # ??form1[0].??Page2[0].??TotalIncome[0].??Line_180_OtherTaxableDividends[0].Step 2. Total income. Line 180. Taxable amount of dividends other than eligible       dividends, included on line 120, from taxable Canadian corporations. (alternate name)
  # because they contain the data we want and their fields are fillable.
  # The regular expression used to filter does the following:
  # Finds any number of any character from the start of the line with '^.+'
  # Finds the string 'Step ' followed by anything but 1
  # Finds any number of any character followed by the string 'Line '
  # Finds any number of digits followed by a period
  # Finds any number of any character
  if ($fieldName =~ /^.+Step [^1].+Line \d+\..*/ or $fieldName =~ /Step 7\. Refund or balance owing\. This is your refund or balance owing\. Line 435 minus line 482\./) {
    # Extract the field prompt and line number from the string
    # We add brackets around the content we want in the regex to allow us to do
    # this
    my ( $lineNum, $content ) = $fieldName =~ /^.+Step [^1].+Line (\d+)\.(.*)/;
    # Remove unwanted text and trim whitespace
    $content =~ s/\(alternate name\)//g;
    $content =~ s/^\s+|\s+$//g;

    # Create object representing field and then add it to thte array
    my $fieldData = {
      id => $fieldName,
      lineNum => $lineNum,
      content => $content,
      sum => undef,
      group => undef,
    };

    push @fieldArray, $fieldData;
  }
}

# Data structure:
# {String} id: name recieved from CAM::PDF getFormFieldList method
# {Number} lineNum: line number extracted from name
# {String} content: field prompt displayed in pdf
# {Boolean} sum: indicates whether this line is a sum of other lines
# {Number} group: if this is not null, describes which line this line is
# grouped with

# Weird perl thing
my $fieldArray_ref = \@fieldArray;
# Create object with our data and pass it through MAYBEXS method to change it to
# a json string
my $fieldDict = { fields => $fieldArray_ref };
my $fieldJSON = $json->encode($fieldDict);

# Write our json string to the file
print $fh "$fieldJSON";
close $fh;
print "done\n";
