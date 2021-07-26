import { useTranslation } from "react-i18next";
import { NavHashLink } from "react-router-hash-link";

import { Label, Title } from "../components/generic";
import { theme } from "styles/theme";
import {
  FlexBox,
  ContainerValueView,
  StyledBlock,
  ContainerTitleEdit,
} from "../components/containers";
import Range, { IRangeHook } from "components/Range";
import { IcoEdit } from "components/generic";
import {
  STUDENT_PROFILE_ROUTE,
  HOST_PROFILE_ROUTE,
  HOST_PROFILEEDIT_ROUTE,
  STUDENT_PROFILEEDIT_ROUTE,
} from "utils/constants";

import { arrayLanguages, getNameCountry } from "fetch/fetchCountries";
import { RoleUser } from "interfaces/intarfaces";
import { useContextHospi } from "../context/ContextHospi";

import photo_default from "../assets/images/empty_photo.jpeg";
import { useState, useEffect } from "react";

export const TitleEdit: React.FC<{ keyItem: string }> = ({ keyItem }) => {
  const { userStatus, userProfile } = useContextHospi();
  const { t } = useTranslation(userStatus || "student");

  const linkEdit = () => {
    const link = userProfile?.is_profile_complete
      ? userStatus === "host"
        ? HOST_PROFILEEDIT_ROUTE
        : STUDENT_PROFILEEDIT_ROUTE
      : userStatus === "host"
      ? HOST_PROFILE_ROUTE
      : STUDENT_PROFILE_ROUTE;
    return link;
  };

  return (
    <ContainerTitleEdit>
      <Title m="0 0 4px 0" fontSize="20px">
        {t(
          `${
            userStatus === "host" ? "hostProfile" : "studentProfile"
          }.${keyItem}.title`
        )}
      </Title>
      <NavHashLink to={`${linkEdit()}#${keyItem}`}>
        <IcoEdit size="1.1em" />
        <Label cursor="pointer" p="0 0 0 4px">
          Edit
        </Label>
      </NavHashLink>
    </ContainerTitleEdit>
  );
};

const StyleImage = { width: 120, height: 120, borderRadius: "50%" };

export const PersonalDetails: React.FC<{
  first_name: string | undefined;
  last_name: string | undefined;
  birth_date?: string | undefined;
  birth_country?: string | undefined;
  phone_code: string | undefined;
  phone_number: string | undefined;
  photo: string | undefined;
}> = ({
  first_name,
  last_name,
  birth_date,
  birth_country,
  phone_code,
  phone_number,
  photo,
}) => {
  const [showDefault, setShowDefault] = useState(false);
  const [urlImage, setUrlImage] = useState(photo + `?${new Date().toString()}`);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setUrlImage(photo + `?${new Date().toString()}`);
    }, 1500);
    
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <ContainerValueView>
      <TitleEdit keyItem="personalDetails" />
      <FlexBox
        justify="space-between"
        // gap="24px"
        align="flex-start"
        padding="8px 0 0 0"
      >
        <FlexBox direction="column" align="flex-start">
          <Label p="0">{`${first_name ?? ""} ${last_name ?? ""}`}</Label>
          {birth_date && <Label p="4px 0 0 0">{`${birth_date}`}</Label>}
          {birth_country && (
            <Label p="4px 0 0 0">{`${getNameCountry(birth_country)}`}</Label>
          )}
          <Label p="4px 0 0 0">{`${phone_code ?? ""} ${
            phone_number ?? ""
          }`}</Label>
        </FlexBox>
        <picture>
          {showDefault ? (
            <img src={photo_default} alt="" style={StyleImage} />
          ) : (
            <img
              src={urlImage}
              alt=""
              onError={() => setShowDefault(true)}
              onLoad={() => setShowDefault(false)}
              style={StyleImage}
            />
          )}
        </picture>
      </FlexBox>
    </ContainerValueView>
  );
};

export const Text2: React.FC<{
  title: string;
  value: string | undefined;
  p?: string;
}> = ({ title, value, p }) => {
  return (
    <StyledBlock p={p}>
      <p>
        <Label p="0" fontWeight="600">
          {title}
        </Label>
      </p>
      <p>
        <Label p="0">{value}</Label>
      </p>
    </StyledBlock>
  );
};

export const SpokenLanguages: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <FlexBox direction="row" align="flex-start" justify="flex-start">
      {arrayLanguages(items).map((item) => (
        <Label
          bgColor={theme.colors.secondary}
          key={item}
          style={{ border: `1px solid ${theme.colors.border}` }}
          p="4px"
          m="0 4px 0 0"
        >
          {item}
        </Label>
      ))}
    </FlexBox>
  );
};

export interface ISocialPreferences {
  roleUser: RoleUser;
  privacy: IRangeHook;
  newInTown: IRangeHook;
  muted?: boolean;
}

export const SocialPreferences: React.FC<ISocialPreferences> = ({
  roleUser,
  privacy,
  newInTown,
  muted = true,
}) => {
  const { t } = useTranslation(roleUser);
  return (
    <>
      <Range
        {...privacy}
        disabled={muted}
        title={t(`${roleUser}Profile.socialPreferences.form.privacy.title`)}
        markers={t(
          `${roleUser}Profile.socialPreferences.form.privacy.items`
        ).split(",")}
        p="0 0 24px 0"
        min={1}
        max={100}
      />
      <Range
        {...newInTown}
        disabled={muted}
        title={t(`${roleUser}Profile.socialPreferences.form.newInTown.title`)}
        markers={t(
          `${roleUser}Profile.socialPreferences.form.newInTown.items`
        ).split(",")}
        min={1}
        max={100}
      />
    </>
  );
};
