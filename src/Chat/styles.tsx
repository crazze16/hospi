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
const subText = '#6f7f9e'
const linkColor = '#EA6B26'

export const ChatWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${chatBackground};
  border: 1px solid ${border};
  border-radius: 4px;
  padding: 16px 0 16px 16px;
  margin-top: 16px;
`;

export const ChatBody = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
  position: relative;
`;

export const Conversations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    width: 210px;
    border-right: 1px solid ${border};
    padding-right: 24px;
    flex: 1;
    margin-bottom: 16px;
  }
  & button {
    width: 100%;
    font-weight: bold;
  }
`;

export const ConversationsTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${setupColor};
  font-weight: 600;
`;

export const ConversationList = styled.ul`
  padding: 0;
  margin-top: 8px;
  list-style-type: none;
  width: 100%;
`;
export const ConversationListItem = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  background: ${props => props.isActive ? conversationBackground : ''};
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  & :hover {
    cursor: pointer;
  }
  & img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: ${props => props.isActive ? '1px solid #FFFFFF' : `1px solid ${border}`}
  }

  & p {
    color: ${props => props.isActive ? selectedConversationColor : conversationBackground};
    font-size: 16px;
    line-height: 21px;
    font-weight: 600;
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
    color: ${props => props.isActive ? dotsReverse : conversationBackground}
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
  margin-right: 16px;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MessageSectionWrapper = styled.div`
  position: relative;
`;

export const SelectedConversationTitle = styled.div`
  display: flex;
  align-items: flex-end;
  min-height: 28px;
  & h1 {
    width: fit-content;
    margin-right: 16px;
  }
  & a {
    color: ${linkColor};
    text-decoration: none;
    font-weight: 600;
  }
`;

export const NewMessageAlert = styled.div`
  position: absolute;
  bottom: 0;
  background: ${conversationBackground};
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  color: #FFFFFF;
  left: calc(50% - 60px);
  z-index: 10;
  opacity: 70%;
  transition: all .2s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 1;
    
  }
`

export const MessageSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 0 24px;
  height: 500px;
  overflow-x: auto;
  position: relative;
`;

export const MessageWrapper = styled.div<{ isMy: boolean }>`
  background: ${props => props.isMy ? `${conversationBackground}` : `${selectedConversationColor}`};
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  border-radius: 6px;
  color: ${props => props.isMy ? `#FFFFFF` : `${mainText}`};
  line-height: 21px;
  max-width: 100%;
  width: fit-content;
  align-self: ${props => props.isMy ? 'flex-end' : 'flex-start'};
  margin-top: 4px;
  word-break: break-all;
  white-space: pre-wrap;
`;

export const InvitationTitle = styled.div`
  text-align: center;
  font-weight: 600;
`;
export const InvitationSubTitle = styled.div<{fontWeight?: string, color?: 'main' | 'sub'}>`
  text-align: center;
  font-weight: ${props => props.fontWeight && `${props.fontWeight}`};
  color: ${props => props.color === 'sub' && `${subText}`} 
`;
export const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  height: 100%;
  & button:nth-last-child(1) {
    margin-left: 10px;
  }
`;

export const TextInfoContainer = styled.div<{
    width?: number,
    alignCenter?: boolean,
    border?: boolean,
    p?: string}>`
  width: 100%;
  color: ${mainText};
  margin: 16px 0;
  ${props => props.alignCenter && `text-align: center`};
  ${props => props.border && `border: 1px solid ${border}`};
  ${props => props.border && `border-radius: 4px`};
  ${props => props.p && `padding: ${props.p}`};
  & h1 {
    margin-bottom: 24px;
  }
  & h2 {
    margin-bottom: 8px;
  }
  & div {
    p:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  & p {
    font-size: 20px;
    ${props => props.width && `max-width: ${props.width}px`};
    line-height: 26px;

    & span {
      color: ${subText};
    }
  }
  & button {
    margin-top: 24px;
    font-weight: 600;
  }
`;
export const NoChatsText = styled.p`

`;