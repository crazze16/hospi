import styled, { css } from "styled-components/macro";

import { FlexBox } from "../containers";

const sizeThumb = "1.2em";
const borderThumb = "0.4em";
const heightTracker = "0.3em";

export const SliderContainer = styled.div<{ p?: string }>`
  display: block;
  position: relative;
  padding: ${(props) => props.p || "0"};
  & div {
    margin-top: 0.1em;
  }
`;

const MixinThumb = css`
  background: ${(props) => props.theme.colors.place};
  cursor: pointer;
  border-radius: 50%;
  border: ${borderThumb} solid ${(props) => props.theme.colors.primary};
`;

export const StyledInput = styled.input.attrs<
  React.InputHTMLAttributes<HTMLInputElement>
>({ type: "range" })<React.InputHTMLAttributes<HTMLInputElement>>`
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
  height: ${heightTracker};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primary}
      calc(
        (${(props) => props.value} - ${(props) => props.min}) * 100 /
          (${(props) => props.max} - ${(props) => props.min}) * 1%
      ),
    ${(props) => props.theme.colors.activeRadioBox}
      calc(
        (${(props) => props.value} - ${(props) => props.min}) * 100 /
          (${(props) => props.max} - ${(props) => props.min}) * 1%
      ),
    ${(props) => props.theme.colors.activeRadioBox} 100%
  );

  &::-moz-range-thumb {
    ${MixinThumb};
    width: calc(${sizeThumb} - ${borderThumb});
    height: calc(${sizeThumb} - ${borderThumb});
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${MixinThumb};
    width: ${sizeThumb};
    height: ${sizeThumb};
  }

  &:disabled::-moz-range-thumb {
    width: 1px;
    height: 1px;
    border: none;
    background-color: transparent;
  }

  &:disabled::-webkit-slider-thumb {
    width: 1px;
    height: 1px;
    border: none;
    background-color: transparent;
  }
`;

export const LineMarkers = styled(FlexBox)`
  flex-wrap: nowrap;
  color: ${(props) => props.theme.colors.text};
  & label:last-of-type {
    margin-left: auto;
    text-align: right;
  }
`;
