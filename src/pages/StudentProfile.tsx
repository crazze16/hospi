import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Button, Label, Title } from "../components/generic";
import {
  IPerson,
  IPropsFC,
  RoleUser,
  TExperience,
  TGender,
} from "../interfaces/intarfaces";

import {
  FlexBox,
  ContainerGeneric,
  ContainerNotice,
  ContainerValue,
  ContainerRegistration,
  BorderBox,
} from "../components/containers";
import { useInput } from "components/Input";
import { useCalendar } from "components/Calendar";
import { useTextArea } from "components/TextArea";
import { useRange } from "components/Range";
import { useSelect } from "components/Select/Index";
import { Radiobox, useCheckbox, useRadiobox } from "components/CheckRadiobox";
import { getLanguage } from "fetch/fetchCountries";
import { useMultiSelect } from "components/MultiSelect";
import StyledDropzone, { useDropZone } from "components/DropZoneImage";
import {
  createProfileAmplify,
  updateProfileAmplify,
  uploadPhotoAmplify,
} from "utils/utilAmplify";

import { useContextHospi } from "../context/ContextHospi";
import { API_USERS, STUDENT_PROFILEVIEW_ROUTE } from "utils/constants";
import { Comparator } from "utils/logics";
import { SocialPreferences } from "../components/pageProfileComponents";
import { PersonalDetailsEdit } from "./ProfileUser/PersonalDetailsEdit";
import { SearchCriteria } from "./ProfileUser/SearchCriteria";
import { Auth } from "aws-amplify";
import { AboutMe } from "./ProfileUser/AboutMe";

const LeftLabel: React.FC<{ keyItem: string }> = ({ keyItem }) => {
  const { t } = useTranslation("student");

  return (
    <ContainerNotice>
      <Title m="0 0 4px 0" fontSize="16px">
        {t(`studentProfile.${keyItem}.title`)}
      </Title>
      <Label p="0" fontSize="14px">
        {t(`studentProfile.${keyItem}.comment`)}
      </Label>
    </ContainerNotice>
  );
};

