import {
    AboutTheRoomDetails,
    AboutTheRoomRow,
    AboutTheRoomSection,
    ArrowLeft,
    ArrowRight,
    AvailabilityAndPricesSection, ButtonSection,
    DetailsSection,
    GridWrapper,
    HostDetailsAbout,
    HostDetailsInfoSection,
    HostDetailsWrapper,
    LeftColumnAbout,
    Location,
    MainBody,
    MainWrapper,
    MapSelectedPlace,
    MapWrapper,
    ModalWindow,
    ModalWindowTitle,
    RightColumnAbout,
    RoomDetailsDescription,
    RoomDetailsSection, RoomNavigationSection,
    SectionTitle,
    SliderElementSC,
    SliderWrapper,
    SocialPreferensecRange,
    TypeOfRoom
} from "./styles";
import {InfoMessage} from "../pages/HostHouseRegistration/RoomsDetails/styles";
import {
    Button,
    IcoClock,
    IcoDone,
    IcoInfo,
    IcoWarning,
    Label,
    TitleH2,
    TitleH3,
    TitleH1,
    IcoArrowRight
} from "../components/generic";
import React, {useEffect, useState} from "react";
import {SocialPreferences, SpokenLanguages} from "../components/pageProfileComponents";
import {useRange} from "../components/Range";
import Slider from "react-slick";
import {NotVerification} from "../pages/ProfileUserEdit/HostVerified/styles";
import {theme} from "../styles/theme";
import {TVerify} from "../interfaces/intarfaces";
import GoogleMapReact from 'google-map-react';

    // mock response types //

interface IRoomDetailsResponse {
    roomDescription: string
    roomType: string
    street: string
    city: string
    bedroomSize: number
    houseSize: number
    sharedUse: Array<string>
    privateUse: Array<string>
    availableFrom: string
    availableUntil: string
    roomPrice: number
    deposit: number
    additionalCosts: number
}

interface IHostDetailsResponse {
    name: string
    activeYears: number
    hostedTimes: number
}

    // left column components types //

type TRoomDetails = Pick<IRoomDetailsResponse, 'roomDescription' | 'roomType' | 'street' | 'city'>
type TRoomAbout = Pick<IRoomDetailsResponse, 'bedroomSize' | 'houseSize' | 'sharedUse' | 'privateUse'>
type TRoomAvailability = Pick<IRoomDetailsResponse, 'availableFrom' | 'availableUntil' | 'roomPrice' | 'deposit' | 'additionalCosts'>

    // slider types //

type TSliderArrow = {
    onClick?: () => void
    isModalOpen: boolean
}

type TSlider = {
    isModalOpen: boolean
    setIsModalOpen: (isOpen: boolean) => void
    imgData: Array<string>
    setCurrentSlide: (slide: number) => void
    currentSlide?: number
}

    // map types //

interface IGoogleMap {
    centerCoordinates: TCoordinates
    zoom: number
    placeCoordinates: TCoordinates
}

type TCoordinates = {
   readonly lat: number
   readonly lng: number
}

type TPickedPlace = {
    readonly lat: number
    readonly lng: number
    readonly text?: string
}

    // mock data //

const mockImgData = ['1', '2', '3', '4', '5', '6']

const mockDetails: IRoomDetailsResponse = {
    roomDescription: 'This room is located in a vibrant part of the city. ' +
        'Public transport like bus and train are closely available and highly accessible. The street is full of bars, restaurants and coffeeshops (if you might be into that).',
    roomType: 'Room',
    street: 'Haarlemmerdijk',
    city: 'Amsterdam',
    bedroomSize: 16,
    houseSize: 120,
    sharedUse: ['Shared toilet', 'Shared bathroom', 'Shared kitchen', 'Shared livingroom'],
    privateUse: ['TV', 'Private toilet'],
    availableFrom: '1 may 2021',
    availableUntil: '30 september 2021',
    roomPrice: 500,
    deposit: 500,
    additionalCosts: 24.50
}

const mockHostDetails: IHostDetailsResponse = {
    name: 'Cor ten Broek',
    activeYears: 1.5,
    hostedTimes: 3
}

    // SHARED COMPONENTS //

