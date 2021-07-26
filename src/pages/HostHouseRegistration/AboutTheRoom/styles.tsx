import styled from "styled-components";

export const AboutTheRoomWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-areas:
    "titleAboutRoom titleAboutRoom"
    "bedroomSize houseSize"
    "sharedUse privateUse"
    "descriptionAboutRoom descriptionAboutRoom"
    "picturesRoom picturesRoom";
  grid-template-columns: repeat(2, 1fr);
  @media ${(props) => props.theme.media.tablet} {
    grid-template-areas:
      "titleAboutRoom titleAboutRoom"
      "bedroomSize houseSize"
      "sharedUse privateUse"
      "descriptionAboutRoom descriptionAboutRoom"
      "picturesRoom picturesRoom";
  }
  @media ${(props) => props.theme.media.phone} {
    grid-template-areas:
      "titleAboutRoom"
      "bedroomSize"
      "houseSize"
      "sharedUse"
      "privateUse"
      "descriptionAboutRoom"
      "picturesRoom";
    grid-template-columns: 1fr;
  }

  #bedroomSize {
    grid-area: bedroomSize;
  }

  #houseSize {
    grid-area: houseSize;
  }

  #sharedUse {
    grid-area: sharedUse;
  }

  #privateUse {
    grid-area: privateUse;
  }

  #descriptionAboutRoom {
    grid-area: descriptionAboutRoom;
  }

  #picturesRoom {
    grid-area: picturesRoom;
  }
`;
