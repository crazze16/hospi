import styled, { css } from "styled-components/macro";
import { Eye, EyeSlash } from "@styled-icons/bootstrap";

import { Label } from "../generic";
import { MixinFloatElement, MixinFont } from "../mixins";

export const StyledPrefix = styled(Label)`
  ${MixinFloatElement};
  left: ${(props) => props.theme.sizes.input.padding};
`;

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly borderNone?: boolean;
  readonly bgNone?: boolean;
  readonly addprefix?: number;
  readonly borderColor?: string;
  readonly error?: boolean;
}

export const MixinStyledInput = css<IInput>`
  ${MixinFont};
  border: 1px solid ${(props) => props.borderColor || props.theme.colors.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: ${(props) => props.theme.sizes.input.padding};
  ${(props) =>
    props.borderNone &&
    css`
      border: none;
    `};
  ${(props) =>
    props.error &&
    css`
      border-color: red;
    `};
  width: 100%;
  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }
  &:disabled {
    opacity: 0.7;
  }
  ${(props) =>
    props.bgNone &&
    css`
      background-color: transparent !important;
    `}
`;

export const ClearStyleInput = css<React.InputHTMLAttributes<HTMLInputElement>>`
  border: none;
  box-shadow: none;
  display: inline-block;
  outline: none;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  ${ClearStyleInput};
  ${MixinStyledInput};
  padding-left: ${(props) =>
    props?.addprefix
      ? `${props.addprefix}.7em`
      : props.theme.sizes.input.padding};
`;

export const StyledEyeSlash = styled(EyeSlash)`
  ${MixinFloatElement};
  right: ${(props) => props.theme.sizes.input.padding};
  color: ${(props) => props.theme.colors.textMuted};
`;

export const StyledEye = styled(Eye)`
  ${MixinFloatElement};
  right: ${(props) => props.theme.sizes.input.padding};
  color: ${(props) => props.theme.colors.textMuted};
`;
