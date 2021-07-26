import React from "react";
import { useTranslation } from "react-i18next";

import {
  Checkbox,
  ICheckbox,
  IRadiobox,
  Radiobox,
} from "components/CheckRadiobox";
import { Label } from "components/generic";
import { Container, ContainerCheckbox, ContainerRadiobox } from "./styles";
import { useContextHospi } from "../../../context/ContextHospi";
import { IInputHookOut, InputLabel } from "components/Input";
import MultiSelect, { ISelectMulti } from "components/MultiSelect";
import TextArea, { ITextArea } from "components/TextArea";

export const AboutMe: React.FC<{
  gender: Partial<IRadiobox>;
  study?: IInputHookOut;
  spokenLanguage: ISelectMulti;
  livedWithHost?: Partial<ICheckbox>;
  livedAbroad?: Partial<ICheckbox>;
  livedOwn?: Partial<ICheckbox>;
  livedAny?: Partial<ICheckbox>;
  shortDescription: Partial<ITextArea>;
}> = ({
  gender,
  study,
  spokenLanguage,
  livedWithHost,
  livedAbroad,
  livedOwn,
  livedAny,
  shortDescription,
}) => {
  const { userStatus } = useContextHospi();
  const user = userStatus === "host" ? "host" : "student";
  const [disabledCheckbox, setDisabledCheckbox] = React.useState(false);
  const { t } = useTranslation(user);

  React.useEffect(() => {
    if (livedAny?.checked) {
      livedWithHost?.changeStatus && livedWithHost?.changeStatus(false);
      livedAbroad?.changeStatus && livedAbroad?.changeStatus(false);
      livedOwn?.changeStatus && livedOwn?.changeStatus(false);
      setDisabledCheckbox(true);
    } else setDisabledCheckbox(false);
    // eslint-disable-next-line
  }, [livedAny?.checked]);

  return (
    <Container>
      <div>
        <p>
          <Label p="0" fontWeight="600">
            {t(`${user}Profile.aboutMe.form.gender.title`)}
          </Label>
        </p>
        {
          <ContainerRadiobox>
            <Radiobox
              {...gender}
              value="male"
              title={
                t(`${user}Profile.aboutMe.form.gender.itemRadio`).split(",")[0]
              }
              p="0 40px 0 0"
            />
            <Radiobox
              {...gender}
              value="female"
              title={
                t(`${user}Profile.aboutMe.form.gender.itemRadio`).split(",")[1]
              }
              p="0 40px 0 0"
            />
            <Radiobox
              {...gender}
              value="prefer_not_answer"
              title={
                t(`${user}Profile.aboutMe.form.gender.itemRadio`).split(",")[2]
              }
              p="0"
            />
          </ContainerRadiobox>
        }
      </div>
      {userStatus === "student" && study && <InputLabel {...study} />}
      <MultiSelect {...spokenLanguage} />
      {userStatus === "student" && (
        <div style={{ width: "100%" }}>
          <p>
            <Label p="0" fontWeight="600">
              {t(`${user}Profile.aboutMe.form.experience.title`)}
            </Label>
          </p>
          <ContainerCheckbox>
            <Checkbox
              {...livedWithHost}
              title={
                t(`studentProfile.aboutMe.form.experience.itemCheckbox`).split(
                  ","
                )[0]
              }
              p="0"
              disabled={disabledCheckbox}
            />
            <Checkbox
              {...livedAbroad}
              title={
                t(`studentProfile.aboutMe.form.experience.itemCheckbox`).split(
                  ","
                )[1]
              }
              p="0"
              disabled={disabledCheckbox}
            />
            <Checkbox
              {...livedOwn}
              title={
                t(`studentProfile.aboutMe.form.experience.itemCheckbox`).split(
                  ","
                )[2]
              }
              p="0"
              disabled={disabledCheckbox}
            />
            <Checkbox
              {...livedAny}
              title={
                t(`studentProfile.aboutMe.form.experience.itemCheckbox`).split(
                  ","
                )[3]
              }
              p="0"
            />
          </ContainerCheckbox>
        </div>
      )}
      <TextArea {...shortDescription} />
    </Container>
  );
};
