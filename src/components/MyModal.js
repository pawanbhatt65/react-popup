import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  return <div className="modal-wrapper" onClick={props.modalClose}></div>;
};

const ModalContainer = (props) => {
  return (
    <Fragment>
      <div className="modal-container">
        <h6>My modal</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          reprehenderit ab non ipsum atque obcaecati vero assumenda doloremque!
          Assumenda saepe eum corrupti amet aspernatur velit? Magnam doloremque
          quae id voluptatem.
        </p>
        <button onClick={props.modalClose}>Accept It</button>
      </div>
    </Fragment>
  );
};

const MyModal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const overlayClass = document.getElementById("myPortalModal");

  return ReactDOM.createPortal(
    <Fragment>
      <Overlay modalClose={props.modalClose} />
      <ModalContainer modalClose={props.modalClose}>
        {props.children}
      </ModalContainer>
    </Fragment>,
    overlayClass
  );
};

export default MyModal;
