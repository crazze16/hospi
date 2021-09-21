import {
    AreaWrapper,
    ButtonGroup,
    ChatBody,
    ChatSection,
    ChatWrapper, ClosePopup,
    ConversationList,
    ConversationListItem,
    Conversations,
    ConversationsTitle,
    DropDownMenu,
    InputMessage,
    InputMessageSection,
    InvitationSubTitle,
    InvitationTitle,
    MessageSection,
    MessageSectionWrapper,
    MessageWrapper,
    NewMessageAlert, PopoverContainer,
    SelectedConversationTitle,
    TextInfoContainer
} from "./styles";
import {Button, IcoShortArrowRight, IcoThreeDots, TitleH1, TitleH2} from "../components/generic";
import React, {Dispatch, SetStateAction, useEffect, useMemo, useRef, useState} from "react";
import {NavLink} from "react-router-dom";

type TMyMessage = {
    value: string
    isMy: boolean
}

type TConversation = {
    name: string
    userId: number
    img: string
}

type TMessageInput = {
    setMessageData: Dispatch<SetStateAction<Array<TMyMessage>>>
}

type TInvitationMessage = {
    isHost: boolean
}

type TMessage = {
    value: string
    isMy: boolean
}

interface IMessagesList {
    messageData: Array<TMyMessage>
    scrollMode: boolean
    isNewMessages: boolean
    setScrollMode: (isScrollMode: boolean) => void
    setIsNewMessages: (isNewMessage: boolean) => void
}

interface ISingleConversation {
    activeConversation: TConversation | null
    setActiveConversation: (conversation: TConversation | null) => void
    conversation: TConversation
    isActive?: boolean
}

// mock data //

const MockConversationsData: Array<TConversation> = [
    {name: 'Cor ten Broek', userId: 1, img: 'https://via.placeholder.com/30'},
    {name: 'Somebody once told me', userId: 12, img: 'https://via.placeholder.com/30'},
    {name: 'Test name', userId: 3, img: 'https://via.placeholder.com/30'},
    {name: 'Test name', userId: 4, img: 'https://via.placeholder.com/30'},
]


export const ChatPage = () => {
    const [messageData, setMessageData] = useState<Array<TMyMessage>>([]);
    const [scrollMode, setScrollMode] = useState<boolean>(true);
    const [isNewMessages, setIsNewMessages] = useState<boolean>(false);
    const [conversations, setConversations] = useState<Array<TConversation>>([]);
    const [activeConversation, setActiveConversation] = useState<TConversation | null>(null);
    const [isRemoveChatPopupOpen, setIsRemoveChatPopupOpen] = useState<boolean>(false);
    console.log('ACTIVE CONVERSATION:', activeConversation)

    useEffect(() => {
        setConversations(MockConversationsData)
    }, [])

    return (
        <ChatWrapper>
            <NoChatsInfoSection/>
            <FirstMeetChatInfoSection/>
            <GetHelpChatInfoSection/>
            <ConversationDropDownMenu isOpen={isRemoveChatPopupOpen} setIsOpen={setIsRemoveChatPopupOpen} name={activeConversation?.name}/>
            <SelectedConversationTitle>
                {
                    activeConversation && (
                        <>
                            <TitleH1>{activeConversation.name}</TitleH1>
                            <NavLink to={'/'}>View profile</NavLink>
                        </>
                    )
                }
            </SelectedConversationTitle>
            <Area/>
            <ChatSection>
                <ChatBody>
                    <Conversations>
                        <div>
                            <ConversationsTitle>Active Conversations</ConversationsTitle>
                            <ConversationList>
                                {
                                    conversations?.map((item, index) =>
                                        <MemoConv
                                            key={index}
                                            conversation={item}
                                            activeConversation={activeConversation}
                                            setActiveConversation={setActiveConversation}
                                            isActive={activeConversation?.userId === item.userId}
                                        />
                                    )
                                }
                            </ConversationList>
                        </div>
                        <Button outline>Choose this student</Button>
                    </Conversations>
                    <MessagesList isNewMessages={isNewMessages} messageData={messageData} scrollMode={scrollMode}
                                  setScrollMode={setScrollMode} setIsNewMessages={setIsNewMessages}
                    />
                </ChatBody>
                <MessageInput setMessageData={setMessageData}/>
            </ChatSection>
        </ChatWrapper>
    )
};


