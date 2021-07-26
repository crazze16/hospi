import styled from "styled-components/macro";
import { heightHeaderDesktop } from "../../utils/constants";

export const ConteinerLeftSide = styled.div`
  position: fixed;
  top: calc(${heightHeaderDesktop} + 72px);
  left: center;
  align-self: flex-start;
  // transform: translateX(-10px);
  width: 248px;
  height: 343px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.place};
  padding: 24px;
  @media (max-width: 845px) {
    display: none;
  }
  & li {
    list-style-type: none;
  }

  & a {
    text-decoration: none;
    padding: 8px 8px 8px 16px;
    cursor: pointer;
    display: block;
    border-radius: 4px;
    margin-bottom: 8px;

    &.active {
      background-color: ${(props) => props.theme.colors.secondary};

      label {
        font-weight: 600;
      }
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
