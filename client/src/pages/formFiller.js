import { graphql } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'

import Form from '../components/Form'
import Layout from '../components/layout'
import Toolbar from '../components/Toolbar'

import { getInitialFields } from '../funcs/getInitialFields'

export default ({ data }) => {
  const { edges } = data.allFormFieldsJson
  const linesArr = edges.map(({ node }) => {
    return node.lineNum
  })

  const [fields, setFields] = useState(() =>
    getInitialFields(edges, 0, linesArr)
  )

  const [savedForms, setSavedForms] = useState(() => {
    if (localStorage.key(0)) {
      const prevForms = {}
      for (let i = 0, len = localStorage.length; i < len; i++) {
        const formName = localStorage.key(i)
        const formValue = JSON.parse(localStorage.getItem(formName))
        prevForms[formName] = formValue
      }

      return prevForms
    } else {
      return {
        Untitled: fields,
      }
    }
  })

  const [curFormName, setCurFormName] = useState('Untitled')

  const initialized = useRef(false)
  useEffect(() => {
    if (initialized.current) setFields(savedForms[curFormName])
    initialized.current = true
  }, [curFormName])

  const handleFillClick = fill => {
    setFields(() => ({
      ...getInitialFields(edges, fill, linesArr),
    }))
  }

  const createNewForm = formName => {
    localStorage.setItem(formName, JSON.stringify(fields))
    setSavedForms(prev => {
      if (prev.Untitled) delete prev.Untitled
      return {
        ...prev,
        [formName]: JSON.parse(localStorage.getItem(formName)),
      }
    })

    setCurFormName(formName)
  }

  const changeForm = formName => {
    setCurFormName(formName)
  }

  return (
    <Layout>
      <Toolbar
        formNames={Object.keys(savedForms)}
        handleFillClick={handleFillClick}
        saveForm={createNewForm}
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