const MessagesList: React.FC<IMessagesList> = React.memo((props) => {
    const {messageData, scrollMode, setScrollMode, setIsNewMessages, isNewMessages} = props;
    console.log('MESSAGE LIST')
    const messagesAnchorRef = useRef<HTMLDivElement>(null);

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if ((Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 100) && (element.scrollHeight !== element.offsetHeight)) {
            setScrollMode(true);
            setIsNewMessages(false);
        } else {
            setScrollMode(false);
        }
    };

    useEffect(() => {
        if (scrollMode) {
            messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messageData, scrollMode]);

    useEffect(() => {
        if (!scrollMode) {
            setIsNewMessages(true)
        }
    }, [messageData]);

    return (
        <MessageSectionWrapper>
            {
                isNewMessages ?
                    <NewMessageAlert onClick={() => setScrollMode(true)}>New message</NewMessageAlert>
                    : ''
            }
            <MessageSection onScroll={scrollHandler}>
                <SendMessageInfoSection/>
                <InvitationMessage isHost={true}/>
                <InvitationMessage isHost={false}/>
                {
                    messageData?.map((item: TMyMessage, index: number) =>
                        <Message key={index} isMy={item.isMy} value={item.value}/>)
                }
                <div ref={messagesAnchorRef}/>
            </MessageSection>
        </MessageSectionWrapper>
    )
})

const SingleConversation: React.FC<ISingleConversation> = React.memo((props) => {
    const {activeConversation, setActiveConversation} = props;
    const {name, img, userId} = props.conversation;

    console.log('SINGLE CONV')
    return (
        <ConversationListItem isActive={activeConversation?.userId === userId}
                              onClick={() => setActiveConversation(props.conversation)}>
            <img src={img} alt="user avatar"/>
            <p>{name}</p>
            <div><IcoThreeDots size={'1.5em'}/></div>
        </ConversationListItem>
    )
});

const MemoConv: React.FC<ISingleConversation> = (props) => {
    return useMemo(() => {
        return <SingleConversation {...props}/>
    }, [props.isActive])
}

const MessageInput: React.FC<TMessageInput> = (props) => {

    const {setMessageData} = props;

    const [newMessage, setNewMessage] = useState<TMyMessage>({value: '', isMy: true});

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage({...newMessage, value: e.currentTarget.value})
    }

    const sendMessageHandler = () => {
        setMessageData((prev: Array<TMyMessage>) => [...prev, newMessage])
        setNewMessage({...newMessage, value: ''})
    }

    return (
        <InputMessageSection>
            <InputMessage placeholder='Enter your message here' onChange={onInputChangeHandler}
                          value={newMessage?.value}/>
            <Button main h={'37px'} fontSize={'16px'} disabled={!newMessage?.value}
                    onClick={sendMessageHandler}>Send<IcoShortArrowRight size={'2em'}/></Button>
        </InputMessageSection>
    )
};

const InvitationMessage: React.FC<TInvitationMessage> = (props) => {

    const {isHost} = props;

    return (
        <MessageWrapper isMy={false}>
            {
                isHost ? (
                    <>
                        <InvitationTitle>
                            You have invited Inge Licht to become your tenant from 15 sept - 26 sept.
                        </InvitationTitle>
                        <InvitationSubTitle fontWeight={'bold'} color={'sub'}>
                            Waiting for confirmation...
                        </InvitationSubTitle>
                        <ButtonGroup>
                            <Button normal h={'37px'} fontWeight={'bold'} fontSize={'16px'} disabled={false}>Cancel
                                Invitation</Button>
                        </ButtonGroup>
                    </>
                ) : (
                    <>
                        <InvitationTitle>
                            Cor ten Broek invites you to come live in this room from 1 may to 30 sept.
                        </InvitationTitle>
                        <InvitationSubTitle>
                            Do you accept the invitation to start the renting process?
                        </InvitationSubTitle>
                        <ButtonGroup>
                            <Button normal h={'37px'} fontWeight={'bold'} fontSize={'16px'}
                                    disabled={false}>Decline</Button>
                            <Button main h={'37px'} fontWeight={'bold'} fontSize={'16px'} disabled={false}>I accept this
                                offer</Button>
                        </ButtonGroup>
                    </>
                )
            }
        </MessageWrapper>
    )
};

const Message: React.FC<TMessage> = React.memo((props => {
    const {isMy, value} = props;
    return (
        <MessageWrapper isMy={isMy}>
            {value.trim()}
        </MessageWrapper>
    )
}))

const NoChatsInfoSection = () => {
    return (
        <TextInfoContainer width={511}>
            <TitleH1>My Chats</TitleH1>
            <div>
                <p>You don’t have any chats yet. Go to My Rooms to check out new available rooms and find possible
                    matches!</p>
            </div>
            <Button main h={'37px'}>Go To My Rooms</Button>
        </TextInfoContainer>
    )
}

const FirstMeetChatInfoSection = () => {
    return (
        <TextInfoContainer>
            <TitleH1>My Chats</TitleH1>
            <div>
                <p>
                    Here you see an overview of your chats. You can only chat with hosts that have liked your profile.
                    Use
                    this chat to get to know each other and discuss the terms of your stay. To increase the chance for a
                    successful match, we advise you to plan a visit or a video call before you make a decision.
                </p>
                <p>
                    If you and the host reached an agreement, the host can send an invitation. When you accept the
                    invitation, your stay is confirmed and the adventure can start!
                </p>
            </div>
        </TextInfoContainer>
    )
}

