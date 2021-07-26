import React, { useState } from "react";

import { Label } from "../generic";
import { StyledBlock } from "../containers";
import { StyledTextArea } from "./styles";

export interface ITextArea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly title?: string;
  readonly placeholder?: string;
  rows?: number;
  resize?: number;
  maxlenght?: number;
  w?: string;
  grow?: string;
  p?: string;
  id?: string;
}

const TextArea: React.FC<ITextArea> = ({
  title = "",
  placeholder = "",
  rows = 3,
  resize = "none",
  maxlenght = 500,
  w = "100%",
  grow = "1",
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
      <StyledTextArea
        placeholder={placeholder}
        {...props}
        rows={rows}
        maxLength={maxlenght}
      />
    </StyledBlock>
  );
};

export const useTextArea = (initial: string = "") => {
  const [value, setValue] = useState<string>(initial);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e),
  };
};

export default TextArea;
