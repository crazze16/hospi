import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

import photo_default from "../../assets/images/empty_photo.jpeg";
import { Button, Label, Title } from "components/generic";
import {
  IPerson,
  IPropsFC,
  RoleUser,
  TExperience,
  TGender,
} from "../../interfaces/intarfaces";

import {
  FlexBox,
  ContainerValue,
  ContainerRedirect,
} from "components/containers";
import { useInput } from "components/Input";
import { useCalendar } from "components/Calendar";
import { useTextArea } from "components/TextArea";
import { useRange } from "components/Range";
import { useSelect } from "components/Select/Index";
import { useCheckbox, useRadiobox } from "components/CheckRadiobox";
import { getLanguage } from "fetch/fetchCountries";
import { useMultiSelect } from "components/MultiSelect";
import { useDropZone } from "components/DropZoneImage";
import {
  deleteUserAmplify,
  updateProfileAmplify,
  uploadPhotoAmplify,
} from "utils/utilAmplify";

import { useContextHospi } from "context/ContextHospi";
import {
  API_USERS,
  HOME_ROUTE,
  HOST_PROFILEVIEW_ROUTE,
  STUDENT_PROFILEVIEW_ROUTE,
} from "utils/constants";
import { Comparator } from "utils/logics";
import { SocialPreferences } from "components/pageProfileComponents";
import { ContainerView } from "components/containers";
import { MenuLeftSide } from "components/MenuLeftSide";
import { PersonalDetailsEdit } from "pages/ProfileUser/PersonalDetailsEdit";
import { MainSide } from "./styles";
import { SearchCriteria } from "pages/ProfileUser/SearchCriteria";
import { AboutMe } from "pages/ProfileUser/AboutMe";
import Modal from "components/Modal";

import useSizeWindow from "utils/hooks/useWindowSize";
import { HostVerify } from "./HostVerified";

// Max width Container
const maxWidthContainer = "600px";

