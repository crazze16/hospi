import styled from 'styled-components';

const getColor = (props: {
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

export const Container = styled.div<{
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: ${(props) => props.theme.colors.place};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`;
