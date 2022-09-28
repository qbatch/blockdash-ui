import React from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Form } from "react-bootstrap"
import { PhoneNumberWrapper } from "../style"
const Index = (props) => {
  const { country, placeholder, defaultCountry, label, inputStatus, onChange } = props
  return (
    <PhoneNumberWrapper>
      <Form.Label>{label}</Form.Label>
      <PhoneInput
        containerClass="borderClass"
        international
        
        withCountryCallingCode={true}
        defaultCountry={defaultCountry}
        placeholder={placeholder}
        value={country}
        smartCaret={true}
        onChange={onChange}
      />
      <Form.Text style={{color: 'red'}}>{inputStatus}</Form.Text>
    </PhoneNumberWrapper>
  )
}

export default Index
