import styled, { css } from "styled-components/macro";
import { maxWeightMainWindov, heightHeaderDesktop } from "../utils/constants";
import homeBanner from "../assets/images/hospi-housing-homepage-banner.jpg";

export const MainFlow = styled.div<{ login?: boolean }>`
  position: relative;
  top: ${heightHeaderDesktop};
  height: calc(100vh - ${heightHeaderDesktop});
  ${(props) =>
    props.login &&
    css`
      top: 0;
      height: 100vh;
    `}
  width: 100%;
  overflow-y: auto;
  @media ${(props) => props.theme.media.tablet} {
    padding: 0 1em;
  }

  @media ${(props) => props.theme.media.phone} {
    padding: 0 0.5em;
  }
`;
// Use for Login page
export const ContainerLogin = styled.div`
  max-width: 336px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  margin: 0 auto;
`;
// Redirect to login
export const ContainerRedirect = styled.div`
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.place};
  padding: 24px;
`;
interface IPopupM {
  top?: string;
  right?: string;
}
// Use FC PopupMenu, MultiSelect, SelectLanguage
export const ContainerPopupMenu = styled.div<IPopupM>`
  position: absolute;
  top: ${(props) => props.top || "0"};
  right: ${(props) => props.right || "0"};
  width: max-content;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.place};
  opacity: 0;
  transition: 0.7s;
  &.active {
    opacity: 1;
  }
  & a {
    display: block;
    width: 100%;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
  & .logout:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ContainerTitleEdit = styled.div`
  display: flex;
  justify-content: space-between;
  & a {
    text-decoration: none;
  }
  @media ${(props) => props.theme.media.phone} {
    & > * label {
      display: none;
    }
  }
`;
// StudentProfileView
export const ContainerSearch = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  // gap: 24px;
  @media ${(props) => props.theme.media.phone} {
    grid-template-columns: 1fr;
    & div {
      padding: 0 0 24px 0;
    }
    :ntn-child(4) {
      padding: 0;
    }
  }
`;

export const ContainerRegistration = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-width: ${maxWeightMainWindov};
  margin: 0 auto;
  & .buttonGroup {
    & button {
      margin: 16px 0 0 24px;
    }
  }
  @media (max-width: 890px) {
    & .buttonGroup {
      flex-direction: column;
      & button {
        width: 100% !important;
        margin: 16px 0 0 0;
      }
    }
  }
  @media;
`;
export const ContainerView = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  margin: 0 auto;
  padding: 0 8px;
  max-width: ${maxWeightMainWindov};
  @media (max-width: 845px) {
    grid-template-columns: 1fr;
  }
`;

export const ConteinerLeftSide = styled.div`
  position: fixed;
  top: 110px;
  left: center;
  align-self: flex-start;
  // transform: translateX(-10px);
  width: 248px;
  height: 343px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.place};
  padding: 24px;
  @media (max-width: 845px) {
    display: none;
  }

  & a {
    text-decoration: none;
    padding: 8px 8px 8px 16px;
    cursor: pointer;
    display: block;
    border-radius: 4px;
    margin-bottom: 8px;

    &.active {
      background-color: ${(props) => props.theme.colors.secondary};

      label {
        font-weight: 600;
      }
    }
  }
`;

export const ContainerViewProfile = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 512px;
`;
// Use page UserProfile
export const ContainerGeneric = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.bgBody};
  width: 100%;
  @media ${(props) => props.theme.media.phone} {
    grid-template-columns: 1fr;
  }
  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;
export const ContainerNotice = styled.div`
  background-color: transparent;
  display: block;
  width: 100%;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
export const ContainerValue = styled.div<{ maxWidth?: string }>`
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.place};
  padding: 24px;
  max-width: ${(props) => props.maxWidth || "initial"};
  width: 100%;
  margin-bottom: 24px;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 24px;
    padding: 24px 8px;
  }
`;
export const ContainerValueView = styled(ContainerValue)`
  flex-grow: 1;
  width: 100%;
  max-width: 688px;
  margin-bottom: 24px;
`;
// Use FC Header
export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${maxWeightMainWindov};
  margin: 0 auto;
  height: 100%;

  @media ${(props) => props.theme.media.tablet} {
    padding: 0 1.8rem;
  }

  @media ${(props) => props.theme.media.phone} {
    padding: 0 1.8rem;
  }
`;

// Use page Login, FC InputCalendar, Input, Select, MultiSelect, SelectLanguage
export const StyledBlock = styled.div<{
  w?: string;
  grow?: string;
  p?: string;
}>`
  display: block;
  position: relative;
  width: ${(props) => props.w || "100%"};
  padding: ${(props) => props.p || "initial"};
  flex-grow: ${(props) => props.grow || "0"};
  line-height: 1.8em;
`;
export interface IFlex extends React.HTMLAttributes<HTMLDivElement> {
  readonly justify?: string;
  readonly align?: string;
  readonly direction?: string;
  readonly wrap?: string;
  readonly gap?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly grow?: number;
  readonly width?: string;
}
// Use page Login, Home, StudentProfile, Contact
// Use FC InputCalendar, Calendar, MultiSelect, Menu, SelectLanguage, Range
export const FlexBox = styled.div<IFlex>`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
  gap: ${(props) => props.gap || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "initial"};
  flex-grow: ${(props) => (props.grow === undefined ? 1 : props.grow)};
`;
interface IBorderBox {
  readonly active?: boolean;
  readonly m?: string;
}
// Use page Login
export const BorderBox = styled.div<IBorderBox>`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  margin: ${(props) => props.m || "initial"};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.primary};
  flex-grow: 1;
  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.colors.activeRadioBox};
    `}
`;

export const MediaCover = styled(StyledBlock)<{ p?: string }>`
  padding: ${(props) => props.p || "0"};
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 50%;
  }
`;

// Use for Block registration Student / Host
// export const ContainerBlock = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   border-radius: ${(props) => props.theme.sizes.borderRadius};
//   border: 1px solid ${(props) => props.theme.colors.border};
//   background-color: ${(props) => props.theme.colors.place};
//   padding: ${(props) => props.theme.sizes.block.padding};
//   flex-grow: 1;
// `;

// Use for page Home
export const ContainerHome = styled.div`
  display: block;
  position: relative;
  /* width: ${maxWeightMainWindov}; */
  width: 100%;
  text-align: center;
  margin: 0 auto;
  /* margin-top: 10px;  */

  span {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    span {
      font-size: 1.2rem;
    }
  }
`;
export const TopContainer = styled.div`
  background: url(${homeBanner}) no-repeat center/cover border-box;
  width: 100%;
  height: 60vh;
  padding-top: 50px;
  position: relative;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 15%;
`;
