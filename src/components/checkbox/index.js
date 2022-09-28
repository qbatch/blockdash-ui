import React from 'react'
import { Form } from 'react-bootstrap'
import { CheckBoxWrapper } from './style'
const Index = (props) => {
  const { type, label, inputStatus, onBlur, onChange, value, name, disabled, className } = props
  return (
    <CheckBoxWrapper>
      <Form.Group className={className}>
        <Form.Check name={name} type={type} label={label} onBlur={onBlur} onChange={onChange} value={value} checked={value} disabled={disabled} />
      </Form.Group>
    </CheckBoxWrapper>
  )
}

export default Index