const GetHelpChatInfoSection = () => {
    return (
        <TextInfoContainer alignCenter border p={'16px 0'}>
            <TitleH2>Not sure what to do?</TitleH2>
            <p>
                Please don’t hesitate to contact Hospi Housing if you have any questions.
            </p>
            <p>
                We are happy to help!
            </p>
            <Button normal>Get help from Hospi Housing</Button>
        </TextInfoContainer>
    )
}

const SendMessageInfoSection = () => {
    return (
        <TextInfoContainer alignCenter>
            <p>
                Send Inge Licht a message to introduce yourself.
            </p>
            <p>
                <span>What would you like to know before meeting this person in your house?</span>
            </p>
        </TextInfoContainer>
    )
}

export const ConversationDropDownMenu: React.FC<{isOpen: boolean, setIsOpen: (isOpen: boolean) => void, name: string | undefined}> = (props) => {

    const {isOpen, setIsOpen, name} = props;

    const closeHandler = () => {
        setIsOpen(false)
    }

    const message = `Warning, when you remove this chat you will lose the whole chat history which cannot be undone.
        
If you have any issues regarding this user or Hospi Housing please contact us, we’re happy to help!`

    return (
        <PopoverContainer isOpen={isOpen}>
            <DropDownMenu>
                <ClosePopup onClick={closeHandler}>
                    <span/>
                </ClosePopup>
                <TitleH2>Remove chat with {name && name}</TitleH2>
                <p>
                    {message}
                </p>
                <div>
                    <Button normal>No, keep this chat</Button>
                    <Button danger>Yes, remove this chat</Button>
                </div>
            </DropDownMenu>
        </PopoverContainer>
    )
}

export const Area = () => {
    const ref = useRef(null)

    const [value, setValue] = useState<string>(``)
    const [selectedText, setSelectedText] = useState<any>('')

    const [spanValue, setSpanValue] = useState<any>([])

    useEffect(() => {
        const arr = value.trim().split(' ')
        for(let i = 0; i < arr.length; i++) {
            arr[i] = `${arr[i]}`
        }
        setSpanValue(arr)
        // console.log(arr)
    }, [value])

    console.log(spanValue)

    function getSelectionText() {
        setSelectedText(window?.getSelection()?.toString())
        if (window.getSelection) {
            let wrapper = `<span style="color: red">${window?.getSelection()?.toString()}</span>`
            // setValue(value.slice(0,3) + `<span style="color: red">222</span>` + value.slice(6))
            // setValue(`${value1.slice(0, window?.getSelection()?.getRangeAt(0).startOffset)}${wrapper}${value1.slice(window?.getSelection()?.getRangeAt(0).endOffset)}`)
        }
    }

    // const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //     setValue(prevState => prevState + e.key)
    //     console.log(value)
    // }

    function replaceSelectedText(text: any) {

        // if (window?.getSelection()?.getRangeAt(0) != undefined) {
        //     let startPos = txtArea.selectionStart;
        //     let endPos = txtArea.selectionEnd;
        //     selectedText = txtArea.value.substring(startPos, endPos);
        //     txtArea.value = txtArea.value.slice(0, startPos) + text + txtArea.value.slice(endPos);
        // }
    }


    return (
        <>
            <AreaWrapper onMouseUp={getSelectionText} contenteditable ref={ref} onInput={(e: any) => setValue(e.currentTarget.innerHTML)}>
            </AreaWrapper>
            <div>
                {spanValue.map((item: any, index: any) => <MySpan item={item} _id={index} key={index} />)}
            </div>
            {selectedText}
            {/*<div  onMouseUp={() => getSelectionText()}/>*/}
        </>
    )
}

const MySpan = (props: any) => {
    const {item, _id} = props;

    const [startOffSet, setStartOffSet] = useState<number | undefined>(0)
    const [endOffSet, setEndOffSet] = useState<number | undefined>(0)

    const [spanValue, setSpanValue] = useState<any>('')

    const addStyle = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.style.background = 'red'
    }

    useEffect(() => {
        setSpanValue(item)
    }, [item])

    const selection = () => {
        //     console.log(window?.getSelection()?.focusNode?.textContent?.length)
        setStartOffSet(window?.getSelection()?.getRangeAt(0).startOffset)
        setEndOffSet(window?.getSelection()?.getRangeAt(0).endOffset)
        //@ts-ignore

        // console.log(window?.getSelection()?.focusNode?.textContent)
        // console.log(window?.getSelection())
        setSpanValue(item.slice(0,startOffSet) + item.slice(endOffSet))
        console.log('START:', startOffSet)
        console.log('END:', endOffSet)
        console.log(window?.getSelection()?.getRangeAt(0))
    }

    return (

        <span onClick={addStyle} onMouseUp={() => selection()}>{spanValue} </span>
    )
}
