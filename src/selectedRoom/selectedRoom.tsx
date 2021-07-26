import {
    AboutTheRoomDetails,
    AboutTheRoomRow,
    AboutTheRoomSection, Arrow, ArrowLeft, ArrowRight,
    AvailabilityAndPricesSection,
    DetailsSection,
    HostDetailsAbout,
    HostDetailsInfoSection,
    HostDetailsWrapper,
    LeftColumnAbout,
    Location,
    MainBody,
    MainWrapper, ModalWindow,
    RightColumnAbout,
    RoomDetailsDescription,
    RoomDetailsSection,
    RoomDetailsTitle,
    SliderElementSC,
    SliderWrapper,
    SocialPreferensecRange,
    TypeOfRoom,
    VerifiedByHospi
} from "./styles";
import {InfoMessage} from "../pages/HostHouseRegistration/RoomsDetails/styles";
import {IcoInfo, Label} from "../components/generic";
import React, {useRef, useState} from "react";
import {SocialPreferences, SpokenLanguages, TitleEdit} from "../components/pageProfileComponents";
import {useRange} from "../components/Range";
import {FlexBox} from "../components/containers";
import {useContextHospi} from "../context/ContextHospi";
import Slider from "react-slick";

export const SelectedRoom = () => {

    return (
        <>
            <MainWrapper>
                <SimpleSlider/>
                <MainBody>
                    <LeftColumnAbout>
                        <DetailsSection>
                            <RoomDetails/>
                            <AboutTheRoom/>
                            <AvailabilityAndPrices/>
                        </DetailsSection>
                    </LeftColumnAbout>
                    <RightColumnAbout>
                        <HostDetails/>
                        <AboutTheHost/>
                        <SocialPreferencesSection/>
                    </RightColumnAbout>
                </MainBody>
            </MainWrapper>
            {/*<ModalWindow>*/}
            {/*    <SimpleSlider/>*/}
            {/*</ModalWindow>*/}
        </>

    )
}

const HostDetails = () => {
    return (
        <HostDetailsWrapper>
            <RoomDetailsTitle>
                <h2>Host details</h2>
                <VerifiedByHospiHousing/>
            </RoomDetailsTitle>
            <HostDetailsInfoSection>
                <HostDetailsAbout>
                    <p>Cor ten Broek</p>
                    <div>
                        <p><strong>1,5</strong> years active</p>
                        <p><strong>3</strong> times hosted before</p>
                    </div>
                </HostDetailsAbout>
                <img src="https://via.placeholder.com/150" alt=""/>
            </HostDetailsInfoSection>
        </HostDetailsWrapper>
    )
}

const AboutTheHost = () => {


    const {userProfile} = useContextHospi();

    const privacy = useRange(userProfile?.privacy || 50);
    const newInTown = useRange(userProfile?.requested_autonomy || 50);

    return (
        <HostDetailsWrapper>
            <TitleEdit keyItem="aboutMe"/>
            <FlexBox
                justify="space-between"
                // gap="24px"
                align="flex-start"
                direction="column"
            >
                <Label p="0 0 8px 0">{userProfile?.gender}</Label>
                {userProfile && (
                    <SpokenLanguages items={userProfile?.spoken_languages || []}/>
                )}
                <Label p="8px 0 0 0">{userProfile?.description || "-"}</Label>
            </FlexBox>
        </HostDetailsWrapper>
    )
}

const SocialPreferencesSection = () => {
    return (
        <HostDetailsWrapper>
            <RoomDetailsTitle>
                <h2>Social preferences</h2>
            </RoomDetailsTitle>
            <SocialPreferensecRange>
                <SocialPreferences newInTown={useRange(40)} privacy={useRange(50)} roleUser={"host"}/>
            </SocialPreferensecRange>
        </HostDetailsWrapper>
    )
}

