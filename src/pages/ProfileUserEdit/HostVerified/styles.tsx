import { Label } from "components/generic";
import styled, { css } from "styled-components";

export const NotVerification = styled(Label)<{
  state: "verifying" | "verified" | "unverified" | "failed";
}>`
  position: relative;
  ${(props) =>
    (props.state === "unverified" || props.state === "failed") &&
    css`
      color: ${(props) => props.theme.colors.place};
      background-color: ${(props) => props.theme.colors.thirdly};
    `};
  ${(props) =>
    props.state === "verified" &&
    css`
      color: ${(props) => props.theme.colors.text};
      background-color: #e3edff;
    `};
  ${(props) =>
    props.state === "verifying" &&
    css`
      color: ${(props) => props.theme.colors.thirdly};
      background-color: ${(props) => props.theme.colors.secondary};
    `};
  padding: 0.4em;
  text-align: center;
  cursor: pointer;
  & > label {
    position: absolute;
    bottom: calc(100% + 4px);
    right: 0;
    opacity: 0;
    width: 400px;
    transition: 0.7s;
  }
  &:hover {
    & > label {
      opacity: 1;
    }
  }
`;
