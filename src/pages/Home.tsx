import React from "react";
import { useTranslation } from "react-i18next";

import { BtnExtended, Button, Label, Section } from "../components/generic";
import {
  BtnWrapper,
  ContainerHome,
  FlexBox,
  TopContainer,
} from "../components/containers";

export const Home: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <ContainerHome>
      <Section>
        <TopContainer className="top_container">
          <Label
            className="home_label"
            fontColor={"#fff"}
            bgColor={"transparent"}
            p={"5rem"}
            fontSize="2rem"
          >
            {t("slogan")}
          </Label>
          <BtnWrapper>
            <FlexBox justify="space-around" margin="140px auto 0" wrap="wrap">
              <Button main h="3rem">
                Find a room
              </Button>
              <BtnExtended main h="3rem" className="secondary_btn">
                Become a host
              </BtnExtended>
            </FlexBox>
          </BtnWrapper>
        </TopContainer>
      </Section>
    </ContainerHome>
  );
};
