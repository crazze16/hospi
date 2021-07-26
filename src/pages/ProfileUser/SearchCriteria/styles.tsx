import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "daterange daterange"
    "budget city";
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  div:nth-of-type(1) {
    grid-area: daterange;
  }
  div:nth-of-type(2) {
    grid-area: budget;
  }
  div:nth-of-type(3) {
    grid-area: city;
  }
  gap: 24px;
  transition: 0.7s;
  @media ${(props) => props.theme.media.phone} {
    grid-template-areas:
      "daterange"
      "budget"
      "city";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;
