import styled from "styled-components";
import { MixinPlace } from "../mixins";
import { ContainerPopupMenu } from "../containers";

export const ContainerSelectedValue = styled.div`
  ${MixinPlace};
  cursor: pointer;
  padding: 0;
`;

export const PopupSelect = styled(ContainerPopupMenu)`
  right: 1em;
  z-index: 200;
  font-size: 14px;
  top: calc(
    1 * ${(props) => props.theme.font.size} + 3 *
      ${(props) => props.theme.sizes.input.padding} + 2px
  );
`;

export const StyleFlag = {
  width: "0.8em",
  height: "0.8em",
  margin: "0 0.5em",
};

export const ItemLang = styled.span`
  cursor: pointer;
  width: 100%;
  padding: 0 4px;
  &.active {
    background-color: ${(props) => props.theme.colors.activeRadioBox};
  }
`;
