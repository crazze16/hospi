import React, { useState } from "react";
import { StrNum } from "../../interfaces/intarfaces";

import { Label } from "../generic";
import { StyledBlock } from "../containers";
import {
  StyledInput,
  StyledPrefix,
  StyledEye,
  StyledEyeSlash,
  IInput,
} from "./styles";

export interface IInputLabel
  extends React.InputHTMLAttributes<HTMLInputElement>,
    IInput {
  readonly title?: string;
  readonly placeholder?: string;
  readonly prefix?: string;
  children?: React.ReactNode;
  w?: string;
  grow?: string;
  p?: string;
  id?: string;
}

export const InputLabel: React.FC<IInputLabel> = ({
  title = "",
  placeholder = "",
  prefix = "",
  children,
  w = "100%",
  grow = "0",
  p,
  id,
  ...props
}) => {
  return (
    <StyledBlock w={w} grow={grow} p={p} id={id}>
      {title && (
        <Label bgColor="transparent" p="0" fontWeight="600">
          {title}
        </Label>
      )}
      <StyledBlock>
        {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
        <StyledInput
          placeholder={placeholder}
          {...props}
          addprefix={prefix.length}
        />
      </StyledBlock>
      {children}
    </StyledBlock>
  );
};

export const InputLabelPassword: React.FC<IInputLabel> = ({
  title,
  placeholder,
  children,
  ...props
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <StyledBlock>
      {title && (
        <Label bgColor="transparent" p="0" fontWeight="600">
          {title}
        </Label>
      )}
      <StyledBlock>
        {passwordShown ? (
          <StyledEye size="1.2em" onClick={togglePasswordVisiblity} />
        ) : (
          <StyledEyeSlash size="1.2em" onClick={togglePasswordVisiblity} />
        )}
        <StyledInput
          placeholder={placeholder}
          {...props}
          type={passwordShown ? "text" : "password"}
        />
      </StyledBlock>
      {children}
    </StyledBlock>
  );
};

export interface IInputHookOut {
  value: StrNum;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | StrNum) => void;
}

export const useInput = (initial: StrNum): IInputHookOut => {
  const [value, setValue] = useState<StrNum>(initial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | StrNum) => {
    typeof e === "string" || typeof e === "number"
      ? setValue(e)
      : setValue(e.target.value);
  };

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement> | StrNum) => onChange(e),
  };
};
