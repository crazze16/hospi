import React from "react";
import { StyledModal } from "./styles";

interface IModal {
  handleClose: () => void;
  isShow: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ handleClose, isShow, children }) => {
  const toogleShow = isShow ? "m-modal show" : "m-modal hide";

  return (
    <StyledModal className={toogleShow} onClick={handleClose}>
      <section onClick={(event) => event.stopPropagation()}>
        {children}
        <button onClick={handleClose}>&#10005;</button>
      </section>
    </StyledModal>
  );
};

export default Modal;