export const AboutMeView: React.FC<{
    genderUser: string | undefined;
    studyStudent?: string;
    spokenLanguage: string[] | undefined;
    expirenceStudent?: string[];
    descriptionUser: string | undefined;
}> = ({
          genderUser,
          studyStudent,
          spokenLanguage,
          expirenceStudent,
          descriptionUser,
      }) => {
    return (
        <GridWrapper gap="8px">
            <Label p="0">
                {genderUser
                    ? genderUser[0].toUpperCase() + genderUser?.substring(1)
                    : ""}
            </Label>
            {studyStudent && <Label p="0">{studyStudent || ""}</Label>}
            {spokenLanguage && <SpokenLanguages items={spokenLanguage || ""}/>}
            {expirenceStudent && (
                <ul>
                    {expirenceStudent.map((item) => (
                        <li key={item} style={{marginTop: "4px"}}>
                            <Label p="0">{item}</Label>
                        </li>
                    ))}
                </ul>
            )}
            <Label p="0">{descriptionUser || ""}</Label>
        </GridWrapper>
    );
};

type THostVerification = {
    verification: TVerify
}

const HostVerify: React.FC<THostVerification> = (props) => {

    const {verification} = props;

    return (
        <NotVerification state={verification || "unverified"}>
            <Label fontColor="white" bgColor={theme.colors.thirdly}>
                {verification === "verified"
                    ? "This badge will now be visible to students when they view a room of yours"
                    : verification === "verifying"
                        ? "Hospi Housing will get in contact with you soon , this might take a few days"
                        : "Not verified by Hospi Housing"}
            </Label>
            {(verification === "unverified" ||
                verification === "failed") && (
                <IcoWarning size="1.4em"/>
            )}
            {verification === "verifying" && (
                <IcoClock size="1.4em" color={theme.colors.thirdly}/>
            )}
            {verification === "verified" && (
                <IcoDone size="1.4em" color={theme.colors.text}/>
            )}
            {verification === "verified"
                ? "Verified by Hospi Housing"
                : verification === "verifying"
                    ? "Processing Hospi Housing verification"
                    : "Not verified by Hospi Housing"}
        </NotVerification>
    );
};

    // MAIN COMPONENT //

export const SelectedRoom = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const [imgData, setImgData] = useState<Array<string>>([])
    const [roomDetailsData, setRoomDetailsData] = useState<IRoomDetailsResponse>({} as IRoomDetailsResponse)
    const [hostDetailsData, setHostDetailsData] = useState<IHostDetailsResponse>({} as IHostDetailsResponse)
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const handleSave = () => {}

    useEffect(() => {
        setImgData(mockImgData)
        setRoomDetailsData(mockDetails)
        setHostDetailsData(mockHostDetails)
    }, [])

    return (
        <>
            <MainWrapper>
                <RoomNavigation/>
                <SimpleSlider isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} imgData={imgData}
                              currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
                <MainBody>
                    <LeftColumnAbout>
                        <DetailsSection>
                            <RoomDetails roomDescription={roomDetailsData.roomDescription}
                                         roomType={roomDetailsData.roomType} city={roomDetailsData.city}
                                         street={roomDetailsData.street}/>
                            <AboutTheRoom bedroomSize={roomDetailsData.bedroomSize}
                                          houseSize={roomDetailsData.houseSize} privateUse={roomDetailsData.privateUse}
                                          sharedUse={roomDetailsData.sharedUse}/>
                            <AvailabilityAndPrices availableFrom={roomDetailsData.availableFrom}
                                                   availableUntil={roomDetailsData.availableUntil}
                                                   roomPrice={roomDetailsData.roomPrice}
                                                   additionalCosts={roomDetailsData.additionalCosts}
                                                   deposit={roomDetailsData.deposit}/>
                        </DetailsSection>
                    </LeftColumnAbout>
                    <RightColumnAbout>
                        <HostDetails activeYears={hostDetailsData.activeYears} hostedTimes={hostDetailsData.hostedTimes}
                                     name={hostDetailsData.name}/>
                        <AboutTheHost/>
                        <SocialPreferencesSection/>
                    </RightColumnAbout>
                </MainBody>
                <GoogleMap centerCoordinates={{lat: 59.955413, lng: 30.337844}} zoom={15}
                           placeCoordinates={{lat: 59.955413, lng: 30.337844}}/>
                <ButtonSection>
                    <Button main={true} w={'69px'} h={'37px'} onClick={handleSave}>Close</Button>
                </ButtonSection>
            </MainWrapper>
            {isModalOpen && (
                <ModalWindow>
                    <ModalWindowTitle>
                        <div>{currentSlide + 1} / {imgData.length}</div>
                        <div onClick={() => setIsModalOpen(false)}/>
                    </ModalWindowTitle>
                    <SimpleSlider isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} imgData={imgData}
                                  currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
                </ModalWindow>
            )}
        </>

    )
}


    // USED COMPONENTS IN MAIN COMPONENT //


        // NAVIGATION //

