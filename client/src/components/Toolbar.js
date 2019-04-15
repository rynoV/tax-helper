import React, { useState } from 'react'

import styles from './toolbar.module.css'

export default ({
  curFormName,
  handleFillClick,
  saveForm,
  formNames,
  changeForm,
}) => {
  const [fill, setFill] = useState(0)
  const [formName, setFormName] = useState('')
  const [goToLine, setGoToLine] = useState('')

  const handleFillChange = e => {
    setFill(e.target.value)
  }

  const handleFormNameChange = e => {
    setFormName(e.target.value)
  }

  const handleGoToChange = e => {
    setGoToLine(e.target.value)
  }

  const createNewForm = () => {
    handleFillClick(0)
  }

  const makeSavedFormButtons = () => {
    const savedFormButtons = []
    formNames.forEach(formName => {
      const savedFormButton = (
        <button
          key={formName}
          onClick={changeForm.bind(this, formName)}
          className={curFormName === formName ? styles.currentForm : null}
        >
          {formName}
        </button>
      )
      savedFormButtons.push(savedFormButton)
    })
    return savedFormButtons
  }

  return (
    <ul className={styles.toolbar}>
      <li>Saved forms: {makeSavedFormButtons()}</li>
      <li>
        <button onClick={createNewForm}>New form</button>
      </li>
      <li>
        <label>
          Go to line #
          <input
            type='number'
            name='goto'
            value={goToLine}
            onChange={handleGoToChange}
            id='goto'
          />
        </label>
        <a href={`#${goToLine}`}>Go</a>
      </li>
      <li>
        <label>
          Save form as:
          <input
            type='text'
            value={formName}
            name='newform'
            onChange={handleFormNameChange}
          />
        </label>
        <button onClick={saveForm.bind(this, formName)}>Save</button>
      </li>
      <li>
        <label>
          Fill fields with:
          <input type='number' name='fill' onInput={handleFillChange} />
        </label>
        <button onClick={handleFillClick.bind(this, fill)}>Fill Fields</button>
      </li>
      <li>
        <input type='submit' value='Submit Form' name='submit' form='tax' />
      </li>
    </ul>
  )
}
