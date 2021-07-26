import styled, { css } from "styled-components/macro";
import {
  ChevronBarLeft,
  ChevronBarRight,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronLeft,
  ChevronRight,
  CircleFill,
} from "@styled-icons/bootstrap";

const cellDay = "2.5em"; // size cellz
const paddingCalendar = "1em";
const paddingCell = "0.4em";

export const StyledBlock = styled.div`
  display: block;
  position: relative;
  flex-grow: 1;
`;

export const StyledCalendar = styled(StyledBlock)`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: ${paddingCalendar};
  background-color: ${(props) => props.theme.colors.place};
  max-width: calc((${cellDay} + ${paddingCell}) * 7 + ${paddingCalendar} * 2);
`;

export const StyledMonthYear = styled.div`
  color: ${(props) => props.theme.colors.thirdly};
  font-size: 16px;
`;

interface IBoard extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
}

export const StyledBoard = styled.div<IBoard>`
  display: grid;
  grid-template-rows: 1.5em repeat(6, ${cellDay});
  grid-template-columns: repeat(7, ${cellDay});
  gap: ${paddingCell};
`;
export interface IDayCalendar extends React.HTMLAttributes<HTMLDivElement> {
  boundaryInterval?: boolean;
  bgSelectDate?: boolean;
  insideInterval?: boolean;
  strangerDay?: boolean;
}
export const DayCalendar = styled.span<IDayCalendar>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${cellDay};
  width: ${cellDay};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  ${(props) =>
    props.boundaryInterval &&
    css`
      color: ${(props) => props.theme.colors.place};
      background-color: ${(props) => props.theme.colors.thirdly};
    `};
  ${(props) =>
    props.insideInterval &&
    css`
      background-color: ${(props) => props.theme.colors.secondary};
    `};
  ${(props) =>
    props.strangerDay &&
    css`
      color: ${(props) => props.theme.colors.textDimmed};
    `};
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.textDimmed};
  text-align: center;
`;

export const MixinChangeMonth = css`
  color: ${(props) => props.theme.colors.textMuted};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const StyledPreviosMonth = styled(ChevronLeft)`
  ${MixinChangeMonth};
  margin-left: 0.6em;
`;

export const StyledNextMonth = styled(ChevronRight)`
  ${MixinChangeMonth};
  margin-left: 0.6em;
`;

export const StyledPreviosYear = styled(ChevronDoubleLeft)`
  ${MixinChangeMonth};
  margin-left: 0.4em;
`;

export const StyledNextYear = styled(ChevronDoubleRight)`
  ${MixinChangeMonth};
  margin-left: 0.4em;
`;

export const StyledPreviosDecade = styled(ChevronBarLeft)`
  ${MixinChangeMonth};
  margin-left: 0.6em;
`;

export const StyledNextDecade = styled(ChevronBarRight)`
  ${MixinChangeMonth};
  margin-left: 0.6em;
`;

export const StyledToday = styled(CircleFill)`
  ${MixinChangeMonth};
  margin-left: 0.6em;
`;
