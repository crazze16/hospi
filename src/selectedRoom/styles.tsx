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
  display: flex
`

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
// export const AboutTheRoomRightColumn = styled.div`
//   flex: 1;
// `;

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

export const  SliderWrapper = styled.div`
  margin: 16px auto;
  height: 253px;
  color: white;
  width: 100%;
  background: red;
  position: relative;

`;
export const SliderElementSC = styled.div`
   background: black;
  border-radius: 20px;
  text-transform: capitalize;
  font-weight: 500;
  color: white;
  height: 253px;
  width: 100%;
`;
