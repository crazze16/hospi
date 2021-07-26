import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useTranslation } from "react-i18next";

import {
  FlexBox,
  ContainerValueView,
  ContainerTitleEdit,
} from "components/containers";
import { Circle, IcoEdit, Label, Title } from "components/generic";
import { LOGIN_EDIT } from "utils/constants";

export const LoginDetails = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const { t } = useTranslation("student");
  useEffect(() => {
    const getEmail = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setEmail(attributes.email ?? "");
    };
    getEmail();
  }, []);
  return (
    <ContainerValueView>
      {/* <FlexBox justify="space-between"> */}
      <ContainerTitleEdit>
        <Title m="0 0 4px 0" fontSize="20px">
          {t("studentProfile.login.title")}
        </Title>

        <FlexBox
          justify="flex-end"
          // gap="0.1em"
          onClick={() => history.push(LOGIN_EDIT)}
        >
          <IcoEdit size="1.1em" />
          <Label cursor="pointer" p="0 0 0 4px">Edit</Label>
        </FlexBox>
      </ContainerTitleEdit>
      {/* </FlexBox> */}
      <FlexBox direction="column" align="flex-start">
        <Label p="0">{email}</Label>
        <p>
          {Array(10)
            .fill(1)
            .map((_, i) => (
              <Circle size="8px" key={i} />
            ))}
        </p>
      </FlexBox>
    </ContainerValueView>
  );
};
