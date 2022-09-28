import React from "react";
import { QuantityPicker } from "react-qty-picker";
import QuantityPickerWrapper from "./style";
const index = (props) => {
    const {smooth, min, max, onChange, width} = props
    return (
        <QuantityPickerWrapper>
            <QuantityPicker width={width} smooth={smooth} min={min} />
        </QuantityPickerWrapper>
    );
}
export default index;