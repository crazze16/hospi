import React from "react";
import styled from "styled-components/macro";

export const StyledSpan = styled.span`
  font-size: ${(props) => props.theme.font.size};
  font-weight: ${(props) => props.theme.font.weightNormal};
  margin-left: 0.3em;
  color: ${(props) => props.theme.colors.text};
`;

export const HidenInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  position: absolute;
  // -webkit-appearance: none;
  // -moz-appearance: none;
  // appearance: none;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Sign = styled.svg.attrs((props) => ({
  fill: props.fill || "none",
}))`
  stroke: ${(props) => props.theme.colors.place};
  stroke-width: 3px;
`;

export const BoxContainer = styled.label<{ h?: string; p?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.h || "initial"};
  cursor: pointer;
  padding: ${(props) => props.p || props.theme.sizes.input.padding};
`;

interface IBox extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly checked?: boolean;
  readonly type?: string;
}
export const StyledBox = styled.div<IBox>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.font.size};
  background-color: ${(props) =>
    props.checked ? props.theme.colors.primary : "transparent"};
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${(props) =>
    props.type === "checkbox" ? props.theme.sizes.borderRadius : "50%"};
  transition: all 150ms;
  ${Sign} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
