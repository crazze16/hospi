import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

import { Radiobox, useRadiobox } from "../components/CheckRadiobox";
import {
  Button,
  Title,
  SplitLine,
  Label,
  ErrorMessage,
} from "../components/generic";
import {
  BorderBox,
  FlexBox,
  StyledBlock,
  ContainerLogin,
  ContainerRedirect,
} from "../components/containers";
import { InputLabel, InputLabelPassword, useInput } from "../components/Input";
import { LOGIN_ROUTE, REGISTER_ROUTE, EMPTY } from "../utils/constants";
import { useValidateEmail, useValidateLength } from "../utils/validators";
import { useContextHospi } from "../context/ContextHospi";
import { theme } from "styles/theme";

export const Login: React.FC = () => {
  const history = useHistory();
  const { pathname: nameRoute } = useLocation();
  const { t } = useTranslation("login");
  const { setUser } = useContextHospi();
  // Input data
  const email = useInput(process.env.REACT_APP_AWS_USER_EMAIL || ""); // process.env.REACT_APP_AWS_USER_EMAIL as StrNum
  const password = useInput(process.env.REACT_APP_AWS_USER_PASS || ""); //process.env.REACT_APP_AWS_USER_PASS as StrNum
  const confirmPassword = useInput("");
  const studentORhost = useRadiobox("whoisit", "student");
  // Switchers states
  const [loginWrong, setLoginWrong] = useState(EMPTY);
  const [disabledSendButton, setDisabledSendButton] = useState(true);
  const [createdNewUser, setCreatedNewUser] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassError, setShowPassError] = useState(false);

  const isRegister = nameRoute === REGISTER_ROUTE;
  // Front-end validators
  const isEmail = useValidateEmail({ line: email.value });
  const isPass = useValidateLength({
    line: password.value,
    params: { min: 4, max: 20 },
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setDisabledSendButton(
      [
        isEmail.message === EMPTY,
        !isEmail.state,
        isPass.message === EMPTY,
        !isPass.state,
      ].some((item) => item)
    );
  });

  const handleLogin = async () => {
    if (isRegister) {
      if (password.value !== confirmPassword.value) {
        setLoginWrong(t("error.unequalPasswords"));
      } else {
        // If don't insert user's role in Cognito
        // localStorage.setItem("role", studentORhost.selected);
        Auth.signUp({
          username: String(email.value) as string,
          password: String(password.value) as string,
          attributes: {
            profile: studentORhost.selected as string,
            email: String(email.value),
          },
        })
          .then((data) => {
            setCreatedNewUser(true);
          })
          .catch((err) => {
            console.log(err.message);
            setLoginWrong(err.message);
          });
      }
    } else {
      Auth.signIn({
        username: email.value as string,
        password: password.value as string,
      })
        .then((data) => {
          setUser(data.attributes.sub);
        })
        .catch((err) => {
          setUser(undefined);
          setLoginWrong(err.message as string);
        });
    }
  };

  const runLink = (): void => {
    history.push(isRegister ? LOGIN_ROUTE : REGISTER_ROUTE);
  };

  // When user sent registration data
  if (createdNewUser)
    return (
      <ContainerLogin>
        <ContainerRedirect>
          <Title m="0 0 24px 0">{t("message.title")}</Title>
          <Label lineHeight="150%" p="0">
            {t("message.text")}
          </Label>
        </ContainerRedirect>
        <Button
          main
          fontWeight="400"
          w="100%"
          m="24px 0 0 0"
          onClick={() => {
            setCreatedNewUser((prev) => !prev);
            history.push(LOGIN_ROUTE);
          }}
        >
          {t("message.buttonTitle")}
        </Button>
      </ContainerLogin>
    );

  return (
    <ContainerLogin>
      <Title m="0 0 24px 0">
        {t(`${isRegister ? "register" : "login"}.title`)}
      </Title>
      {isRegister && (
        <StyledBlock p="0 0 24px 0">
          <Label p="0" fontWeight="600">
            {t("register.registerAs.title")}
          </Label>
          <FlexBox grow={0} width="100%" justify="space-between">
            <BorderBox
              active={studentORhost.selected === "student"}
              m="0 16px 0 0"
            >
              <Radiobox
                {...studentORhost}
                title={t("register.registerAs.student")}
                value="student"
                p="0.5rem 3em 0.5rem 1.5rem"
              />
            </BorderBox>
            <BorderBox active={studentORhost.selected === "host"}>
              <Radiobox
                {...studentORhost}
                title={t("register.registerAs.host")}
                value="host"
                p="0.5rem 4em 0.5rem 1.5rem"
              />
            </BorderBox>
          </FlexBox>
        </StyledBlock>
      )}
      <div style={{ width: "100%" }}>
        <InputLabel
          {...email}
          title={t("login.email")}
          type="email"
          placeholder={t("login.placeholderemail")}
          onBlur={() => {
            setShowEmailError(true);
          }}
          onFocus={() => {
            setShowEmailError(false);
          }}
          error={!isEmail.state && showEmailError}
        >
          <ErrorMessage error={!isEmail.state && showEmailError}>
            {t("error.wrongEmail")}
          </ErrorMessage>
        </InputLabel>
        <InputLabelPassword
          {...password}
          title={t("login.password")}
          type="password"
          placeholder="********"
          onBlur={() => {
            setShowPassError(true);
          }}
          onFocus={() => {
            setShowPassError(false);
          }}
          error={!isPass.state && showPassError}
        >
          <ErrorMessage error={!isPass.state && showPassError}>
            {t("error.wrongPassword")}
          </ErrorMessage>
        </InputLabelPassword>
        {isRegister && (
          <InputLabelPassword
            {...confirmPassword}
            title={t("register.confirmPassword")}
            type="password"
            placeholder="********"
          />
        )}
        <Label
          p="0"
          fontColor={loginWrong === EMPTY ? theme.colors.bgBody : "red"}
          fontWeight="400"
        >
          {loginWrong}
        </Label>
      </div>

      <Button
        main
        fontWeight="400"
        onClick={handleLogin}
        w="100%"
        disabled={disabledSendButton}
        m="24px 0 24px 0"
      >
        {t(`${isRegister ? "register" : "login"}.buttonFirst`)}
      </Button>
      <SplitLine>
        <hr />
        <label>or</label>
      </SplitLine>
      <Button normal fontWeight="400" onClick={runLink} w="100%" m="24px 0 0 0">
        {t(`${isRegister ? "register" : "login"}.buttonSecond`)}
      </Button>
    </ContainerLogin>
  );
};
