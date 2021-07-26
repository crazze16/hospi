import React from "react";

import { Label, Title } from "../components/generic";
import {
  FlexBox,
  ContainerValueView,
  ContainerViewProfile,
  ContainerView,
} from "../components/containers";
import { useRange } from "components/Range";

import { useContextHospi } from "../context/ContextHospi";
import {
  PersonalDetails,
  SocialPreferences,
  SpokenLanguages,
  TitleEdit,
} from "../components/pageProfileComponents";
import { MenuLeftSide } from "components/MenuLeftSide";
import { LoginDetails } from "./ProfileUser/LoginDetails";
import { HostVerify } from "./ProfileUserEdit/HostVerified";

export const HostProfileView: React.FC = () => {
  const { userProfile } = useContextHospi();

  const privacy = useRange(userProfile?.privacy || 50);
  const newInTown = useRange(userProfile?.requested_autonomy || 50);

  return (
    <ContainerView>
      <MenuLeftSide />
      <span></span>
      <ContainerViewProfile>
        <FlexBox justify="space-between" padding="80px 0 24px 0" width="100%">
          <Title>My profile</Title>
          <HostVerify />
        </FlexBox>
        <PersonalDetails
          first_name={userProfile?.first_name}
          last_name={userProfile?.last_name}
          // birth_date={userProfile?.birth_date}
          // birth_country={userProfile?.birth_country}
          phone_code={userProfile?.phone_code}
          phone_number={userProfile?.phone_number}
          photo={userProfile?.thumbnail_url}
        />
        <ContainerValueView>
          <TitleEdit keyItem="aboutMe" />
          <FlexBox
            justify="space-between"
            // gap="24px"
            align="flex-start"
            direction="column"
          >
            <Label p="0 0 8px 0">{userProfile?.gender}</Label>
            {userProfile && (
              <SpokenLanguages items={userProfile?.spoken_languages || []} />
            )}
            <Label p="8px 0 0 0">{userProfile?.description || "-"}</Label>
          </FlexBox>
        </ContainerValueView>
        <ContainerValueView>
          <TitleEdit keyItem="socialPreferences" />
          <SocialPreferences
            roleUser="host"
            privacy={privacy}
            newInTown={newInTown}
          />
        </ContainerValueView>

        <LoginDetails />
      </ContainerViewProfile>
    </ContainerView>
  );
};
