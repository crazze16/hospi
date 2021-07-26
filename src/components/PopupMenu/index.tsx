import React, { useState, useRef } from "react";
import useOnClickOutside from "utils/hooks/useOnClickOutside";
import { ContainerPopupMenu } from "../containers";
import { ArrowDown, ContainerPopup } from "./styles";

interface IPopupMenu {
  title: React.ReactNode;
  top?: string;
  right?: string;
  children?: React.ReactNode;
}

export const PopupMenu: React.FC<IPopupMenu> = ({
  title,
  top,
  right,
  children,
}) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShow(false));

  return (
    <ContainerPopup onClick={() => setShow(!show)}>
      <section>
        {title}
        <ArrowDown size="2em" up={show} />
      </section>
      {show && (
        <ContainerPopupMenu
          top={top}
          right={right}
          className={show ? "panel active" : "panel"}
          ref={ref}
        >
          {children}
        </ContainerPopupMenu>
      )}
    </ContainerPopup>
  );
};
