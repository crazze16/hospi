import styled from 'styled-components'
import {
    TitleH2,
    TitleH3,

} from "../components/generic";

const chatBackground = '#F4EBDA';
const border = '#DCD6CE';
const setupColor = '#978E88';
const conversationBackground = '#032565';
const conversationBackgroundHover = 'rgba(252,244,252,0.03)';
const selectedConversationColor = '#FFFCF6';
const dotsReverse = '#6F7F9E';
const mainText = '#032565'

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 776px;
  width: 100%;
  background: ${chatBackground};
  border: 1px solid ${border};
  border-radius: 4px;
  padding: 16px;
`;

export const ChatBody = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Conversations = styled.div`
  min-width: 206px;
  border-right: 1px solid ${border};
  padding-right: 24px;
  margin-right: 24px;
`;

export const ConversationsTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${setupColor};
  font-weight: 600;
`;

export const ConversationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;  
`;
export const ConversationListItem = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  background: ${props => props.isActive ? `${conversationBackground}` : ''};
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  & img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: ${props => props.isActive ? '1px solid #FFFFFF' : `1px solid ${border}`}
  }
  & p {
    color: ${selectedConversationColor};
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    padding-left: 8px;
    flex: 1;
  }
  & div {
    & :hover {
        background: ${conversationBackgroundHover};
        border-radius: 50%;
        cursor: pointer;
    }
  }
  & div svg {
  color: ${props => props.isActive ? dotsReverse : ''}
  }
`;



export const InputMessage = styled.textarea`
  width: 100%;
  height: 56px;
  border: none;
  font-size: 20px;
  line-height: 26px;
  padding: 13.5px 16px; 
  resize: none;
`;
export const InputMessageSection = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 8px;
    padding-right: 8px;
    & button {
    display: flex;
    align-items: center;
    justify-content: center;
    }
`;

export const MessageSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

export const MessageWrapper = styled.div<{ isMy: boolean }>`
    min-height: 42px;
    background: ${props => props.isMy ? `${conversationBackground}` : `${selectedConversationColor}`};
    padding: 16px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    border-radius: 6px;
    color: ${props => props.isMy ? `#FFFFFF` : `${mainText}`};
    line-height: 21px;
    width:fit-content;
    align-self: ${props => props.isMy ? 'flex-end' : 'flex-start'};
    margin-top: 4px;
`;

export const InvitationTitle = styled.div`
    text-align: center;
    font-weight: 600;
`;
export const InvitationSubTitle = styled.div`
    text-align: center;
`;
export const ButtonGroup = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    & button:nth-last-child(1) {
        margin-left: 10px;
    }
`;