const RoomNavigation = () => {

    return (
        <RoomNavigationSection>
            <div>
                <div>My Rooms</div>
                <IcoArrowRight size=".8em" />
            </div>
            <div>
                Cozy room - Haarlemmerdijk, Amsterdam
            </div>
        </RoomNavigationSection>
    )
}

        // LEFT COLUMN //

const RoomDetails: React.FC<TRoomDetails> = (props) => {

    const {roomDescription, city, roomType, street} = props

    return (
        <RoomDetailsSection>
            <SectionTitle>
                <TitleH2>Room details</TitleH2>
                <HostVerify verification={"verified"}/>
            </SectionTitle>
            <RoomDetailsDescription>
                {roomDescription}
            </RoomDetailsDescription>
            <TypeOfRoom>
                <TitleH3>Type of room</TitleH3>
                <p>{roomType} <InfoMessage
                    message={'test'}
                >
                    <IcoInfo size="1.2em"/>
                </InfoMessage></p>
            </TypeOfRoom>
            <Location>
                <div>
                    <TitleH3>Street</TitleH3>
                    <p>{street}</p>
                </div>
                <div>
                    <TitleH3>City</TitleH3>
                    <p>{city}</p>
                </div>
            </Location>
        </RoomDetailsSection>
    )
}

const AboutTheRoom: React.FC<TRoomAbout> = (props) => {

    const {bedroomSize, houseSize, privateUse, sharedUse} = props;

    return (
        <AboutTheRoomSection>
            <SectionTitle>
                <TitleH2>About the room</TitleH2>
            </SectionTitle>
            <AboutTheRoomRow>
                <div>
                    <TitleH3>Bedroom size (m2)</TitleH3>
                    <p>{bedroomSize}</p>
                </div>
                <div>
                    <TitleH3>Whole house size (m2)</TitleH3>
                    <p>{houseSize}</p>
                </div>
            </AboutTheRoomRow>
            <AboutTheRoomRow>
                <div>
                    <TitleH3>For shared use</TitleH3>
                    {sharedUse?.map((item: string, index: number) => <p key={index}>{item}</p>)}
                </div>
                <div>
                    <TitleH3>For private use</TitleH3>
                    {privateUse?.map((item: string, index: number) => <p key={index}>{item}</p>)}
                </div>
            </AboutTheRoomRow>
        </AboutTheRoomSection>
    )
}

export const AvailabilityAndPrices: React.FC<TRoomAvailability> = (props) => {

    const {additionalCosts, availableFrom, availableUntil, deposit, roomPrice} = props;

    return (
        <AvailabilityAndPricesSection>
            <SectionTitle>
                <TitleH2>Availability & prices</TitleH2>
            </SectionTitle>
            <AboutTheRoomDetails>
                <AboutTheRoomRow>
                    <div>
                        <TitleH3>Room available from</TitleH3>
                        <p>{availableFrom}</p>
                    </div>
                    <div>
                        <TitleH3>Room available until</TitleH3>
                        <p>{availableUntil}</p>
                    </div>
                </AboutTheRoomRow>
                <AboutTheRoomRow>
                    <div>
                        <TitleH3>Room price</TitleH3>
                        <p>€{roomPrice}</p>
                    </div>
                    <div>
                        <TitleH3>Deposit</TitleH3>
                        <p>€{deposit}</p>
                    </div>
                </AboutTheRoomRow>
                <AboutTheRoomRow>
                    <div>
                        <TitleH3>Additional costs <InfoMessage
                            message={'test'}
                        >
                            <IcoInfo size="1.2em"/>
                        </InfoMessage></TitleH3>
                        <p>€{additionalCosts}</p>
                    </div>
                </AboutTheRoomRow>
            </AboutTheRoomDetails>
        </AvailabilityAndPricesSection>
    )
}

        // RIGHT COLUMN //

