export const calculate = (sum, difference, mult, newState, reforbal) => {
  let calcedVal
  if (sum) {
    calcedVal = 0
    for (const line of sum) {
      if (newState[line]) {
        const val = Number.parseInt(newState[line].value)
          ? Number.parseInt(newState[line].value)
          : 0
        calcedVal += val
      }
    }
    if (reforbal === 'ref' && calcedVal < 0) {
      calcedVal = calcedVal * -1
    } // else if (reforbal === 'bal')
  } else if (difference) {
    const val1 = Number.parseInt(newState[difference[0]].value)
      ? Number.parseInt(newState[difference[0]].value)
      : 0
    const val2 = Number.parseInt(newState[difference[1]].value)
      ? Number.parseInt(newState[difference[1]].value)
      : 0

    calcedVal = val1 - val2
  } else if (mult) {
    const val = Number.parseInt(newState[mult[0]].value)
      ? Number.parseInt(newState[mult[0]].value)
      : 0
    calcedVal = Math.round(val * mult[1] * 100) / 100
  }

  return calcedVal
}
