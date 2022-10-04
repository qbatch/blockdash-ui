import React from "react";
// import Select , { components } from "react-select";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectWrapper } from "./style";
import { BsFillCaretDownFill } from "react-icons/bs";
const ReactSelect = (props) => {
  const {
    label,
    width,
    options,
    placeholder,
    shouldBePlacedOnTopInstead,
    className,
    defaultValue,
    value,
    onChange,
    inputStatus,
    disabled,
    menuItem,
  } = props;
  // const DropdownIndicator = props => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <BsFillCaretDownFill />
  //     </components.DropdownIndicator>
  //   );
  // };
  // console.log(props.menuItem[0])
  return (
    <SelectWrapper width={width} className={className}>
      <div className="input-wrapper">
        <Select
          width={width}
          onChange={onChange}
          isDisabled={disabled}
          placeholder={placeholder}
          displayEmpty
          defaultValue={menuItem[0].value}
          inputProps={{ "aria-label": "Without label" }}
        >
          {menuItem.map((value, index) => {
            return (
              <MenuItem key={index} value={value.value}>
                {value.title}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      {/* {inputStatus && (
        <Form.Text className="text-danger danger-border">
          {inputStatus}
        </Form.Text>
      )} */}
    </SelectWrapper>
  );
};
export default ReactSelect;
