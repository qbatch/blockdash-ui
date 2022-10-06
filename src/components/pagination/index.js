import React from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Select from "../../components/select/index";
import Input from "../../components/inputs/input/index";
import { PaginationWrapper } from "./style";

const Pagination = (props) => {
  const {background} =props
  const options = [
    { title: "15 / page", value: "15 / page" },
    { title: "17 / page", value: "17 / page" },
    { title: "10 / page", value: "10 / page" },
  ];
  return (
    <PaginationWrapper background={background} className="pagination-wrapper d-flex align-items-center position-relative">
      <div className="pagination-wrapper d-flex justify-content-between align-items-center">
        <div>
          <span>Total 770 items</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className=" pagination-inputs-wrappper d-flex justify-content-between align-items-center">
            <Select
              className="pagination-days border-none"
              placeholder="10 / page"
              menuItem={options}
              width="68"
              menuPlacement="top"
            ></Select>
            <span className="">Go to</span>
            <Input height="32px" className="pagination-input" />
          </div>
          <div className="pagination-items-wrapper d-flex align-items-center">
          <button className="pagination-icon" >
            <BsFillCaretLeftFill/>
            </button>
            <button type="button" className="btn pagination-item">
              1
            </button>
            <button type="button" className="btn pagination-item pagination-ellipses">
              •••
            </button>
            <button type="button" className="btn pagination-item">
              4
            </button>
            <button type="button" className="btn pagination-item">
              5
            </button>
            <button type="button" className="btn pagination-item active">
              6
            </button>
            <button type="button" className="btn pagination-item">
              7
            </button>
            <button type="button" className="btn pagination-item">
              8
            </button>
            <button type="button" className="btn pagination-item pagination-ellipses">
              •••
            </button>
            <button type="button" className="btn pagination-item">
              50
            </button>
            <button className="pagination-icon" >
              <BsFillCaretRightFill/>
            </button>
          </div>
        </div>
      </div>
    </PaginationWrapper>
  );
};
export default Pagination;
