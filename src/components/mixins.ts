import { css } from "styled-components";

export interface ILabelProps {
  readonly fontSize?: string;
  readonly fontWeight?: string;
  readonly fontFamily?: string;
  readonly fontColor?: string;
  readonly lineHeight?: string;
}

export const MixinFont = css<ILabelProps>`
  font-size: ${(props) => props.fontSize || props.theme.font.size};
  font-weight: ${(props) => props.fontWeight || props.theme.font.weightNormal};
  font-family: ${(props) => props.fontFamily || props.theme.font.family};
  color: ${(props) => props.fontColor || props.theme.colors.text};
  line-height: ${(props) => props.lineHeight || props.theme.sizes.lineHeight};
`;

export interface IPlaceProps {
  readonly bgColor?: string;
  readonly cursor?: string;
  readonly radius?: string;
  readonly border?: string;
  readonly p?: string;
  readonly m?: string;
  readonly w?: string;
  readonly h?: string;
}

export const MixinPlace = css<IPlaceProps>`
  background-color: ${(props) => props.bgColor || "transparent"};
  cursor: ${(props) => props.cursor || "initial"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || props.theme.sizes.borderRadius};
  padding: ${(props) => props.p || props.theme.sizes.input.padding};
  margin: ${(props) => props.m || "initial"};
  width: ${(props) => props.w || "initial"};
  height: ${(props) => props.h || "initial"};
`;

export const MixinFloatElement = css`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;
