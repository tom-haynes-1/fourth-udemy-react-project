import React from "react";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={ classes.backdrop } />
};

const ModalOverlay = (props) => {
    return (
      <div className={ classes.modal }>
        <div className={ classes.content }>{ props.children }</div>
      </div>
    );
};

const Modal = (props) => {
    return (
      <>
        <BackDrop />
        <ModalOverlay>{ props.children }</ModalOverlay>
      </>
    );
};

export default Modal;