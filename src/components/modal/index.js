import React from "react";
import { ModalWrapper } from "./style";
// import { Modal } from "react-bootstrap";
import {Box} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "../../static/css/modal.css";
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
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
      open={open}
      onClose={onClose}
      className={className}
    >
      {header && (
        <DialogTitle sx={{ m: 0, p: 2 }} {...props}>
          {header}
          {/* {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null} */}
        </DialogTitle>
      )}
      <DialogContent dividers>
        <Box>{props.children}</Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onSave}>
          {saveText}
        </Button>
        <Button autoFocus onClick={onClose}>
          {closeText}
        </Button>
      </DialogActions>
      {/* {header && (
        <Modal.Header closeButton={closeButton}>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
      )} */}
      {/* <Modal.Body>{props.children}</Modal.Body>
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
      </Modal.Footer> */}
    </ModalWrapper>
  );
};
export default Index;
