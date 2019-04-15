import React from 'react'

import styles from './fields.module.css'

export const Fields = ({ fields, handleFieldChange, linesArr }) => {
  const inputs = []
  const calculated = []

  for (const line of linesArr) {
    const field = fields[line]
    const { string, display, calc, value, content, lineNum, hide } = field
    let input, calculatedNum

    if (calc) {
      input = (
        <li key={content}>
          <input
            type='hidden'
            name={lineNum}
            value={value}
            onChange={e => handleFieldChange(e, field)}
            readOnly
            required
          />
        </li>
      )

      calculatedNum = hide ? null : (
        <React.Fragment key={lineNum}>
          <p>{display}:</p>
          <p className={styles.value}>{value}</p>
        </React.Fragment>
      )
    } else {
      input = (
        <li id={lineNum} key={content}>
          <label>
            <span className={styles.lineNumber}>Line: {lineNum}</span>
            <br /> {content}
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
    }

    calculated.push(calculatedNum)
    inputs.push(input)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <ul>{inputs}</ul>
      </div>
      <div className={styles.calculated}>
        <ul>{calculated}</ul>
      </div>
    </div>
  )
}
