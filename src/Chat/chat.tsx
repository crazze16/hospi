import {
    ButtonGroup,
    ChatBody,
    ChatWrapper,
    ConversationList,
    ConversationListItem,
    Conversations,
    ConversationsTitle, InputMessage, InputMessageSection, InvitationSubTitle, InvitationTitle,
    MessageSection, MessageWrapper
} from "./styles";
import {Button, IcoShortArrowRight, IcoThreeDots} from "../components/generic";

export const ChatPage = () => {
    return (
        <ChatWrapper>
            <ChatBody>
                <Conversations>
                    <ConversationsTitle>Active Conversations</ConversationsTitle>
                    <ConversationList>
                        <SingleConversation isActive={true}/>
                        <SingleConversation isActive={false}/>
                    </ConversationList>
                </Conversations>
                <MessageSection>
                    <Message isMy={true}/>
                    <Message isMy={false}/>
                    <HostInvitation/>
                </MessageSection>
            </ChatBody>
            <MessageInput/>
        </ChatWrapper>
    )
};


const SingleConversation = (props: any) => {

    const {isActive} = props;

    return (
        <ConversationListItem isActive={isActive}>
            <img src="https://via.placeholder.com/30" alt=""/>
            <p>Cor ten Broek</p>
            <div><IcoThreeDots size={'1.5em'}/></div>
        </ConversationListItem>
    )
};

const MessageInput = () => {
    return (
        <InputMessageSection>
            <InputMessage placeholder='Enter your message here'/>
            <Button main h={'37px'} fontSize={'16px'} disabled={false}>Send<IcoShortArrowRight size={'2em'}/></Button>
        </InputMessageSection>
    )
};

const HostInvitation = () => {
    return (
        <MessageWrapper isMy={false}>
            <InvitationTitle>Cor ten Broek invites you to come live in this room from 1 may to 30 sept.</InvitationTitle>
            <InvitationSubTitle>Do you accept the invitation to start the renting process?</InvitationSubTitle>
            <ButtonGroup>
                <Button normal h={'37px'} fontWeight={'bold'} fontSize={'16px'} disabled={false}>Decline</Button>
                <Button main h={'37px'} fontWeight={'bold'}  fontSize={'16px'} disabled={false}>I accept this offer</Button>
            </ButtonGroup>
        </MessageWrapper>
    )
};

const Message = (props: any) => {

    const {isMy} = props;

    return (
        <MessageWrapper isMy={isMy}>
            Hi Cor, thanks :)
        </MessageWrapper>
    )
}