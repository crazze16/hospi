import React, { useState } from "react";

import { SliderContainer, StyledInput, LineMarkers } from "./styles";

import { Label } from "../generic";

interface IRange extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly title?: string;
  readonly markers?: string[];
  p?: string;
}

const Range: React.FC<IRange> = ({ title, markers, p, ...props }) => {
  return (
    <SliderContainer p={p}>
      {title && (
        <Label fontWeight="600" p="0">
          {title}
        </Label>
      )}
      <StyledInput {...props} />
      {markers && (
        <LineMarkers justify="space-between">
          {markers.map((item) => (
            <Label fontSize="14px" key={item} p="8px 0">
              {item}
            </Label>
          ))}
        </LineMarkers>
      )}
    </SliderContainer>
  );
};

export interface IRangeHook {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useRange = (initial = 50): IRangeHook => {
  const [value, setValue] = useState(initial);
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(parseInt(e.target.value, 10)),
  };
};

export default Range;
