import { Label } from "components/generic";
import { ILabelProps } from "components/mixins";
import styled from "styled-components/macro";

export const Item = styled(Label)<ILabelProps>`
  font-size: 1.5rem;
  padding: 1.5rem 0 0 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s linear;
  cursor: pointer;

  @media ${(props) => props.theme.media.phone} {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.place};
  box-shadow: 0px 1px 0px #dcd6ce;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  & a {
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;
    color: ${(props) => props.theme.colors.text};
    &.active {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }

  a {
    padding: 1.5rem 0;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    transition: color 0.3s linear;

    @media ${(props) => props.theme.media.phone} {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