const RoomDetails = () => {
    return (
        <RoomDetailsSection>
            <RoomDetailsTitle>
                <h2>Room details</h2>
                <VerifiedByHospiHousing/>
            </RoomDetailsTitle>
            <RoomDetailsDescription>
                This room is located in a vibrant part of the city. Public transport like bus and train are
                closely available and highly accessible. The street is full of bars, restaurants and
                coffeeshops (if you might be into that).
            </RoomDetailsDescription>
            <TypeOfRoom>
                <h3>Type of room</h3>
                <p>Room <InfoMessage
                    message={'test'}
                >
                    <IcoInfo size="1.2em"/>
                </InfoMessage></p>
            </TypeOfRoom>
            <Location>
                <div>
                    <h3>Street</h3>
                    <p>Haarlemmerdijk</p>
                </div>
                <div>
                    <h3>City</h3>
                    <p>Amsterdam</p>
                </div>
            </Location>
        </RoomDetailsSection>
    )
}

const AboutTheRoom = () => {
    return (
        <AboutTheRoomSection>
            <RoomDetailsTitle>
                <h2>About the room</h2>
            </RoomDetailsTitle>
            <AboutTheRoomRow>
                <div>
                    <h3>Bedroom size (m2)</h3>
                    <p>16</p>
                </div>
                <div>
                    <h3>Whole house size (m2)</h3>
                    <p>120</p>
                </div>
            </AboutTheRoomRow>
            <AboutTheRoomRow>
                <div>
                    <h3>For shared use</h3>
                    <p>Shared toilet</p>
                    <p>Shared bathroom</p>
                    <p>Shared kitchen</p>
                    <p>Shared livingroom</p>
                </div>
                <div>
                    <h3>For private use</h3>
                    <p>TV</p>
                    <p>Private toilet</p>
                </div>
            </AboutTheRoomRow>
        </AboutTheRoomSection>
    )
}

export const AvailabilityAndPrices = () => {
    return (
        <AvailabilityAndPricesSection>
            <RoomDetailsTitle>
                <h2>Availability & prices</h2>
            </RoomDetailsTitle>
            <AboutTheRoomDetails>
                <AboutTheRoomRow>
                    <div>
                        <h3>Room available from</h3>
                        <p>1 may 2021</p>
                    </div>
                    <div>
                        <h3>Room available until</h3>
                        <p>30 september 2021</p>
                    </div>
                </AboutTheRoomRow>
                <AboutTheRoomRow>
                    <div>
                        <h3>Room price</h3>
                        <p>€500</p>
                    </div>
                    <div>
                        <h3>Deposit</h3>
                        <p>€500</p>
                    </div>
                </AboutTheRoomRow>
                <AboutTheRoomRow>
                    <div>
                        <h3>Additional costs <InfoMessage
                            message={'test'}
                        >
                            <IcoInfo size="1.2em"/>
                        </InfoMessage></h3>
                        <p>€24,50</p>
                    </div>
                </AboutTheRoomRow>
            </AboutTheRoomDetails>
        </AvailabilityAndPricesSection>
    )
}

export const VerifiedByHospiHousing = () => {
    return (
        <VerifiedByHospi>
            Verified by Hospi Housing
        </VerifiedByHospi>
    )
}

const SampleNextArrow = ({onClick}: any) => {
    return (
        <ArrowRight onClick={onClick}/>
    );
};

const SamplePrevArrow = ({onClick}: any) => {
    return (
        <ArrowLeft onClick={onClick}/>
    );
}

const SimpleSlider = () => {

    const imgData = [1,2,3,4,5,6];

    const beforeChange = (prev: any, next: any) => {
        console.log(Math.floor(next));
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: beforeChange,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            ]
    };

    return (
        <SliderWrapper>
            {<Slider {...settings}>
                {imgData.map((_, index) => <SliderElementSC key={index}>
                    <img src="https://via.placeholder.com/250" alt=""/>
                </SliderElementSC>)}
            </Slider> as any}
        </SliderWrapper>
    );
}
