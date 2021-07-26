import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Button, Label, Title } from "../components/generic";
import Modal from "components/Modal";
import { IPerson, IPropsFC, RoleUser, TGender } from "../interfaces/intarfaces";
import {
  FlexBox,
  ContainerGeneric,
  ContainerNotice,
  ContainerValue,
  ContainerRegistration,
  BorderBox,
} from "../components/containers";
import { useInput } from "components/Input";
import TextArea, { useTextArea } from "components/TextArea";
import { useRange } from "components/Range";
import { useSelect } from "components/Select/Index";
import { Radiobox, useRadiobox } from "components/CheckRadiobox";
import { getLanguage } from "fetch/fetchCountries";
import MultiSelect, { useMultiSelect } from "components/MultiSelect";
import StyledDropzone, { useDropZone } from "components/DropZoneImage";

import { useContextHospi } from "../context/ContextHospi";
import {
  createProfileAmplify,
  updateProfileAmplify,
  uploadPhotoAmplify,
} from "utils/utilAmplify";
import { API_USERS, HOST_PROFILEVIEW_ROUTE } from "utils/constants";
import { SocialPreferences } from "../components/pageProfileComponents";
import { PersonalDetailsEdit } from "./ProfileUser/PersonalDetailsEdit";
import { Comparator } from "utils/logics";
import { Auth } from "aws-amplify";

const LeftLabel: React.FC<{ keyItem: string }> = ({ keyItem }) => {
  const { t } = useTranslation("host");

  return (
    <ContainerNotice>
      <Title m="0 0 4px 0" fontSize="16px">
        {t(`hostProfile.${keyItem}.title`)}
      </Title>
      <Label fontSize="14px" p="0">
        {t(`hostProfile.${keyItem}.comment`)}
      </Label>
    </ContainerNotice>
  );
};

