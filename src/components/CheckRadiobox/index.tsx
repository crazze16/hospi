import React, { useState } from "react";

import {
  Sign,
  BoxContainer,
  HidenInput,
  StyledSpan,
  StyledBox,
} from "./styles";

export interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly title?: string;
  readonly h?: string;
  readonly p?: string;
  changeStatus?: (x: boolean) => void;
}

export const Checkbox: React.FC<ICheckbox> = ({ title, h, p, ...props }) => {
  return (
    <BoxContainer h={h} p={p}>
      <HidenInput {...props} type="checkbox" />
      <StyledBox checked={props.checked} type="checkbox">
        <Sign viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Sign>
      </StyledBox>
      <StyledSpan>{title}</StyledSpan>
    </BoxContainer>
  );
};

export const useCheckbox = (initial = false): Partial<ICheckbox> => {
  const [checked, setChecked] = useState(initial);
  return {
    checked,
    onChange: () => setChecked(!checked),
    changeStatus: (x) => setChecked(x),
  };
};

// interface IRadiobox<T, > extends React.InputHTMLAttributes<HTMLInputElement> {
//   readonly title?: string;
//   value: string;
//   readonly selected?: T;
//   valueChange: (x: T) => void;
// }

export interface IRadiobox extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly title?: string;
  value: string;
  readonly selected?: string;
  valueChange?: (x: string) => void;
  readonly h?: string;
  readonly p?: string;
  readonly id?: string;
}

export const Radiobox: React.FC<IRadiobox> = ({
  title,
  value,
  selected,
  valueChange = (x: string) => {},
  h,
  p,
  id,
  ...props
}) => {
  return (
    <BoxContainer h={h} p={p} id={id}>
      <HidenInput
        checked={value === selected}
        onChange={() => valueChange(value)}
        {...props}
        type="radio"
      />
      <StyledBox checked={value === selected} type="radio">
        <Sign viewBox="0 0 24 24" fill="white">
          <circle cx="12" cy="12" r="4" />
        </Sign>
      </StyledBox>
      <StyledSpan>{title}</StyledSpan>
    </BoxContainer>
  );
};

export const useRadiobox = (name: string, initial: string) => {
  const [selected, setSelected] = useState(initial);
  return {
    selected,
    valueChange: setSelected,
    name,
  };
};