export const StudentProfile: React.FC = () => {
  const { t } = useTranslation("student");
  const history = useHistory();

  const { userProfile, changeUser, updateProfile } = useContextHospi();
  const [currentUserID, setCurrentUserID] = React.useState(
    userProfile?.user_id || ""
  );

  React.useEffect(() => {
    const getID = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setCurrentUserID(attributes.sub ?? "");
    };
    getID();
  }, []);

  const checkItemExistsInArray = (item: TExperience): boolean | undefined => {
    return (
      userProfile &&
      userProfile?.past_experience &&
      userProfile?.past_experience.indexOf(item) !== -1
    );
  };

  const titlePholder = (part: string, variable: string): IPropsFC => {
    return {
      title: t(`studentProfile.${part}.form.${variable}.title`),
      placeholder: t(`studentProfile.${part}.form.${variable}.placeholder`),
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
  const dateBirth = {
    ...useCalendar({
      value: userProfile?.birth_date
        ? new Date(userProfile?.birth_date)
        : undefined,
      range: false,
    }),
  };
  const birthCountry = {
    ...useSelect(userProfile?.birth_country || ""),
  };
  const phoneCode = {
    ...useSelect(userProfile?.phone_code || undefined),
  };
  const phone = {
    ...useInput(userProfile?.phone_number || ""),
  };

  const dateInOut = {
    ...useCalendar({
      value: userProfile?.preferred_move_in
        ? new Date(userProfile?.preferred_move_in)
        : undefined,
      endInterval: userProfile?.preferred_move_out
        ? new Date(userProfile?.preferred_move_out)
        : undefined,
      range: true,
    }),
  };

  const budget = {
    ...useInput(userProfile?.max_budget || ""),
  };
  const cityResidence = {
    ...useSelect(userProfile?.city_of_residence?.city || ""),
  };

  const gender = useRadiobox("gender", userProfile?.gender || "");

  const study = {
    ...useInput(userProfile?.study || ""),
    ...titlePholder("aboutMe", "study"),
  };
  const spokenLanguage = {
    ...useMultiSelect(getLanguage(), userProfile?.spoken_languages || []),
    ...titlePholder("aboutMe", "spokenLanguage"),
  };
  const livedWithHost = useCheckbox(checkItemExistsInArray("Lived with host"));
  const livedAbroad = useCheckbox(checkItemExistsInArray("Lived abroad"));
  const livedOwn = useCheckbox(checkItemExistsInArray("Lived on my own"));
  const livedAny = useCheckbox(checkItemExistsInArray("None of the above"));
  const shortDescription = {
    ...useTextArea(userProfile?.description || ""),
    ...titlePholder("aboutMe", "aboutYourself"),
  };

  const privacy = useRange(userProfile?.privacy || 50);
  const newInTown = useRange(userProfile?.autonomy || 50);

  const photo = useDropZone();

  const goToHost = () => changeUser("host");

  const sendFromData = async () => {
    const formPastExperience: TExperience[] = [];

    livedWithHost.checked && formPastExperience.push("Lived with host");
    livedAbroad.checked && formPastExperience.push("Lived abroad");
    livedOwn.checked && formPastExperience.push("Lived on my own");
    livedAny.checked && formPastExperience.push("None of the above");

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
      user_type: "student" as RoleUser,
      birth_date: dateBirth.value?.toISOString().slice(0, 10) ?? "",
      birth_country: birthCountry.value as string,
      preferred_move_in: dateInOut.value?.toISOString().slice(0, 10) ?? "",
      preferred_move_out:
        dateInOut.endInterval?.toISOString().slice(0, 10) ?? "",
      max_budget: (budget.value || 0) as number,
      city_of_residence: {
        state: "Netherlands",
        city: cityResidence.value as string,
      },
      study: String(study.value) as string,
      past_experience: formPastExperience,
      autonomy: newInTown.value,
    };

    const data = {
      ...Comparator(userFormData, userProfile ?? {}, "student"),
      ...{
        user_id: currentUserID,
        privacy: privacy.value,
        user_type: "student" as RoleUser,
        autonomy: newInTown.value,
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
    history.push(STUDENT_PROFILEVIEW_ROUTE);
  };

  const skipProfile = async () => {
    const userFormData: Partial<IPerson> = {
      user_id: currentUserID,
      privacy: privacy.value,
      user_type: "student" as RoleUser,
      autonomy: newInTown.value,
    };

    if (!userProfile) {
      const response = await createProfileAmplify(API_USERS, userFormData);

      if (response.hasOwnProperty("status")) {
        console.log(response);
        return;
      }
      updateProfile(response);
    }
    history.push(STUDENT_PROFILEVIEW_ROUTE);
  };

  return (
    <ContainerRegistration>
      <ContainerGeneric>
        <span></span>
        <Title m="60px 0 40px 0">{t("studentProfile.title")}</Title>
        <LeftLabel keyItem="registerAs" />
        <ContainerValue>
          <FlexBox justify="space-between" gap="24px">
            <BorderBox active={true}>
              <Radiobox
                p="1.5rem"
                checked={true}
                selected="student"
                title={t("studentProfile.registerAs.form.student")}
                value="student"
                h="64px"
              />
            </BorderBox>
            <Label onClick={() => goToHost()} cursor="pointer">
              {t("studentProfile.registerAs.form.other")}
            </Label>
          </FlexBox>
        </ContainerValue>
        <LeftLabel keyItem="personalDetails" />
        <ContainerValue>
          <PersonalDetailsEdit
            firstName={firstName}
            lastName={lastName}
            dateBirth={dateBirth}
            birthCountry={birthCountry}
            phoneCode={phoneCode}
            phone={phone}
          />
        </ContainerValue>
        <LeftLabel keyItem="searchCriteria" />
        <ContainerValue>
          <SearchCriteria
            dateInOut={dateInOut}
            budget={budget}
            cityResidence={cityResidence}
          />
        </ContainerValue>
        <LeftLabel keyItem="aboutMe" />
        <ContainerValue>
          <AboutMe
            gender={gender}
            study={study}
            spokenLanguage={spokenLanguage}
            livedWithHost={livedWithHost}
            livedAbroad={livedAbroad}
            livedOwn={livedOwn}
            livedAny={livedAny}
            shortDescription={shortDescription}
          />
        </ContainerValue>
        <LeftLabel keyItem="socialPreferences" />
        <ContainerValue>
          <SocialPreferences
            roleUser="student"
            privacy={privacy}
            newInTown={newInTown}
            muted={false}
          />
        </ContainerValue>

        <LeftLabel keyItem="profilePicture" />
        <ContainerValue>
          <Label p="0 0 24px 0" fontWeight="600">
            {t(`studentProfile.profilePicture.form.photo.title`)}
          </Label>
          <StyledDropzone {...photo} />
        </ContainerValue>
        <span />
        <FlexBox justify="flex-end" margin="0 0 24px 0">
          <Button normal onClick={() => skipProfile()} m="0 24px 0 0">
            {t(`studentProfile.buttonSkip.title`)}
          </Button>
          <Button main onClick={() => sendFromData()}>
            {t(`studentProfile.buttonSave.title`)}
          </Button>
        </FlexBox>
      </ContainerGeneric>
    </ContainerRegistration>
  );
};
