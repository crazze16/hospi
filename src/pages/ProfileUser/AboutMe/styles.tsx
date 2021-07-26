import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;
export const ContainerRadiobox = styled.span`
  margin-top: 8px;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: flex-start;
  @media ${(props) => props.theme.media.phone} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;
export const ContainerCheckbox = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  justify-items: flex-start;
  /* grid-template-columns: repeat(4,1fr); */
  /* grid-auto-flow: row; */
`;
