import styled from 'styled-components'

const textColor = '#032565'

const maxWidthMediaLeftColumn = 850
const maxWidthMediaRightColumn = 640

export const MainWrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: ${textColor};

  & h2 {
    font-size: 20px;
    line-height: 26px;
  }

  & h3 {
    font-size: 16px;
    line-height: 20.8px;
    height: 21px;
  }

  & p {
    height: 21px;
    line-height: 21px
  }

  @media (max-width: ${maxWidthMediaRightColumn}px) {
    flex-direction: column;
  }
`;

export const LeftColumnAbout = styled.div`
  display: flex;
  flex: 1;
`;

export const RightColumnAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
  @media (max-width: ${maxWidthMediaRightColumn}px) {
    margin: 24px 0;
  }
`

export const HostDetailsWrapper = styled.div`
  min-width: 288px;
  display: flex;
  flex-direction: column;
  border: 1px solid #DCD6CE;
  border-radius: 4px;
  background: #fff;
  padding: 24px;

  &:nth-child(2) {
    margin: 24px 0;
  }
`;

export const SocialPreferensecRange = styled.div`
  margin-top: 24px;
`;

export const MainBody = styled.div`
  display: flex;
  @media (max-width: ${maxWidthMediaRightColumn}px) {
    flex-direction: column;
  }
`;

export const HostDetailsInfoSection = styled.div`
  display: flex;
  justify-content: space-between;

  & img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }
`;

export const HostDetailsAbout = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    margin-top: 8px;
  }
`;

export const DetailsSection = styled.div`
  min-width: 288px;
  display: flex;
  flex-direction: column;
  border: 1px solid #DCD6CE;
  border-radius: 4px;
  background: #fff;
  padding: 24px 46px 24px 24px;
`;

export const RoomDetailsSection = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    height: 100%;
    line-height: 21px
  }

`;

export const AboutTheRoomSection = styled(RoomDetailsSection)`
  margin: 24px 0;

  & p {
    height: 21px;
    line-height: 21px;
  }
`

export const AvailabilityAndPricesSection = styled(RoomDetailsSection)`
  margin-top: -16px;

  & p {
    height: 21px;
    line-height: 21px
  }
`;

export const AboutTheRoomDetails = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    @media (max-width: ${maxWidthMediaLeftColumn}px) {
      flex-direction: column;
    }
  }

  & div {
    @media (max-width: ${maxWidthMediaRightColumn}px) {
      flex-direction: row;
    }
  }

  & div {
    @media (max-width: 460px) {
      flex-direction: column;
    }
  }

`;

export const TypeOfRoom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const Location = styled.div`
  display: flex;

  & div {
    flex: 1;
  }

  @media (max-width: ${maxWidthMediaLeftColumn}px) {
    flex-direction: column;
  }
  @media (max-width: ${maxWidthMediaRightColumn}px) {
    flex-direction: row;
  }
  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const RoomDetailsDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
  height: 100%;
`;

export const RoomDetailsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
  @media (max-width: ${maxWidthMediaLeftColumn}px) {
    flex-direction: column;
    justify-content: flex-start;
    & h2 {
      margin-bottom: 4px;
    }
  }
  @media (max-width: ${maxWidthMediaRightColumn}px) {
    flex-direction: row;
  }
  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const AboutTheRoomColumn = styled.div`
  flex: 1;

  & div {
    margin-bottom: 16px;
  }
`;

export const VerifiedByHospi = styled.div`
  width: 202px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(227, 237, 255, 0.75);
  border-radius: 4px;
  font-size: 16px;
  line-height: 21px;
`;


export const AboutTheRoomRow = styled.div`
  display: flex;
  width: 100%;

  & div {
    flex: 1;
    margin-bottom: 16px;
  }

  @media (max-width: ${maxWidthMediaLeftColumn}px) {
    flex-direction: column;
  }

  @media (max-width: ${maxWidthMediaRightColumn}px) {
    flex-direction: row;
  }

  @media (max-width: 460px) {
    flex-direction: column;
  }


`;

const sliderHeight = 253;

export const SliderWrapper = styled.div`
  margin: 16px auto;
  height: ${sliderHeight}px;
  color: white;
  width: 100%;
  position: relative;

`;
export const SliderElementSC = styled.div`
  border-radius: 4px;
  color: white;
  max-width: 340px; //change to 100% if modal
  width: 100%;
  height: ${sliderHeight}px;
  padding: 0 2px;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    };
  };
  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

export const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    width: 48px;
    height: 48px;
    z-index: 10;
    top: calc(50% - 24px);
    border-radius: 4px;
    &:before {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border-top: 3px solid ${textColor};
        border-left: 3px solid ${textColor};
        transform: rotate(-45deg);
        border-radius: 2px;
    };
`;
export const ArrowLeft = styled(Arrow)`
    left: 16px;
    &:before {
                left: 20px;
    }

`;
export const ArrowRight = styled(Arrow)`
    right: 16px;
    &:before {
    transform: rotate(135deg);
    right: 20px;
    }
`;

export const ModalWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
    z-index: 100;
`;