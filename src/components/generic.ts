import React from "react";
import { css } from "styled-components";
import styled from "styled-components/macro";
import {
  CircleFill,
  PencilSquare,
  ExclamationTriangle,
  Clock,
  Check2Circle,
  InfoCircle,
    ChevronRight,
    ArrowRightShort,
    ThreeDots,
} from "@styled-icons/bootstrap";
import {
  MixinFloatElement,
  MixinFont,
  MixinPlace,
  ILabelProps,
  IPlaceProps,
} from "./mixins";

interface ITitle {
  m?: string;
  fontSize?: string;
}

export const Title = styled.div<ITitle>`
  font-size: ${(props) => props.fontSize || "24px"};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin: ${(props) => props.m || "0"};
`;

export const SplitLine = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.textMuted};
  & > hr {
    ${MixinFloatElement};
    width: 100%;
    color: ${(props) => props.theme.colors.border};
  }
  & > label {
    position: relative;
    padding: 0 16px;
    background-color: ${(props) => props.theme.colors.bgBody};
  }
`;

export const Label = styled.label<ILabelProps & IPlaceProps>`
  padding: 0;
  ${MixinFont};
  ${MixinPlace};
`;

export const ErrorMessage = styled(Label)<{ error: boolean }>`
  color: transparent;
  ${(props) =>
    props.error &&
    css`
      color: red;
    `};
  font-weight: 400;
  font-size: 0.8em;
`;
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly main?: boolean;
  readonly normal?: boolean;
  readonly outline?: boolean;
  readonly danger?: boolean;
}

export const Button = styled.button<IButtonProps & ILabelProps & IPlaceProps>`
  ${MixinFont};
  ${MixinPlace};
  cursor: pointer;
  padding: ${(props) => props.theme.sizes.input.padding};
  ${(props) =>
    props.main &&
    css`
      color: ${(props) => props.theme.colors.place};
      background-color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.primary};
    `};
  ${(props) =>
    props.normal &&
    css`
      color: ${(props) => props.theme.colors.thirdly};
      background-color: ${(props) => props.theme.colors.secondary};
      border: 1px solid ${(props) => props.theme.colors.secondary};
    `};
  ${(props) =>
    props.outline &&
    css`
      color: ${(props) => props.theme.colors.thirdly};
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colors.border};
    `};
  ${(props) =>
    props.danger &&
    css`
      color: ${(props) => props.theme.colors.place};
      background-color: #eb5757;
      border: 1px solid #eb5757;
    `};
  &:active:not(:disabled) {
    color: red;
  }
  &:hover,
  &:disabled {
    opacity: 0.7;
  }
`;

export const IcoEdit = styled(PencilSquare)<{ color?: string }>`
  cursor: pointer;
  color: ${(props) => props.color || props.theme.colors.text};
`;

export const Circle = styled(CircleFill)`
  color: ${(props) => props.theme.colors.text};
  margin: 8px 4px 0 0;
`;

export const IcoInfo = styled(InfoCircle)<{ color?: string }>`
  cursor: pointer;
  color: ${(props) => props.color || props.theme.colors.text};
`;

// For Host verify
export const IcoWarning = styled(ExclamationTriangle)`
  color: ${(props) => props.theme.colors.place};
  padding: 0 4px 2px 0;
`;

export const IcoClock = styled(Clock)`
  padding: 0 4px 2px 0;
`;

export const IcoArrowRight = styled(ChevronRight)<{ left?: boolean}>`
  color: ${(props) => props.theme.colors.place};
  //padding: 0 4px 2px 0;
  ${(props) =>
      props.left &&
      css`
      transform: rotateY(180deg);
    `}
`;

export const IcoShortArrowRight = styled(ArrowRightShort)<{ left?: boolean}>`
  color: ${(props) => props.theme.colors.place};
  //padding: 0 4px 2px 0;
  ${(props) =>
      props.left &&
      css`
      transform: rotateY(180deg);
    `}
`;

export const IcoThreeDots = styled(ThreeDots)<{color?: string}>`
  color: ${(props) => props.color ? props.color : props.theme.colors.place};
`;


export const IcoDone = styled(Check2Circle)`
  padding: 0 4px 2px 0;
`;

// For HOME
export const Section = styled.section`
  margin: 6rem 0;
  @media (max-width: 600px) {
    margin: 4rem 0;
  }
`;

export const BtnExtended = styled(Button)`
  @media (max-width: 260px) {
    margin-top: 10px;
  }
`;

export const TitleH1 = styled.h1<{
  m?: string;
  maxWidth?: string;
  positionText?: "start" | "center" | "end";
}>`
  font-size: ${(props) => props.theme.font.sizeTitle};
  width: 100%;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin: ${(props) => props.m || "0"};
  text-align: ${(props) => props.positionText || "start"};
  max-width: ${(props) => props.maxWidth || "initial"};
`;

export const TitleH2 = styled.h2<{ m?: string }>`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.sizeSubTitle};
  font-weight: ${(props) => props.theme.font.weightMedium};
  margin: ${(props) => props.m || "0"};
`;

export const TitleH3 = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.size};
  font-weight: ${(props) => props.theme.font.weightMedium};
  margin-bottom: 4px;
`;
