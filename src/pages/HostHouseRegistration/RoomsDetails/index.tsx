import React from "react";
import { useTranslation } from "react-i18next";

import { IRadiobox, Radiobox } from "components/CheckRadiobox";
import { IcoInfo, TitleH2, TitleH3 } from "components/generic";
import Select, { ISelect } from "components/Select/Index";
import { IInputHookOut, InputLabel } from "components/Input";
import { TMode } from "interfaces/intarfaces";
import {
  InfoMessage,
  RadioboxPlace,
  RoomDetailsWrapper,
  TypeRoomContainer,
  TypeRoomWrapper,
} from "./styles";
import { getCyties } from "fetch/fetchCountries";

const typeRooms = ["room", "studio", "entireHouse"];

interface IRoomsDetails {
  modeView: TMode;
  typeRoom: Partial<IRadiobox>;
  titleRoom: IInputHookOut;
  country: IInputHookOut;
  state: ISelect;
  postalCode: IInputHookOut;
  houseNumber: IInputHookOut;
  addition: IInputHookOut;
  street: IInputHookOut;
  city: IInputHookOut;
}

export const RoomsDetails: React.FC<IRoomsDetails> = ({
  modeView,
  typeRoom,
  titleRoom,
  country,
  state,
  postalCode,
  houseNumber,
  addition,
  street,
  city,
}) => {
  const { t } = useTranslation("hostrooms");

  const titleID = (keyItem: string) => {
    return {
      title: t(`roomsDetails.${keyItem}.title`),
      placeholder: t(`roomsDetails.${keyItem}.placeholder`),
      id: keyItem,
    };
  };
  const paddingRadiobox = () =>
    modeView === "edit" ? "0.9em 1em 0.9em 1.3em" : "0.2rem 1em 0.2em 0";
  return (
    <RoomDetailsWrapper>
      <TypeRoomWrapper id="typeRoomBox">
        <TitleH2 m="0 0 16px 0">{t("roomsDetails.title")}</TitleH2>
        <TitleH3>{t("roomsDetails.typeRoom.title")}</TitleH3>
        <TypeRoomContainer>
          {typeRooms.map((item) => (
            <RadioboxPlace
              modeView={modeView}
              key={item}
              id={item}
              active={typeRoom.selected === item && modeView === "edit"}
            >
              <Radiobox
                {...typeRoom}
                title={t(`roomsDetails.typeRoom.items.${item}.title`)}
                value={`${item}`}
                p={paddingRadiobox()}
              />
              <InfoMessage
                message={t(`roomsDetails.typeRoom.items.${item}.tooltip`)}
              >
                <IcoInfo size="1.2em" />
              </InfoMessage>
            </RadioboxPlace>
          ))}
        </TypeRoomContainer>
      </TypeRoomWrapper>
      <InputLabel {...titleRoom} {...titleID("titleRoom")} />
      <InputLabel {...country} {...titleID("countryRoom")} />
      <Select {...state} {...titleID("stateRoom")} items={getCyties()} />
      <InputLabel {...postalCode} {...titleID("postalCode")} />
      <InputLabel {...houseNumber} {...titleID("houseNumber")} type="number" />
      <InputLabel {...addition} {...titleID("addition")} />
      <InputLabel {...street} {...titleID("streetRoom")} />
      <InputLabel {...city} {...titleID("cityRoom")} />
    </RoomDetailsWrapper>
  );
};
