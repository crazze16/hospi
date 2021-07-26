import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Button, Label, Title } from "components/generic";
import { RoleUser } from "../interfaces/intarfaces";

import {
  FlexBox,
  ContainerValue,
  ContainerLogin,
  ContainerRedirect,
} from "components/containers";
import { InputLabel, InputLabelPassword, useInput } from "components/Input";

import { useContextHospi } from "context/ContextHospi";
import {
  EMPTY,
  HOST_PROFILEVIEW_ROUTE,
  STUDENT_PROFILEVIEW_ROUTE,
} from "utils/constants";
import { ContainerView } from "components/containers";
import { MenuLeftSide } from "components/MenuLeftSide";
import { Auth } from "aws-amplify";
import { MainSide } from "./ProfileUserEdit/styles";
import { theme } from "styles/theme";

// Max width Container
const maxWidthContainer = "600px";

export const ChangePassword: React.FC = () => {
  const history = useHistory();
  const [loginWrong, setLoginWrong] = React.useState(EMPTY);
  const [changedPassword, setChangedPassword] = React.useState(false);

  const { userStatus } = useContextHospi();
  const user: RoleUser = userStatus || "student";
  const { t } = useTranslation(user);
  const { t: t_login } = useTranslation("login");
  const email_show = useInput("");
  const password_old = useInput("");
  const password_new = useInput("");
  const password_confirm = useInput("");

  React.useEffect(() => {
    const getID = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      email_show.onChange(attributes.email ?? "");
    };
    getID();
    // eslint-disable-next-line
  }, []);

  const sendFromData = async () => {
    if (password_new.value !== password_confirm.value) {
      setLoginWrong(t_login("error.unequalPasswords"));
    } else {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          return Auth.changePassword(
            user,
            String(password_old.value),
            String(password_new.value)
          );
        })
        .then((data) => setChangedPassword((prev) => !prev))
        .catch((err) => {
          console.log(err.message);
          setLoginWrong(err.message);
        });
    }
  };

  const cancel = async () => {
    history.push(
      user === "host" ? HOST_PROFILEVIEW_ROUTE : STUDENT_PROFILEVIEW_ROUTE
    );
  };

  // When changed password
  if (changedPassword)
    return (
      <ContainerLogin>
        <ContainerRedirect>
          <Title m="0 0 24px 0">{t_login("edit.message.title")}</Title>
          <Label lineHeight="150%">{t_login("edit.message.text")}</Label>
        </ContainerRedirect>
        <Button
          main
          fontWeight="400"
          w="100%"
          m="24px 0 0 0"
          onClick={() => {
            setChangedPassword((prev) => !prev);
            history.push(
              user === "host"
                ? HOST_PROFILEVIEW_ROUTE
                : STUDENT_PROFILEVIEW_ROUTE
            );
          }}
        >
          OK
        </Button>
      </ContainerLogin>
    );

  return (
    <ContainerView>
      <MenuLeftSide />
      <span></span>
      <MainSide>
        <Title
          m="60px 0 0 0"
          style={{ width: "100%", maxWidth: maxWidthContainer }}
        >
          {t_login("edit.title")}
        </Title>
        <ContainerValue maxWidth={maxWidthContainer}>
          <Title m="0 0 24px 0" fontSize="20px">
            {t(`${user}Profile.login.title`)}
          </Title>
          <InputLabel
            {...email_show}
            title={t_login("login.email")}
            type="email"
            disabled
          />
          <InputLabelPassword
            {...password_old}
            title={t_login("login.password")}
            type="password"
            placeholder={t_login("edit.currentPassword")}
            p="24px 0"
          />
          <InputLabelPassword
            {...password_new}
            title={t_login("edit.newPassword")}
            type="password"
            placeholder={t_login("edit.newPassword")}
            p="24px 0"
          />
          <InputLabelPassword
            {...password_confirm}
            title={t_login("edit.confirmPassword")}
            type="password"
            placeholder={t_login("edit.newPassword")}
            p="24px 0"
          />
          <Label
            p="0"
            fontColor={loginWrong === EMPTY ? theme.colors.place : "red"}
            fontWeight="400"
          >
            {loginWrong}
          </Label>
        </ContainerValue>

        <div style={{ width: "100%", maxWidth: maxWidthContainer }}>
          <FlexBox justify="flex-end" margin="0 0 24px 0" width="100%">
            <Button normal onClick={() => cancel()} m="0 24px 0 0">
              Cancel
            </Button>
            <Button main onClick={() => sendFromData()}>
              {t(`${user}Profile.buttonSave.title`)}
            </Button>
          </FlexBox>
        </div>
      </MainSide>
    </ContainerView>
  );
};
