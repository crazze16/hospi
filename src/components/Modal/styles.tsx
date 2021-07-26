import styled from "styled-components/macro";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;

  & section {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: ${(props) => props.theme.colors.bgBody};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    transform: translate(-50%, -50%);

    & > button {
      position: absolute;
      top: 1em;
      right: 1em;
      cursor: pointer;
      border: none;
      outline: none;
      margin: 0;
      padding: 0;
      background: transparent;
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.text};
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &.show {
    display: block;
  }
  
  &.hide {
    display: none;
  }
`;
