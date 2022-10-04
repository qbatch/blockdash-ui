import React from "react";
import { ModalWrapper } from "./style";
import { Modal } from "react-bootstrap";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "../../static/css/modal.css";
const Index = (props) => {
  const {
    open,
    onHide,
    onClose,
    onSave,
    header,
    heading,
    className,
    closeText,
    saveText,
    size,
    closeButton,
  } = props;
  return (
    <ModalWrapper
      size={size}
      show={open}
      onHide={onHide}
      className={className}
      centered={true}
    >
      {header && (
        <Modal.Header closeButton={closeButton}>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer className="">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Link
              to="#"
              variant="secondary"
              className="text-decoration-none btn-cancel"
              onClick={onClose}
            >
              <span>{closeText}</span>
            </Link>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button className="outlined btn-save" onClick={onSave}>
              {saveText}
            </Button>
          </Grid>
        </Grid>
      </Modal.Footer>
    </ModalWrapper>
  );
};
export default Index;
