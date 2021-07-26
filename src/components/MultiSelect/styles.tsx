import styled, { css } from "styled-components/macro";
import { XCircle } from "@styled-icons/bootstrap";

import { Label } from "../generic";

import {
  MixinFloatElement,
  MixinFont,
  MixinPlace,
  ILabelProps,
  IPlaceProps,
} from "../mixins";
import { FlexBox, IFlex } from "../containers";

export const StyledPrefix = styled(Label)`
  ${MixinFloatElement};
  right: ${(props) => props.theme.sizes.input.padding};
  padding: 0;
`;

export const CloseButton = styled(XCircle)`
  width: 1.1em;
  height: 1.1em;
  margin-left: 0.2em;
  color: ${(props) => props.theme.colors.textDimmed};
  &:hover {
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;
export const ItemsMultiSelect = styled(FlexBox).attrs<
  IFlex & ILabelProps & IPlaceProps
>((props) => ({
  grow: 0,
  p: "4px 8px",
  m: "2px",
  // gap: "5px",
  fontColor: props.fontColor || props.theme.colors.text,
  bgColor: props.bgColor || props.theme.colors.secondary,
}))<ILabelProps & IPlaceProps & { muted?: boolean }>`
  ${MixinFont};
  ${MixinPlace};
  cursor: initial;
  ${(props) =>
    props.muted &&
    css`
      color: ${(props) => props.theme.colors.textMuted};
    `}
`;

export const ContainerSelectedValue = styled(FlexBox).attrs<IFlex>((props) => ({
  justify: props.justify || "flex-start",
  // gap: "0.4em",
}))`
  ${MixinFont};
  ${MixinPlace};
  width: 100%;
  background-color: ${(props) => props.theme.colors.place};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: 0.1em 2em 0.1em 0.1em;
  cursor: pointer;
`;

export const PopupSelect = styled.div`
  position: absolute;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.place};
  opacity: 0;
  transition: 0.7s;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  &.active {
    opacity: 1;
  }
  right: 0;
  width: 100%;
  z-index: 40;
  top: calc(100% + 0.2em);
  & p {
    width: 100%;
  }
`;

export const ContainerItem = styled(FlexBox)`
  direction: column;
  align-items: flex-start;
  overflow-y: auto;
  max-height: 8em;
`;

export const Item = styled(Label)<ILabelProps>`
  font-size: ${(props) => props.fontSize || props.theme.font.sizeMenu};
  background-color: transparent;
  font-weight: 400;
  cursor: pointer;
  padding: 0.4em 0 0.4em 0.5em;
  display: block;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    // color: ${(props) => props.theme.colors.place};
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 0;
  }
`;
