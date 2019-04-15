import { calculate } from './calculate'

let fieldsStateInitial = {}

export const getInitialFields = (edges, fill, linesArr) => {
  edges.forEach(({ node }) => {
    const { sum, mult, difference, lineNum } = node
    const calc = sum || mult || difference

    fieldsStateInitial[lineNum] = fieldsStateInitial[lineNum]
      ? fieldsStateInitial[lineNum]
      : { ...node }
    fieldsStateInitial[lineNum]['affects'] = fieldsStateInitial[lineNum][
      'affects'
    ]
      ? fieldsStateInitial[lineNum]['affects']
      : []
    fieldsStateInitial[lineNum]['value'] = fill

    if (calc) {
      fieldsStateInitial[lineNum]['calc'] = true
    }

    if (sum) {
      for (const sumLine of sum) {
        if (!linesArr.includes(sumLine + '')) continue

        fieldsStateInitial[sumLine]['affects'].push(lineNum)
      }
    } else if (difference) {
      for (const difLine of difference) {
        fieldsStateInitial[difLine]['affects'].push(lineNum)
      }
    } else if (mult) {
      fieldsStateInitial[mult[0]]['affects'].push(lineNum)
    }
  })

  const calcFields = []
  for (const [, field] of Object.entries(fieldsStateInitial)) {
    if (field.calc) calcFields.push(field)
  }

  calcFields.forEach(calcField => {
    const { sum, mult, difference, lineNum, affects } = calcField

    fieldsStateInitial[lineNum] = {
      ...fieldsStateInitial[lineNum],
      value: calculate(sum, difference, mult, fieldsStateInitial),
    }

    if (affects[0]) calcEffects(affects)
  })

  return fieldsStateInitial
}

const calcEffects = prevAffects => {
  prevAffects.forEach(affectedLine => {
    const { sum, mult, difference, affects, reforbal } = fieldsStateInitial[
      affectedLine
    ]

    fieldsStateInitial[affectedLine] = {
      ...fieldsStateInitial[affectedLine],
      value: calculate(sum, difference, mult, fieldsStateInitial, reforbal),
    }
    if (affects[0]) calcEffects(affects)
  })
}