export const HostProfile: React.FC = () => {
  const { t } = useTranslation("host");
  const history = useHistory();

  const { userProfile, changeUser, updateProfile } = useContextHospi();
  const [currentUserID, setCurrentUserID] = React.useState(
    userProfile?.user_id || ""
  );
  const [showModal, setShowModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getID = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setCurrentUserID(attributes.sub ?? "");
    };
    getID();
  }, []);

  const titlePholder = (part: string, variable: string): IPropsFC => {
    return {
      title: t(`hostProfile.${part}.form.${variable}.title`),
      placeholder: t(`hostProfile.${part}.form.${variable}.placeholder`),
      w: "initial",
      grow: "1",
    };
  };

  const firstName = {
    ...useInput(userProfile?.first_name || ""),
  };
  const lastName = {
    ...useInput(userProfile?.last_name || ""),
  };
  const phoneCode = {
    ...useSelect(userProfile?.phone_code || undefined),
  };
  const phone = {
    ...useInput(userProfile?.phone_number || ""),
  };

  const gender = useRadiobox("gender", userProfile?.gender || "");
  const spokenLanguage = {
    ...useMultiSelect(getLanguage(), userProfile?.spoken_languages || []),
    ...titlePholder("aboutMe", "spokenLanguage"),
  };
  const shortDescription = {
    ...useTextArea(userProfile?.description || ""),
    ...titlePholder("aboutMe", "aboutYourself"),
  };

  const privacy = useRange(userProfile?.privacy || 50);
  const newInTown = useRange(userProfile?.requested_autonomy || 50);

  const photo = useDropZone();

  const goToStudent = () => changeUser("student");

  const sendFromData = async () => {
    const userFormData: IPerson = {
      user_id: currentUserID,
      first_name: firstName.value as string,
      last_name: lastName.value as string,
      phone_code: phoneCode.value as string,
      phone_number: phone.value as string,
      gender: gender.selected as TGender,
      spoken_languages: spokenLanguage.values,
      description: shortDescription.value as string,
      privacy: privacy.value,
      user_type: "host" as RoleUser,
      requested_autonomy: newInTown.value,
    };

    const data = {
      ...Comparator(userFormData, userProfile ?? {}, "host"),
      ...{
        user_id: currentUserID,
        privacy: privacy.value,
        user_type: "host" as RoleUser,
        requested_autonomy: newInTown.value,
      },
    };
    const response = userProfile
      ? await updateProfileAmplify(API_USERS + `${currentUserID}`, data)
      : await createProfileAmplify(API_USERS, data);

    if (response.hasOwnProperty("status")) {
      console.log(response);
      return;
    }
    if (photo.selectedFile) {
      await uploadPhotoAmplify(
        API_USERS + `${currentUserID}/upload_avatar`,
        photo.selectedFile
      );
    }

    updateProfile(response);
    history.push(HOST_PROFILEVIEW_ROUTE);
  };

  const skipProfile = async () => {
    const userFormData: Partial<IPerson> = {
      user_id: currentUserID,
      privacy: privacy.value,
      user_type: "host" as RoleUser,
      requested_autonomy: newInTown.value,
    };
    if (!userProfile) {
      const response = await createProfileAmplify(API_USERS, userFormData);

      if (response.hasOwnProperty("status")) {
        console.log(response);
        return;
      }
      updateProfile(response);
    }

    history.push(HOST_PROFILEVIEW_ROUTE);
  };

  return (
    <ContainerRegistration>
      <ContainerGeneric>
        <span></span>
        <Title m="60px 0 40px 0">{t("hostProfile.title")}</Title>
        <LeftLabel keyItem="registerAs" />
        <ContainerValue>
          <FlexBox justify="space-between" gap="24px">
            <BorderBox active={true}>
              <Radiobox
                p="1.5rem"
                checked={true}
                selected="host"
                title={t("hostProfile.registerAs.form.host")}
                value="host"
                h="64px"
              />
            </BorderBox>
            <Label onClick={() => goToStudent()} cursor="pointer">
              {t("hostProfile.registerAs.form.other")}
            </Label>
          </FlexBox>
        </ContainerValue>
        <LeftLabel keyItem="personalDetails" />
        <ContainerValue>
          <PersonalDetailsEdit
            firstName={firstName}
            lastName={lastName}
            phoneCode={phoneCode}
            phone={phone}
          />
        </ContainerValue>
        <LeftLabel keyItem="aboutMe" />
        <ContainerValue>
          <Label p="0" fontWeight="600">
            {t(`hostProfile.aboutMe.form.gender.title`)}
          </Label>
          <FlexBox justify="flex-start" gap="40px" margin="12px 0">
            <Radiobox
              {...gender}
              value="male"
              title={
                t(`hostProfile.aboutMe.form.gender.itemRadio`).split(",")[0]
              }
              p="0"
            />
            <Radiobox
              {...gender}
              value="female"
              title={
                t(`hostProfile.aboutMe.form.gender.itemRadio`).split(",")[1]
              }
              p="0"
            />
            <Radiobox
              {...gender}
              value="prefer_not_answer"
              title={
                t(`hostProfile.aboutMe.form.gender.itemRadio`).split(",")[2]
              }
              p="0"
            />
          </FlexBox>
          <MultiSelect {...spokenLanguage} />
          <TextArea {...shortDescription} p="24px 0 0 0 " />
        </ContainerValue>
        <LeftLabel keyItem="socialPreferences" />
        <ContainerValue>
          <SocialPreferences
            roleUser="host"
            privacy={privacy}
            newInTown={newInTown}
            muted={false}
          />
        </ContainerValue>
        <LeftLabel keyItem="profilePicture" />
        <ContainerValue>
          <Label p="0 0 24px 0" fontWeight="600">
            {t(`hostProfile.profilePicture.form.photo.title`)}
          </Label>
          <StyledDropzone {...photo} />
        </ContainerValue>
        <span />
        <FlexBox justify="flex-end" margin="0 0 24px 0">
          <Button normal onClick={() => skipProfile()} m="0 24px 0 0">
            {t(`hostProfile.buttonSkip.title`)}
          </Button>
          <Button main onClick={() => setShowModal(true)}>
            {t(`hostProfile.buttonSave.title`)}
          </Button>
        </FlexBox>
      </ContainerGeneric>
      <Modal
        isShow={showModal}
        handleClose={() => setShowModal(false)}
        children={
          <FlexBox
            align="flex-start"
            direction="column"
            padding="24px"
            className="deleteSection"
          >
            <Title m="0 0 4px 0" fontSize="20px">
              {t(`hostProfile.requestVerified.title`)}
            </Title>
            <Label fontSize="16px">
              {" "}
              {t(`hostProfile.requestVerified.text1`)}
            </Label>
            <Label fontSize="16px">
              {" "}
              {t(`hostProfile.requestVerified.text2`)}
            </Label>
            <FlexBox
              justify="flex-end"
              direction="row"
              align="flex-end"
              width="100%"
              className="buttonGroup"
            >
              <Button normal onClick={() => setShowModal(false)}>
                {t(`hostProfile.requestVerified.buttonSkip`)}
              </Button>
              <Button main onClick={() => sendFromData()}>
                {t(`hostProfile.requestVerified.buttonRequest`)}
              </Button>
            </FlexBox>
          </FlexBox>
        }
      />
    </ContainerRegistration>
  );
};
