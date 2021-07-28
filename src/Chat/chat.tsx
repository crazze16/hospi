import {
    ChatBody,
    ChatWrapper,
    ConversationList,
    ConversationListItem,
    Conversations,
    ConversationsTitle, InputMessageSection,
    MessageSection
} from "./styles";

export const ChatPage = () => {
    return (
        <ChatWrapper>
            <ChatBody>
                <Conversations>
                    <ConversationsTitle>Active Conversations</ConversationsTitle>
                    <ConversationList>
                        <SingleConversation/>
                    </ConversationList>
                </Conversations>
                <MessageSection>
                    12321
                </MessageSection>
            </ChatBody>
            <InputMessageSection/>
        </ChatWrapper>
    )
}



const SingleConversation = () => {
    return (
        <ConversationListItem>
            <img src="https://via.placeholder.com/30" alt=""/>
            <p>Cor ten Broek</p>
            <div>...</div>
        </ConversationListItem>
    )
}