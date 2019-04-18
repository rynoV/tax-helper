import { graphql } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'

import Form from '../components/Form'
import Layout from '../components/layout'
import Toolbar from '../components/Toolbar'

import { getInitialFields } from '../funcs/getInitialFields'

const windowGlobal = typeof window !== 'undefined' && window
const undefFieldName = 'Untitled'

export default ({ data }) => {
  const { edges } = data.allFormFieldsJson
  const linesArr = edges.map(({ node }) => {
    return node.lineNum
  })

  const emptyFieldsRef = useRef()

  const [fields, setFields] = useState(() => {
    const emptyFields = getInitialFields(edges, 0, linesArr)
    emptyFieldsRef.current = emptyFields

    return emptyFields
  })

  const [savedForms, setSavedForms] = useState(() => {
    if (windowGlobal && windowGlobal.localStorage.key(0)) {
      const prevForms = {}
      for (let i = 0, len = windowGlobal.localStorage.length; i < len; i++) {
        const formName = windowGlobal.localStorage.key(i)
        const formValue = JSON.parse(
          windowGlobal.localStorage.getItem(formName)
        )
        prevForms[formName] = formValue
      }

      return prevForms
    } else {
      return {
        [undefFieldName]: fields,
      }
    }
  })

  const [curFormName, setCurFormName] = useState(undefFieldName)

  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current)
      setFields(() =>
        curFormName === undefFieldName
          ? emptyFieldsRef.current
          : savedForms[curFormName]
      )
    initialized.current = true
  }, [curFormName])

  const handleFillClick = fill => {
    setFields(() => ({
      ...getInitialFields(edges, fill, linesArr),
    }))
  }

  const createNewForm = formName => {
    windowGlobal &&
      setSavedForms(prev => {
        windowGlobal.localStorage.setItem(formName, JSON.stringify(fields))

        if (prev.Untitled) delete prev.Untitled
        return {
          ...prev,
          [formName]: JSON.parse(windowGlobal.localStorage.getItem(formName)),
        }
      })

    setCurFormName(formName)
  }

  const deleteForm = formName => {
    windowGlobal &&
      setSavedForms(prev => {
        if (formName !== undefFieldName) {
          windowGlobal.localStorage.removeItem(formName)
          delete prev[formName]
        }

        return {
          ...prev,
        }
      })

    const key =
      Object.keys(savedForms).length > 1
        ? Object.keys(savedForms)[0]
        : undefFieldName

    setCurFormName(key)
  }

  const changeForm = formName => {
    setCurFormName(formName)
  }

  const formNames = Object.keys(savedForms)

  return (
    <Layout>
      <Toolbar
        formNames={formNames}
        handleFillClick={handleFillClick}
        saveForm={createNewForm}
        deleteForm={deleteForm}
        changeForm={changeForm}
        curFormName={curFormName}
      />
      <Form
        fields={fields}
        setFields={setFields}
        linesArr={linesArr}
        edges={edges}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allFormFieldsJson {
      edges {
        node {
          content
          lineNum
          difference
          mult
          sum
          hide
          display
          reforbal
          string
        }
      }
    }
  }
`
