import styled, { css } from 'styled-components/macro';
import { heightHeaderDesktop } from '../../utils/constants';
import { Person } from '@styled-icons/bootstrap';

interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly isAuth?: boolean;
}

export const BackgroundLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledHeader = styled.div<IHeaderProps>`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  height: ${heightHeaderDesktop};
  background-color: ${(props) =>
    props.isAuth ? props.theme.colors.place : props.theme.colors.bgBody};
  box-shadow: none;
  ${(props) =>
    props.isAuth &&
    css`
      box-shadow: 0px 1px 0px ${(props) => props.theme.colors.border};
    `};
`;

export const PersonIcon = styled(Person)`
  color: ${(props) => props.theme.colors.text};
`;
