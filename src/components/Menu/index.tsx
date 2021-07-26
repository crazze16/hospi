import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { publicRoutes, studentRoutes, hostRoutes } from "../../routes";
import { useContextHospi } from "../../context/ContextHospi";
import {
  HOME_ROUTE,
  LANGUAGES,
  LOGIN_ROUTE,
  STUDENT_PROFILE_ROUTE,
  HOST_PROFILE_ROUTE,
  STUDENT_PROFILEEDIT_ROUTE,
  HOST_PROFILEEDIT_ROUTE,
} from "../../utils/constants";
import { ContainerMenu, Item } from "./styles";
import { PopupMenu } from "components/PopupMenu";
import { SplitLine, Label } from "components/generic";
import { FlexBox } from "components/containers";
import SelectLanguage from "components/SelectLanguage";
// import { signOut } from "utils/utilAmplify";
import { Auth } from "aws-amplify";

export const Menu: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { t: t_popup } = useTranslation("student");
  const { t: t_host } = useTranslation("host");
  const { userStatus, setUser, getNameUser } = useContextHospi();

  return (
    <ContainerMenu justify="flex-end">
      {publicRoutes.map((item) => (
        <NavLink to={item.path} key={item.path}>
          <Item m="0 40px 0 0">{t(`menu.${item.keyLocalize}`)}</Item>
        </NavLink>
      ))}
      {userStatus === undefined ? (
        <NavLink to={userStatus === undefined ? LOGIN_ROUTE : HOME_ROUTE}>
          <Item m="0 24px 0 0">{t("menu.unlogin")}</Item>
        </NavLink>
      ) : (
        <PopupMenu title={<Item>{t("menu.login")}</Item>} top="28px">
          <FlexBox direction="column" align="flex-start">
            <FlexBox
              direction="column"
              align="flex-start"
              // padding="8px 0 8px 16px"
            >
              <Label p="16px 0 0 16px" fontWeight="400">
                {t_popup(`menuStudent.signedIn`)}
              </Label>
              <Label p="0 0 8px 16px" fontWeight="600">
                {getNameUser}
              </Label>
            </FlexBox>

            <SplitLine>
              <hr />
            </SplitLine>
            {userStatus === "student" &&
              studentRoutes
                .filter(
                  (item) =>
                    ![
                      STUDENT_PROFILE_ROUTE,
                      STUDENT_PROFILEEDIT_ROUTE,
                    ].includes(item.path)
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
              style={{ display: "block", width: "100%" }}
              className="logout"
              onClick={() => {
                Auth.signOut({ global: true });
                setUser(undefined);
                history.push(HOME_ROUTE);
              }}
            >
              {t_popup(`menuStudent.signOut`)}
            </Item>
          </FlexBox>
        </PopupMenu>
      )}
      <SelectLanguage items={LANGUAGES} />
    </ContainerMenu>
  );
};
