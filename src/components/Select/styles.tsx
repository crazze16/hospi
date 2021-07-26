import React from "react";
import styled from "styled-components/macro";

import { MixinFont, MixinPlace } from "../mixins";

export const StyledSelect = styled.select<
  React.HTMLAttributes<HTMLSelectElement>
>`
  ${MixinFont};
  ${MixinPlace};
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.colors.place};
  cursor: pointer !important;
  color: ${(props) =>
    props.value === ""
      ? props.theme.colors.textMuted
      : props.theme.colors.text};
  &:focus {
    color: ${(props) => props.theme.colors.text};
  }
  & option {
    background: ${(props) => props.theme.colors.place};
    color: ${(props) => props.theme.colors.text};
    &::hover {
      color: red !important;
    }
  }
`;
