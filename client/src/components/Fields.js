import React from 'react'

import styles from './fields.module.css'

export const Fields = ({ fields, handleFieldChange, linesArr }) => {
  const inputs = []
  const calculated = []
  const hiddens = []

  for (const line of linesArr) {
    const field = fields[line]
    const { string, display, calc, value, content, lineNum, hide } = field
    let input, calculatedNum, hidden

    if (calc) {
      hidden = (
        <li key={content}>
          <input
            type='hidden'
            className={styles.hidden}
            name={lineNum}
            value={value}
            onChange={e => handleFieldChange(e, field)}
            readOnly
            required
          />
        </li>
      )

      hiddens.push(hidden)

      calculatedNum = hide ? null : (
        <li key={lineNum}>
          <span className={styles.display}>{display}:</span>
          <span className={styles.value}>{value}</span>
        </li>
      )

      calculated.push(calculatedNum)
    } else {
      input = (
        <li id={lineNum} key={content} className={styles.shown}>
          <label>
            <span className={styles.lineNumber}>Line: {lineNum}</span>
            <br />
            <span className={styles.inputLabel}> {content}</span>{' '}
          </label>
          <input
            type={string ? 'text' : 'number'}
            name={lineNum}
            value={value}
            onChange={e => handleFieldChange(e, field)}
            required
          />
          <br />
        </li>
      )

      inputs.push(input)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <ul>{inputs}</ul>
        {hiddens}
      </div>
      <div className={styles.calculated}>
        <ul>{calculated}</ul>
      </div>
    </div>
  )
}
