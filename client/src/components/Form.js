import React from 'react'

import { Fields } from '../components/Fields'
import { getUpdatedFields } from '../funcs/getUpdatedFields'

export default ({ edges, fill, setFields, fields, linesArr }) => {
  const handleFieldChange = (e, changedField) => {
    e.persist()

    setFields(prev => ({
      ...getUpdatedFields(changedField, e.target.value, prev),
    }))
  }

  return (
    <form action='/api/fill' method='POST' id='tax'>
      <Fields
        fields={fields}
        handleFieldChange={handleFieldChange}
        linesArr={linesArr}
      />
    </form>
  )
}