export const ProfileUserEdit: React.FC = () => {
  const history = useHistory();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [deleteUserAccount, setDeleteUserAccount] = React.useState(false);

  const { userProfile, updateProfile, userStatus, setUser } = useContextHospi();
  const [currentUserID, setCurrentUserID] = React.useState(
    userProfile?.user_id || ""
  );
  const user: RoleUser = userStatus || "student";
  const { t } = useTranslation(user);
  const device = useSizeWindow();

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
      title: t(`${user}Profile.${part}.form.${variable}.title`),
      placeholder: t(`${user}Profile.${part}.form.${variable}.placeholder`),
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
  const newInTown = useRange(
    (user === "host"
      ? userProfile?.requested_autonomy
      : userProfile?.autonomy) || 50
  );
  // Selected phoro in DropZone
  const photo = useDropZone();
  // Edited Photo
  const [readyPhoto, setReadyPhoto] = useState<File | undefined>(undefined);

  const sendFromData = async () => {
    const formPastExperience: TExperience[] = [];

    livedWithHost.checked && formPastExperience.push("Lived with host");
    livedAbroad.checked && formPastExperience.push("Lived abroad");
    livedOwn.checked && formPastExperience.push("Lived on my own");
    livedAny.checked && formPastExperience.push("None of the above");

    const userFormData: Partial<IPerson> = {
      user_id: currentUserID,
      first_name: firstName.value as string,
      last_name: lastName.value as string,
      phone_code: phoneCode.value as string,
      phone_number: phone.value as string,
      gender: gender.selected as TGender,
      spoken_languages: spokenLanguage.values,
      description: shortDescription.value as string,
      privacy: privacy.value,
    };

    const studentFormData: Partial<IPerson> = {
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
      study: study.value as string,
      past_experience: formPastExperience,
      autonomy: newInTown.value,
      user_type: "student",
    };

    const hostFormData: Partial<IPerson> = {
      requested_autonomy: newInTown.value,
      user_type: "host",
    };
    const data =
      user === "host"
        ? Comparator(
            { ...userFormData, ...hostFormData },
            userProfile || {},
            user
          )
        : Comparator(
            { ...userFormData, ...studentFormData },
            userProfile || {},
            user
          );

    if (Object.keys(data).length > 0) {
      const response = await updateProfileAmplify(
        API_USERS + `${currentUserID}`,
        { ...data, user_type: user }
      );
      if (response.hasOwnProperty("status")) {
        console.log(response);
        return;
      }
      updateProfile(response);
    }

    // If choose new avatar send to Server
    // if (readyPhoto) {
    //   await uploadPhotoAmplify(
    //     API_USERS + `${currentUserID}/upload_avatar`,
    //     readyPhoto
    //   );
    // } else
    if (photo.selectedFile) {
      await uploadPhotoAmplify(
        API_USERS + `${currentUserID}/upload_avatar`,
        readyPhoto ?? photo.selectedFile
      );
    }

    history.push(
      user === "host" ? HOST_PROFILEVIEW_ROUTE : STUDENT_PROFILEVIEW_ROUTE
    );
  };

  const skipProfile = async () => {
    history.push(
      user === "host" ? HOST_PROFILEVIEW_ROUTE : STUDENT_PROFILEVIEW_ROUTE
    );
  };

  // Delete User
  const deleteUser = async () => {
    userProfile && (await deleteUserAmplify(API_USERS + `${currentUserID}`));
    setUser(undefined);
    updateProfile(undefined);
    setDeleteUserAccount(true);
  };
  if (deleteUserAccount)
    return (
      <ContainerView>
        <ContainerRedirect>
          <Title m="0 0 24px 0">{t("deleteAccount.title")}</Title>
          <Label lineHeight="150%" p="0">
            {t("deleteAccount.text")}
          </Label>
        </ContainerRedirect>
        <Button
          main
          fontWeight="400"
          w="100%"
          m="24px 0 0 0"
          onClick={() => {
            setDeleteUserAccount((prev) => !prev);
            history.push(HOME_ROUTE);
          }}
        >
          {t("deleteAccount.button")}
        </Button>
      </ContainerView>
    );

  return (
    <ContainerView>
      <MenuLeftSide />
      <span></span>
      <MainSide>
        <FlexBox
          justify="space-between"
          padding="80px 0 24px 0"
          width="100%"
          style={{ maxWidth: maxWidthContainer }}
        >
          <Title>My profile</Title>
          {userStatus === "host" && <HostVerify />}
        </FlexBox>
        <ContainerValue maxWidth={maxWidthContainer} id="personalDetails">
          <Title m="0 0 24px 0" fontSize="20px">
            {t(`${user}Profile.personalDetails.title`)}
          </Title>
          <PersonalDetailsEdit
            firstName={firstName}
            lastName={lastName}
            dateBirth={dateBirth}
            birthCountry={birthCountry}
            phoneCode={phoneCode}
            phone={phone}
            photo={
              `${userProfile?.thumbnail_url}?${new Date().toString()}` ||
              photo_default
            }
            newPhoto={photo}
            readyPhoto={setReadyPhoto}
          />
        </ContainerValue>
        {userStatus === "student" && (
          <ContainerValue maxWidth={maxWidthContainer} id="searchCriteria">
            <Title m="0 0 24px 0" fontSize="20px">
              {t(`${user}Profile.searchCriteria.title`)}
            </Title>
            <SearchCriteria
              dateInOut={dateInOut}
              budget={budget}
              cityResidence={cityResidence}
            />
          </ContainerValue>
        )}
        <ContainerValue maxWidth={maxWidthContainer} id="aboutMe">
          <Title m="0 0 24px 0" fontSize="20px">
            {t(`${user}Profile.aboutMe.title`)}
          </Title>
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
        <ContainerValue maxWidth={maxWidthContainer} id="socialPreferences">
          <Title m="0 0 24px 0" fontSize="20px">
            {t(`${user}Profile.socialPreferences.title`)}
          </Title>
          <SocialPreferences
            roleUser={userStatus || "student"}
            privacy={privacy}
            newInTown={newInTown}
            muted={false}
          />
        </ContainerValue>
        <div style={{ width: "100%", maxWidth: maxWidthContainer }}>
          <FlexBox justify="space-between" margin="0 0 24px 0" width="100%">
            <Button outline onClick={() => setShowModal(true)}>
              {device === "mobile"
                ? "Delete"
                : t(`${user}Profile.buttonRemove.title`)}
            </Button>
            <FlexBox justify="flex-end" margin="24px 0">
              <Button normal onClick={() => skipProfile()}>
                Cancel
              </Button>
              <Button main onClick={() => sendFromData()} m="0 0 0 24px">
                {t(`${user}Profile.buttonSave.title`)}
              </Button>
            </FlexBox>
          </FlexBox>
        </div>
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
                {t(`${user}Profile.deleteAccount.title`)}
              </Title>
              <Label fontSize="16px">
                {" "}
                {t(`${user}Profile.deleteAccount.text1`)}
              </Label>
              {t(`${user}Profile.deleteAccount.items`)
                .split(",")
                .map((item) => (
                  <Label fontSize="16px" p="0" key={item}>
                    {item}
                  </Label>
                ))}
              <Label fontSize="16px">
                {" "}
                {t(`${user}Profile.deleteAccount.text2`)}
              </Label>
              <FlexBox
                justify="flex-end"
                direction="row"
                align="flex-end"
                width="100%"
                className="buttonGroup"
              >
                <Button normal onClick={() => setShowModal(false)}>
                  {t(`${user}Profile.deleteAccount.buttonKeep`)}
                </Button>
                <Button danger onClick={deleteUser}>
                  {t(`${user}Profile.deleteAccount.buttonDelete`)}
                </Button>
              </FlexBox>
            </FlexBox>
          }
        />
      </MainSide>
    </ContainerView>
  );
};
