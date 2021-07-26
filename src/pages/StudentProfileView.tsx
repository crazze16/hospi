import React from "react";
import { useTranslation } from "react-i18next";

import { Label, Title } from "../components/generic";
// import photo from "../assets/img.jpg";
import {
  FlexBox,
  ContainerValueView,
  ContainerView,
  ContainerViewProfile,
  ContainerSearch,
} from "../components/containers";
import {
  PersonalDetails,
  TitleEdit,
  Text2,
  SocialPreferences,
  SpokenLanguages,
} from "../components/pageProfileComponents";
import { useRange } from "components/Range";
import { MONTHS } from "utils/constants";

import { useContextHospi } from "../context/ContextHospi";
import { MenuLeftSide } from "components/MenuLeftSide";
import { LoginDetails } from "./ProfileUser/LoginDetails";
import { ICityOfRecidence } from "interfaces/intarfaces";
// import { getNameCountry } from "fetch/fetchCountries";

export const StudentProfileView: React.FC = () => {
  const { t } = useTranslation("student");
  const { t: t_calendar } = useTranslation();
  const { userProfile } = useContextHospi();

  const privacy = useRange(userProfile?.privacy || 50);
  const newInTown = useRange(userProfile?.autonomy || 50);

  const dateLine = (value: string | undefined): string => {
    if (value === undefined || value === null) return "";
    const dt = new Date(value);
    return `${dt.getDate()} ${t_calendar(
      `calendar.months.${MONTHS[dt.getMonth()]}`
    ).toLocaleLowerCase()} ${dt.getFullYear()}`;
  };

  const cityWhereWillGo = (x: ICityOfRecidence | undefined | null) => {
    if (x) return `${x.city}, ${x?.state}`;
    return "";
  };
  return (
    <ContainerView>
      <MenuLeftSide />
      <span></span>
      <ContainerViewProfile>
        <div style={{ maxWidth: "688px", width: "100%", marginBottom: "24px" }}>
          <Title m="60px 0 0 0">My profile</Title>
        </div>

        <PersonalDetails
          first_name={userProfile?.first_name}
          last_name={userProfile?.last_name}
          birth_date={dateLine(userProfile?.birth_date)}
          birth_country={userProfile?.birth_country}
          phone_code={userProfile?.phone_code}
          phone_number={userProfile?.phone_number}
          photo={userProfile?.thumbnail_url}
        />
        <ContainerValueView>
          <TitleEdit keyItem="searchCriteria" />
          <FlexBox justify="space-between" gap="24px" align="flex-start">
            <ContainerSearch>
              <Text2
                title={t(`studentProfile.searchCriteria.form.moveInDate.title`)}
                value={dateLine(userProfile?.preferred_move_in || undefined)}
                p="0 24px 24px 0"
              />
              <Text2
                title={t(
                  `studentProfile.searchCriteria.form.moveOutDate.title`
                )}
                value={dateLine(userProfile?.preferred_move_out || undefined)}
              />
              <Text2
                title={t(`studentProfile.searchCriteria.form.budget.title`)}
                value={`€ ${userProfile?.max_budget || "-"}`}
              />
              <Text2
                title={t(`studentProfile.searchCriteria.form.city.title`)}
                value={
                  userProfile?.city_of_residence &&
                  `${cityWhereWillGo(userProfile?.city_of_residence)}`
                }
              />
            </ContainerSearch>
          </FlexBox>
        </ContainerValueView>
        <ContainerValueView>
          <TitleEdit keyItem="aboutMe" />
          <FlexBox
            justify="space-between"
            // gap="8px"
            align="flex-start"
            direction="column"
          >
            <Label p="0">
              {userProfile?.gender
                ? userProfile?.gender[0].toUpperCase() +
                  userProfile?.gender?.substring(1)
                : ""}
            </Label>
            <Label p="8px 0 8px 0">{userProfile?.study || "-"}</Label>
            {userProfile && (
              <SpokenLanguages items={userProfile?.spoken_languages || []} />
            )}
            {userProfile?.past_experience?.map((item) => (
              <p key={item} style={{ marginTop: "8px" }}>
                <Label p="0">{item}</Label>
              </p>
            ))}
            <Label p="8px 0 0 0">{userProfile?.description || "-"}</Label>
          </FlexBox>
        </ContainerValueView>
        <ContainerValueView>
          <TitleEdit keyItem="socialPreferences" />
          <SocialPreferences
            roleUser="student"
            privacy={privacy}
            newInTown={newInTown}
          />
        </ContainerValueView>
        <LoginDetails />
      </ContainerViewProfile>
    </ContainerView>
  );
};
