import React from "react";
import { InputWrapper } from "../style";
import TextField from "@mui/material/TextField";
import {
  BsSearch,
  BsArrowReturnRight,
  BsFillCreditCardFill,
} from "react-icons/bs";
const Index = (props) => {
  const {
    label,
    type,
    className,
    placeholder,
    inputStatus,
    inputInfo,
    onChange,
    searchwitharrow,
    required,
    value,
    name,
    cardicon,
    onBlur,
    autoComplete,
    disabled,
    as,
    rows,
    width,
    height,
    search,
    variant,
    size,
    status,
    inputProps
  } = props;
  return (
    <InputWrapper className={className} width={width} height={height}>
      <TextField {...props}
        error={status}
        fullWidth
        size={size}
        value={value}
        helperText={inputStatus}
        label={label}
        variant={variant}
        onChange={onChange}
        required={required}
        name={name}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
      />
      {/* <Form.Group className="position-relative input-wrapper">
        {label && <Form.Label>{label}</Form.Label>}
        <span className="position-relative input-container">
          <Form.Control
            autoComplete={autoComplete}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            name={name}
            onBlur={onBlur}
            disabled={disabled}
            className={inputStatus ? "danger-border" : ""}
            as={as || undefined}
            rows={rows || undefined}
          />
          {search && <BsSearch className="cursor-pointer search-icon" />}
          {searchwitharrow && (
            <BsArrowReturnRight className="cursor-pointer search-icon" />
          )}
          {cardicon && (
            <BsFillCreditCardFill className="cursor-pointer search-icon credit-card" />
          )}
        </span>

        {inputStatus && (
          <Form.Text className="text-danger danger-border">
            {inputStatus}
          </Form.Text>
        )}
        {inputInfo && <Form.Text className="text-info">{inputInfo}</Form.Text>}
      </Form.Group> */}
    </InputWrapper>
  );
};

export default Index;
