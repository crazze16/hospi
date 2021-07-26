import styled, { css } from "styled-components/macro";
import { Calendar4, PencilSquare } from "@styled-icons/bootstrap";

import { Label } from "../generic";
import { ILabelProps } from "../mixins";
import { MixinStyledInput } from "components/Input/styles";

export const IcoCalendar = styled(Calendar4)<{ fontColor: boolean }>`
  cursor: pointer;
  margin-left: ${(props) => props.theme.sizes.input.padding};
  color: ${(props) =>
    props.fontColor ? props.theme.colors.textDimmed : props.theme.colors.text};
`;

export const IcoEdit = styled(PencilSquare)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.thirdly};
`;

export const LabelEdit = styled(Label).attrs<ILabelProps>((props) => ({
  bgColor: "transparent",
  fontWeight: "400",
  cursor: "pointer",
  fontColor: props.theme.colors.text,
}))<{ colorEdit?: boolean; colorDisabled?: boolean }>`
  // padding: ${(props) => props.theme.sizes.input.padding};
  ${(props) =>
    props.colorDisabled &&
    css`
      color: ${(props) => props.theme.colors.textMuted};
    `};
  ${(props) =>
    props.colorEdit &&
    css`
      color: ${(props) => props.theme.colors.thirdly};
    `};
`;

export const Container = styled.div`
  ${MixinStyledInput};
  background-color: ${(props) => props.theme.colors.place};
`;
