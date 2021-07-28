import styled from 'styled-components'

const textColor = '#032565'
const maxWidthMediaLeftColumn = 850
const maxWidthMediaRightColumn = 640

    // SHARED //


export const GridWrapper = styled.div<{ gap?: string }>`
  display: grid;
  gap: ${(props) => props.gap || "0px"};

  & li {
    list-style-type: none;
  }`;

export const SectionTitle = styled.div`
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
    justify-content: space-between;
  }
  
  @media (max-width: 460px) {
    flex-direction: column;
  }`;


    // MAIN COMPONENT //


export const MainWrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 71px auto 47px;
  color: ${textColor};

  & p {
    height: 21px;
    line-height: 21px;

  }

  @media (max-width: ${maxWidthMediaRightColumn}px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin: 24px auto 47px;
  }
`;

export const MainBody = styled.div`
  display: flex;
  margin: 16px 0;

  @media (max-width: ${maxWidthMediaRightColumn}px) {
    flex-direction: column;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`

        // ROOM NAVIGATION COMPONENT //

export const RoomNavigationSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  & div {
    line-height: 29px;
    font-size: 24px;
    font-weight: 600;
  }

  & :first-child {
    display: flex;
    align-items: center;
    @media (max-width: 450px) {
      flex-direction: row-reverse;
      font-size: 18px;
    }
    & div{
      color: #6F7F9E;
      position: relative;
      display: flex;
      align-items: center; 
    }
    & svg {
      @media (max-width: 450px) {
        transform: rotateY(180deg);
      }
    }
    & :last-child {
      margin: 0 16px;
      @media (max-width: 450px) {
        margin: 0 8px 0 0;
      }
    }
  }


  
     // & div {
     //   position: absolute;
     //   right: 10px;
     //   background: transparent;
     //   width: 8px;
     //   height: 11px;
     //   overflow: hidden;
     //   flex: 1;
     //   &:after {
     //     content: '';
     //     position: absolute;
     //     right: 5px;
     //     width: 12px;
     //     height: 12px;
     //     border-top: 3px solid ${textColor};
     //     border-right: 3px solid ${textColor};
     //     transform: rotate(45deg);
     //   }
     // }
  & :last-child {
    color: ${textColor};
  }
  @media (max-width: 425px) {

  }
`;


    // LEFT COLUMN //


export const LeftColumnAbout = styled.div`
  display: flex;
  flex: 1;
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

        // ROOM DETAILS COMPONENT //

export const RoomDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    height: 100%;
    line-height: 21px
  }
`;

export const RoomDetailsDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
  height: 100%;
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

        // ABOUT THE ROOM COMPONENT //

export const AboutTheRoomSection = styled(RoomDetailsSection)`
  margin: 24px 0;

  & p {
    height: 21px;
    line-height: 21px;
  }
`
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

        // AVAILABILITY AND PRICES COMPONENT //

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
  }`;


    // RIGHT COLUMN //


export const RightColumnAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
  @media (max-width: ${maxWidthMediaRightColumn}px) {
    margin: 24px 0;
  }
`

        // HOST DETAILS COMPONENT //

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
  }`;

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


        // SOCIAL PREFERENCES COMPONENT //

export const SocialPreferensecRange = styled.div`
  margin-top: 24px;
`;


    // SLIDER //


const sliderHeight = 253;

export const SliderWrapper = styled.div<{ isModalOpen: boolean }>`
  margin: 0 auto;
  height: ${props => props.isModalOpen ? '688px' : `${sliderHeight}px`};;
  color: white;
  width: 100%;
  position: relative;
  overflow: hidden;
}

// Fix external margins
& .slick-list {
  margin-left: ${props => props.isModalOpen ? '' : '-2px'};
  height: ${props => props.isModalOpen ? '688px' : '100%'};
}

& .slick-track {
  height: 100%;
}

& .slick-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

& .slick-slide div {
  width: 927px;

  margin-left: ${props => props.isModalOpen ? '' : '2px'};
  height: ${props => props.isModalOpen ? '688px' : ''};
  border-radius: 4px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    height: ${props => props.isModalOpen ? '588px' : ''};
    width: 827px;
  }
  @media (max-width: 768px) {
    height: ${props => props.isModalOpen ? '328px' : ''};
    width: 627px;
  }
}

`;
export const SliderElementSC = styled.div`
  border-radius: 4px;
  color: white;
  max-width: 927px;
  width: 100%;
  height: ${sliderHeight}px;

  & img {
    height: 100%;
    width: 100%;
    //object-fit: cover;
    margin: 0 auto;
  }
  
  @media (max-width: 425px) {
    max-width: 100%;
}`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  width: 48px;
  height: 48px;
  z-index: 20;
  top: calc(50% - 24px);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-top: 3px solid ${textColor};
    border-left: 3px solid ${textColor};
    transform: rotate(-45deg);
    border-radius: 2px;
  }`;

export const ArrowLeft = styled(Arrow)<{ isModalOpen: boolean }>`
  left: 16px;
  background: ${props => props.isModalOpen ? 'transparent' : ''};

  &:before {
    left: 20px;
    border-color: ${props => props.isModalOpen ? '#FFFFFF' : ''};
  }

`;
export const ArrowRight = styled(Arrow)<{ isModalOpen: boolean }>`
  right: 16px;
  background: ${props => props.isModalOpen ? 'transparent' : ''};

  &:before {
    transform: rotate(135deg);
    right: 20px;
    border-color: ${props => props.isModalOpen ? '#FFFFFF' : ''};
  }
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.69);
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ModalWindowTitle = styled.div`
  width: 100%;
  padding: 0 54px 47px;
  display: flex;

  & :first-child {
    color: white;
    flex: 1;
    text-align: center;
  }

  & :last-child {
    position: relative;
    width: 15px;
    height: 15px;
    top: 1px;

    &:hover {
      cursor: pointer;
    }

    &:before {
      position: absolute;
      left: 7px;
      content: ' ';
      height: 15px;
      width: 2px;
      background-color: #ffffff;
      transform: rotate(45deg);
    }

    &:after {
      position: absolute;
      left: 7px;
      content: ' ';
      height: 15px;
      width: 2px;
      background-color: #ffffff;
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 768px) {
    padding: 0 24px 47px;
  }`;


    // MAP //


const markerSize = 30;
const markerTailSize = 9;
const markerGradiendStart = 'rgba(211, 55, 84, 1)'
const markerGradiendEnd = 'rgba(179, 39, 90, 1)'

export const MapWrapper = styled.div`
  height: 423px;
  width: 100%;
  margin-bottom: 24px;
`;

export const MapSelectedPlace = styled.div`
  height: ${markerSize}px;
  width: ${markerSize}px;
  background: linear-gradient(90deg, ${markerGradiendStart} 0%, ${markerGradiendEnd} 90%);
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:before {
      content: '';
      width: ${markerTailSize}px;
      height: ${markerTailSize}px;
      background: linear-gradient(20deg, ${markerGradiendStart} 0%, ${markerGradiendEnd} 70%);
      transform: rotate(45deg);
      position: absolute;
      top: calc(${markerSize}px - (${markerTailSize * 2}px) + 2px);
      z-index: -1;
      border-radius: 2px;
    }
  }`;