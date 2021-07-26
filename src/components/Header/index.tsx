import React, { useEffect, useRef, useState } from 'react';

import { ContainerMain } from '../containers';
import { Logo } from '../Icons/Logo';
import { Menu } from '../Menu';
import { useContextHospi } from '../../context/ContextHospi';
import { BackgroundLayout, PersonIcon, StyledHeader } from './styles';
import useSizeWindow from 'utils/hooks/useWindowSize';
import TabletMenu from 'components/MobileMenu/TabletMenu';
import Burger from 'components/MobileMenu/Burger';
import useOnClickOutside from 'utils/hooks/useOnClickOutside';
import {
  HOME_ROUTE,
  HOST_PROFILEVIEW_ROUTE,
  STUDENT_PROFILEVIEW_ROUTE,
} from 'utils/constants';
import { NavLink, useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();
  const { userStatus } = useContextHospi();
  const device = useSizeWindow();

  const [open, setOpen] = useState<boolean>(false);

  const node = useRef(null);
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    setOpen(false);
  }, [history.location.pathname]);
  return (
    <StyledHeader isAuth={userStatus !== undefined}>
      <ContainerMain>
        {device === 'tablet' || device === 'mobile' ? (
          <>
            {open ? <BackgroundLayout></BackgroundLayout> : null}
            <div ref={node}>
              <TabletMenu open={open} setOpen={setOpen} />
              <Burger open={open} setOpen={setOpen} />
            </div>
            <NavLink to={HOME_ROUTE} key={HOME_ROUTE}>
              <Logo />
            </NavLink>
            {userStatus ? (
              <NavLink
                to={
                  userStatus === 'student'
                    ? STUDENT_PROFILEVIEW_ROUTE
                    : HOST_PROFILEVIEW_ROUTE
                }
                key={
                  userStatus === 'student'
                    ? STUDENT_PROFILEVIEW_ROUTE
                    : HOST_PROFILEVIEW_ROUTE
                }
              >
                <PersonIcon size="2.2em" />
              </NavLink>
            ) : (
              <span></span>
            )}
          </>
        ) : (
          <>
            <NavLink to={HOME_ROUTE} key={HOME_ROUTE}>
              <Logo />
            </NavLink>
            <Menu />
          </>
        )}
      </ContainerMain>
    </StyledHeader>
  );
};

export default Header;
