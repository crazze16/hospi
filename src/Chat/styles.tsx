import styled from 'styled-components'

const chatBackground = '#F4EBDA'
const border = '#DCD6CE'
const setupColor = '#978E88'
const conversationBackground = '#032565'
const selectedConversationColor = '#FFFCF6'

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
`;

export const Conversations = styled.div`
  width: 206px;
  border-right: 1px solid ${border};
  padding-right: 24px;
  margin-right: 24px;
`;

export const ConversationsTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${setupColor};
  font-weight: 600;
`

export const ConversationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;  
`;
export const ConversationListItem = styled.li`
  display: flex;
  align-items: center;
  background: ${conversationBackground};
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  & img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  & p {
    color: ${selectedConversationColor};
    font-size: 16px;
    line-height: 21px;
    font-weight: 600;
    padding-left: 8px;
    flex: 1;
  }
`;

export const MessageSection = styled.div`
`;

export const InputMessageSection = styled.input`
  width: 100%;
`;