const HostDetails: React.FC<IHostDetailsResponse> = (props) => {

    const {activeYears, hostedTimes, name} = props;

    return (
        <HostDetailsWrapper>
            <SectionTitle>
                <TitleH2>Host details</TitleH2>
                <HostVerify verification={"verified"}/>
            </SectionTitle>
            <HostDetailsInfoSection>
                <HostDetailsAbout>
                    <p>{name}</p>
                    <div>
                        <p><strong>{activeYears}</strong> years active</p>
                        <p><strong>{hostedTimes}</strong> times hosted before</p>
                    </div>
                </HostDetailsAbout>
                <img src="https://via.placeholder.com/150" alt=""/>
            </HostDetailsInfoSection>
        </HostDetailsWrapper>
    )
}

const AboutTheHost = () => {

    return (
        <HostDetailsWrapper>
            <SectionTitle>
                <TitleH2>About the room</TitleH2>
            </SectionTitle>
            <AboutMeView
                descriptionUser='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda aut blanditiis cum debitis deserunt dicta dignissimos et eum ex explicabo hic impedit laudantium molestias odio placeat, quis, ut?'
                genderUser={'male'} spokenLanguage={['EN']}/>
        </HostDetailsWrapper>
    )
}

const SocialPreferencesSection = () => {
    return (
        <HostDetailsWrapper>
            <SectionTitle>
                <TitleH2>Social preferences</TitleH2>
            </SectionTitle>
            <SocialPreferensecRange>
                <SocialPreferences newInTown={useRange(40)} privacy={useRange(50)} roleUser={"host"}/>
            </SocialPreferensecRange>
        </HostDetailsWrapper>
    )
}

        // SLIDER //

const SampleNextArrow: React.FC<TSliderArrow> = (props) => {

    const {onClick, isModalOpen} = props

        return (
            <ArrowRight onClick={onClick} isModalOpen={isModalOpen}/>
        );
    }

const SamplePrevArrow: React.FC<TSliderArrow> = (props) => {

    const {onClick, isModalOpen} = props

    return (
        <ArrowLeft onClick={onClick} isModalOpen={isModalOpen}/>
    );
}

const SimpleSlider: React.FC<TSlider> = (props) => {

    const {setIsModalOpen, isModalOpen, imgData, setCurrentSlide} = props

    const beforeChange = (prev: number, next: number) => {
        setCurrentSlide(Math.floor(next));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isModalOpen ? 1 : 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow isModalOpen={isModalOpen}/>,
        prevArrow: <SamplePrevArrow isModalOpen={isModalOpen}/>,
        beforeChange: beforeChange,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: isModalOpen ? 1 : 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 465,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <SliderWrapper isModalOpen={isModalOpen}>
            <Slider {...settings}>
                {imgData.map((_: string, index: number) => <SliderElementSC key={index}
                                                                         onClick={() => setIsModalOpen(true)}>
                    <img src="https://via.placeholder.com/250" alt=""/>
                </SliderElementSC>)}
            </Slider>
        </SliderWrapper>
    );
}

    // MAP //

const PickedPlace: React.FC<TPickedPlace> = (props) => {
    return (
        <MapSelectedPlace>
            <div>
                {props.text}
            </div>
        </MapSelectedPlace>
    )
}

const GoogleMap: React.FC<IGoogleMap> = (props) => {

    const {centerCoordinates, placeCoordinates, zoom} = props;

    return (
        <MapWrapper>
            <GoogleMapReact
                defaultCenter={centerCoordinates}
                defaultZoom={zoom}
            >
                <PickedPlace
                    {...placeCoordinates}
                    text="text"
                />
            </GoogleMapReact>
        </MapWrapper>
    );
}
