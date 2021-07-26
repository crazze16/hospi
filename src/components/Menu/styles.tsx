import styled from "styled-components/macro";

import { Label } from "../generic";
import { ILabelProps } from "../mixins";
import { FlexBox } from "../containers";

export const ContainerMenu = styled(FlexBox)`
  & a {
    text-decoration: none;
    transition: 0.2s;
    color: ${(props) => props.theme.colors.text};
    &.active {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Item = styled(Label)<ILabelProps & { m?: string }>`
  font-size: ${(props) => props.fontSize || props.theme.font.sizeMenu};
  background-color: transparent;
  font-weight: 400;
  cursor: pointer;
  padding: 0;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
