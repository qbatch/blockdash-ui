import React from "react";
import { ModalWrapper } from "./style";
import { Modal } from "react-bootstrap";
import Button from "../../components/button/button";
import {Link } from "react-router-dom";
import "../../static/css/modal.css"
const Index = (props) => {
  const { open, onHide, onClose, onSave,header,heading,className,closeText,saveText,size,closeButton} = props;
  return (
    <ModalWrapper size={size} show={open} onHide={onHide} className={className} centered={true}>
        {header && (
          <Modal.Header closeButton={closeButton}>
            <Modal.Title className="fw-bold">{heading}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body className="p-4">{props.children}</Modal.Body>
        <Modal.Footer className="">
          <Link to="#" variant="secondary" className="text-decoration-none btn-cancel" onClick={onClose}>
            {closeText}
          </Link>
          <Button className="outlined btn-save"  onClick={onSave}>{saveText}</Button>
        </Modal.Footer>
    </ModalWrapper>
  );
};
export default Index;
