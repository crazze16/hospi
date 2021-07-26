import styled from "styled-components";

type TResize =
  | "none"
  | "both"
  | "horizontal"
  | "vertical"
  | "block"
  | "inline"
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

export const StyledTextArea = styled.textarea<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { resize?: TResize }
>`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: ${(props) => props.theme.sizes.input.padding};
  -moz-appearance: none;
  background-color: ${(props) => props.theme.colors.place};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  resize: ${(props) => props.resize || "none"};
  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }
  &:disabled {
    opacity: 0.7;
  }
`;
