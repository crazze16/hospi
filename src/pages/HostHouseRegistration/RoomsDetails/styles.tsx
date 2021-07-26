import { TMode } from "interfaces/intarfaces";
import styled, { css } from "styled-components/macro";

export const RoomDetailsWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-areas:
    "typeRoomBox typeRoomBox typeRoomBox typeRoomBox typeRoomBox typeRoomBox"
    "titleRoom titleRoom titleRoom titleRoom titleRoom titleRoom"
    "countryRoom countryRoom countryRoom stateRoom stateRoom stateRoom"
    "postalCode postalCode houseNumber houseNumber addition addition"
    "streetRoom streetRoom streetRoom cityRoom cityRoom cityRoom";
  grid-template-columns: repeat(6, 1fr);
  @media ${(props) => props.theme.media.tablet} {
    grid-template-areas:
      "typeRoomBox typeRoomBox typeRoomBox typeRoomBox typeRoomBox typeRoomBox"
      "titleRoom titleRoom titleRoom titleRoom titleRoom titleRoom"
      "countryRoom countryRoom countryRoom countryRoom countryRoom countryRoom"
      "stateRoom stateRoom stateRoom stateRoom stateRoom stateRoom"
      "postalCode postalCode postalCode postalCode postalCode postalCode"
      "houseNumber houseNumber houseNumber houseNumber addition addition"
      "streetRoom streetRoom streetRoom cityRoom cityRoom cityRoom";
  }
  @media ${(props) => props.theme.media.phone} {
    grid-template-areas:
      "typeRoomBox typeRoomBox typeRoomBox typeRoomBox typeRoomBox typeRoomBox"
      "titleRoom titleRoom titleRoom titleRoom titleRoom titleRoom"
      "countryRoom countryRoom countryRoom countryRoom countryRoom countryRoom"
      "stateRoom stateRoom stateRoom stateRoom stateRoom stateRoom"
      "postalCode postalCode postalCode postalCode postalCode postalCode"
      "houseNumber houseNumber houseNumber houseNumber  houseNumber houseNumber"
      "addition addition addition addition addition addition"
      "streetRoom streetRoom streetRoom cityRoom cityRoom cityRoom";
  }

  #typeRoomBox {
    grid-area: typeRoomBox;
  }

  #titleRoom {
    grid-area: titleRoom;
  }

  #countryRoom {
    grid-area: countryRoom;
  }

  #stateRoom {
    grid-area: stateRoom;
  }

  #postalCode {
    grid-area: postalCode;
  }

  #houseNumber {
    grid-area: houseNumber;
  }

  #addition {
    grid-area: addition;
  }

  #streetRoom {
    grid-area: streetRoom;
  }

  #cityRoom {
    grid-area: cityRoom;
  }
`;

export const InfoMessage = styled.span<{ message?: string }>`
  position: relative;
  &:before {
    content: '${(props) => props.message || ""}';
    display: none;
    position: absolute;
    bottom: calc(100% + 4px);
    width: 260px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    color: ${(props) => props.theme.colors.place};
    background-color: ${(props) => props.theme.colors.thirdly};
    padding: 4px 0;
  }
  &:hover:before {
    display: block;
  } 
`;

export const RadioboxPlace = styled.div<{ active?: boolean; modeView?: TMode }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${(props) =>
    props.modeView === "edit" &&
    css`
      border-radius: ${(props) => props.theme.sizes.borderRadius};
      border: 1px solid ${(props) => props.theme.colors.border};
    `}

  flex-grow: 1;
  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.colors.activeRadioBox};
      border: 1px solid ${(props) => props.theme.colors.primary};
    `}
`;

export const TypeRoomContainer = styled.div`
  display: grid;
  grid-template-areas: "room studio entireHouse";
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 530px) {
    grid-template-areas:
      "room"
      "studio"
      "entireHouse";
    grid-template-columns: 1fr;
  }
`;

export const TypeRoomWrapper = styled.div`
  display: block;
`;
