import styled from "styled-components";

export const MainSide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* gap: 24px; */
  justify-items: center;
  transition: 0.5s;
  & section {
    max-width: 512px;
  }
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
  @media (max-width: 650px) {
    & section {
      width: calc(100% - 128px);
    }
  }
  @media ${(props) => props.theme.media.phone} {
    & section {
      width: calc(100% - 32px);
    }
  }
`;
