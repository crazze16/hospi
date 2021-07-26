import { Auth } from "aws-amplify";
import { ContainerValueView } from "components/containers";
import { ErrorMessage, Label } from "components/generic";
import { InputLabel, InputLabelPassword, useInput } from "components/Input";
import { TitleEdit } from "components/pageProfileComponents";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { theme } from "styles/theme";
import { EMPTY } from "utils/constants";
import { useValidateEmail, useValidateLength } from "utils/validators";

export const LoginEditDetailsEdit = () => {
  const { t } = useTranslation("login");
  const [showPassError, setShowPassError] = useState(false);
  const [loginWrong, setLoginWrong] = useState(EMPTY);
  const [disabledSendButton, setDisabledSendButton] = useState(true);

  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const isEmail = useValidateEmail({ line: email.value });
  const isPass = useValidateLength({
    line: password.value,
    params: { min: 4, max: 20 },
  });

  useEffect(() => {
    const getEmail = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      email.onChange(attributes.email ?? "");
    };
    getEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  return (
    <ContainerValueView>
      <TitleEdit keyItem="login" />
      <div style={{ width: "100%" }}>
        <InputLabel {...email} title={t("login.email")} type="email" disabled />
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

        <InputLabelPassword
          {...confirmPassword}
          title={t("register.confirmPassword")}
          type="password"
          placeholder="********"
        />
        <Label
          p="0"
          fontColor={loginWrong === EMPTY ? theme.colors.bgBody : "red"}
          fontWeight="400"
        >
          {loginWrong}
        </Label>
      </div>
    </ContainerValueView>
  );
};
