import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Button, Label, Title, TitleH1 } from "components/generic";

import { ContainerValue } from "components/containers";
// import { useInput } from "components/Input";
// import { useCalendar } from "components/Calendar";
// import { useTextArea } from "components/TextArea";
// import { useRange } from "components/Range";
// import { useSelect } from "components/Select/Index";
// import { useCheckbox, useRadiobox } from "components/CheckRadiobox";
// import { getLanguage } from "fetch/fetchCountries";
// import { useMultiSelect } from "components/MultiSelect";
// import { useDropZone } from "components/DropZoneImage";
// import {
//   deleteUserAmplify,
//   updateProfileAmplify,
//   uploadPhotoAmplify,
// } from "utils/utilAmplify";

import { ContainerView } from "components/containers";
import { MenuLeftSide } from "components/MenuLeftSide";
import { useRadiobox } from "components/CheckRadiobox";
import { TMode } from "interfaces/intarfaces";
import { RoomsDetails } from "./RoomsDetails";
import { MainWrapper } from "./styles";
import { useInput } from "components/Input";
import { useSelect } from "components/Select/Index";
import { AboutTheRoom } from "./AboutTheRoom";
import { useTextArea } from "components/TextArea";
import { useDropZone } from "components/DropZoneImage";

// import useSizeWindow from "utils/hooks/useWindowSize";

// Max width Container
const maxWidthContainer = "688px";

export const HostHouseRegistration: React.FC = () => {
  // const history = useHistory();
  const mode: TMode = "edit";
  const typeRoom = useRadiobox("typeRooms", ""); //  userProfile?.gender || ""
  const titleRoom = useInput("");
  const country = useInput("");
  const state = useSelect("");
  const postalCode = useInput("");
  const houseNumber = useInput("");
  const addition = useInput("");
  const street = useInput("");
  const city = useInput("");

  const bedroomSize = useInput("");
  const houseSize = useInput("");
  const [sharedUse, setSharedUse] = useState<string[]>([]);
  const [privateUse, setPrivateUse] = useState<string[]>([]);
  const descriptionAboutRoom = useTextArea("");
  const picturesRoom = useDropZone();

  return (
    <ContainerView>
      <MenuLeftSide />
      <span></span>
      <MainWrapper>
        <TitleH1 m="70px 0 0 0" maxWidth={maxWidthContainer}>
          Create A Room
        </TitleH1>
        <ContainerValue maxWidth={maxWidthContainer}>
          <RoomsDetails
            modeView={mode}
            typeRoom={typeRoom}
            titleRoom={titleRoom}
            country={country}
            state={state}
            postalCode={postalCode}
            houseNumber={houseNumber}
            addition={addition}
            street={street}
            city={city}
          />
          <AboutTheRoom
            modeView={mode}
            bedroomSize={bedroomSize}
            houseSize={houseSize}
            forSharedUse={setSharedUse}
            forPrivateUse={setPrivateUse}
            descriptionAboutRoom={descriptionAboutRoom}
            picturesRoom={picturesRoom}
          />
        </ContainerValue>
        <TitleH1 maxWidth={maxWidthContainer}>Availability & prices</TitleH1>
        <ContainerValue maxWidth={maxWidthContainer}></ContainerValue>
      </MainWrapper>
    </ContainerView>
  );
};
