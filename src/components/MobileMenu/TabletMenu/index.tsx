import React from "react";
import { Auth } from "aws-amplify";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { SplitLine } from "components/generic";
import { useContextHospi } from "context/ContextHospi";
import { hostRoutes, publicRoutes, studentRoutes } from "routes";
import {
  HOME_ROUTE,
  HOST_PROFILEEDIT_ROUTE,
  HOST_PROFILE_ROUTE,
  LOGIN_ROUTE,
  STUDENT_PROFILEEDIT_ROUTE,
  STUDENT_PROFILE_ROUTE,
} from "utils/constants";
import { Item, StyledMenu } from "./styles";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TabletMenu = ({ open, setOpen }: IProps) => {
  const { t } = useTranslation();
  const { t: t_popup } = useTranslation("student");
  const { t: t_host } = useTranslation("host");
  const { userStatus, setUser } = useContextHospi();

  return (
    <StyledMenu open={open}>
      {publicRoutes.map((item) => (
        <NavLink to={item.path} key={item.path}>
          <Item>{t(`menu.${item.keyLocalize}`)}</Item>
        </NavLink>
      ))}
      <SplitLine>
        <hr />
      </SplitLine>
      {userStatus === undefined ? (
        <NavLink to={userStatus === undefined ? LOGIN_ROUTE : HOME_ROUTE}>
          <Item>{t("menu.unlogin")}</Item>
        </NavLink>
      ) : (
        <>
          <SplitLine>
            <hr />
          </SplitLine>
          {userStatus === "student" &&
            studentRoutes
              .filter(
                (item) =>
                  ![STUDENT_PROFILE_ROUTE, STUDENT_PROFILEEDIT_ROUTE].includes(
                    item.path
                  )
              )
              .map((item) => (
                <NavLink to={item.path} key={item.path}>
                  <Item fontSize="16px">
                    {t_popup(`menuStudent.${item.keyLocalize}`)}
                  </Item>
                </NavLink>
              ))}
          {userStatus === "host" &&
            hostRoutes
              .filter(
                (item) =>
                  item.path !== HOST_PROFILE_ROUTE &&
                  item.path !== HOST_PROFILEEDIT_ROUTE
              )
              .map((item) => (
                <NavLink to={item.path} key={item.path}>
                  <Item fontSize="16px">
                    {t_host(`menuHost.${item.keyLocalize}`)}
                  </Item>
                </NavLink>
              ))}
          <SplitLine>
            <hr />
          </SplitLine>
          <Item
            fontSize="16px"
            onClick={() => {
              Auth.signOut({ global: true });
              setUser(undefined);
            }}
          >
            {t_popup(`menuStudent.signOut`)}
          </Item>
        </>
      )}
    </StyledMenu>
  );
};
export default TabletMenu;
