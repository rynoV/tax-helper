import { calculate } from './calculate'

export const getUpdatedFields = (changedField, newVal, newState) => {
  const { lineNum: lineNumString, affects } = changedField
  newState[lineNumString] = { ...newState[lineNumString], value: newVal }

  return updateFields(affects, newState)
}

const updateFields = (affects, newState) => {
  affects.forEach(affectedLine => {
    const { sum, difference, mult, affects: nextAffects, reforbal } = newState[
      affectedLine
    ]
    const calc = sum || difference || mult

    if (!calc) return

    newState[affectedLine] = {
      ...newState[affectedLine],
      value: calculate(sum, difference, mult, newState, reforbal),
    }

    if (nextAffects[0]) updateFields(nextAffects, newState)
  })

  return newState
}
