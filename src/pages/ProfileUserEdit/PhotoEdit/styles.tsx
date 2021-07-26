import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  & label {
    position: absolute;
    top: 36px;
    left: 22px;
  }
  & > div {
    position: absolute;
    top: -2px;
    left: -2px;
    border-radius: 50%;
    background-color: transparent;
    width: 124px;
    height: 124px;
    z-index: 20;
  }
  & > picture > img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }
`;

export const ContainerPhoto = styled.div<{ id?: string }>``;
