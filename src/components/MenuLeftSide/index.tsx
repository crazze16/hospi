import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { Label, Title } from "components/generic";
import { ConteinerLeftSide } from "./styles";
import {
  HOST_PROFILEEDIT_ROUTE,
  STUDENT_PROFILE_ROUTE,
  HOST_PROFILE_ROUTE,
  STUDENT_PROFILEEDIT_ROUTE,
} from "utils/constants";

import { hostRoutes, studentRoutes } from "routes";
import { useContextHospi } from "../../context/ContextHospi";

export const MenuLeftSide: React.FC = () => {
  const { userStatus } = useContextHospi();
  const { t } = useTranslation(userStatus || "student");

  return (
    <ConteinerLeftSide>
      <Title m="0 0 18px 16px" fontSize="24px">
        My hospi
      </Title>
      <ul>
        {(userStatus === "host" ? hostRoutes : studentRoutes)
          .filter(
            (item) =>
              !(userStatus === "host"
                ? [HOST_PROFILE_ROUTE, HOST_PROFILEEDIT_ROUTE]
                : [STUDENT_PROFILE_ROUTE, STUDENT_PROFILEEDIT_ROUTE]
              ).includes(item.path)
          )
          .map((item, iter) => (
            <li key={item.path}>
              <NavLink to={item.path}>
                <Label fontSize="20px" cursor="pointer">
                  {iter + 1}.{" "}
                  {t(
                    `${userStatus === "host" ? "menuHost" : "menuStudent"}.${
                      item.keyLocalize
                    }`
                  )}
                </Label>
              </NavLink>
            </li>
          ))}
      </ul>
    </ConteinerLeftSide>
  );
};
