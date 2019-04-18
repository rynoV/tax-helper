import React, { useState } from 'react'

import styles from './toolbar.module.css'

import newFile from '../data/new-file.svg'
import enterArrow from '../data/enter-arrow.svg'
import save from '../data/save.svg'
import deleteIcon from '../data/delete.svg'

export default ({
  curFormName,
  handleFillClick,
  saveForm,
  deleteForm,
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
          className={`${curFormName === formName ? styles.currentForm : null} ${
            styles.savedForm
          }`}
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
      <li className={styles.saved}>
        <label>Your forms: </label>
        {makeSavedFormButtons()}
      </li>
      <li>
        <button
          onClick={deleteForm.bind(this, curFormName)}
          className={styles.iconButton}
          title='Delete the current form'
        >
          <img src={deleteIcon} alt='Delete icon' className={styles.icon} />
        </button>
      </li>
      <li className={styles.newForm}>
        <button
          onClick={createNewForm}
          className={styles.iconButton}
          title='Create a new blank form'
        >
          <img src={newFile} alt='New file icon' className={styles.icon} />
        </button>
      </li>
      <li className={styles.goTo}>
        <label htmlFor='goto'>Go to line #</label>
        <span className={styles.submitDuo}>
          <input
            type='number'
            name='goto'
            value={goToLine}
            onChange={handleGoToChange}
            id='goto'
          />
          <a href={`#${goToLine}`}>
            <button className={styles.iconButton}>
              <img
                src={enterArrow}
                alt='Enter arrow icon'
                className={styles.iconSmall}
              />
            </button>
          </a>
        </span>
      </li>
      <li className={styles.save}>
        <label htmlFor='newForm'>Save form as:</label>
        <span className={styles.submitDuo}>
          <input
            type='text'
            value={formName}
            name='newform'
            id='newform'
            onChange={handleFormNameChange}
          />
          <button
            onClick={saveForm.bind(this, formName)}
            className={styles.iconButton}
          >
            <img src={save} alt='Save icon' className={styles.iconSmall} />
          </button>
        </span>
      </li>
      <li className={styles.fill}>
        <label htmlFor='fill'>Fill fields with:</label>
        <span className={styles.submitDuo}>
          <input
            type='number'
            id='fill'
            name='fill'
            onInput={handleFillChange}
          />
          <button
            onClick={handleFillClick.bind(this, fill)}
            className={styles.iconButton}
          >
            <img
              src={enterArrow}
              alt='Enter arrow icon'
              className={styles.iconSmall}
            />
          </button>
        </span>
      </li>
      <li className={styles.submit}>
        <input
          type='submit'
          value='Submit Form'
          name='submit'
          form='tax'
          className={styles.button}
        />
      </li>
    </ul>
  )
}
