import styled, { css } from "styled-components/macro";
import { ChevronDown } from "@styled-icons/bootstrap";

export const ContainerPopup = styled.div`
  position: relative;
  z-index: 1000;
  & .panel {
    width: 224px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    & > div > label {
      padding: 16px;
    }
    & a {
      padding: 8px 16px;
    }
  }
  & > section {
    transition: 0.2s;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ArrowDown = styled(ChevronDown)<{ up?: boolean }>`
  font-size: ${(props) => props.theme.font.sizeMenu};
  margin-left: 0.5em;
  transition: 0.2s;
  padding: 0.4em;
  cursor: pointer;
  ${(props) =>
    props.up &&
    css`
      transform: rotateX(180deg);
    `}
`;
