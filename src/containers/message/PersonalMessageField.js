import { Avatar } from '@material-ui/core';
import React, { useEffect, useState , useRef ,useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import EmojiSvg from '../../components/svg/EmojiSvg'
import { useDispatch} from "react-redux";
import { getSpecificChats, sendMessage } from '../../actions';
import useStayScrolled from 'react-stay-scrolled';

const PersonalMessageField = () => {
    const convo = useSelector(state => state.convo)
    const auth = useSelector(state => state.auth)
    const [newMessage, setNewMessage] = useState('')
    const dispatch = useDispatch();
    const scrollRef = useRef()
    const { scrollBottom } = useStayScrolled(scrollRef);

    const MessageText = async (e , msgtext) => {
        e.target.reset();
        const message = {
            sender: auth.user._id,
            receiver: convo.userDetails[0]._id,
            text: msgtext,
            conversationId: convo.conversationId
        }
        dispatch(sendMessage(message))
    }

    useLayoutEffect(() => {
        scrollBottom();
    }, [convo.specificChat.length])

    useEffect(() => {
        dispatch(getSpecificChats(convo.conversationId))
    },[convo.specificChat.length])

    return (
        <>
          <Header>
              <div>
              {React.Children.toArray(
                    convo.userDetails?.map((item) => {
                        return (
                            <>
                            <Avatar style={{width:'20px' , height: '20px' , margin: '14px 15px'}} alt="Remy Sharp" src={item.profilePicture}/>
                            <h4>{item.name}</h4>
                            </>
                        )
                    })
                )}
              </div>
              </Header> 
          <MessageContainer ref={scrollRef}> 
              <div>
              {React.Children.toArray(
                    convo?.specificChat?.map((item) => {
                    return(
                        <>
                        {
                            item.sender === auth.user._id ?
                            <MessageDiv own>
                                <p>{item.text}</p>
                            </MessageDiv> 
                            :
                            <MessageDiv>
                                <p>{item.text}</p>
                            </MessageDiv> 
                        }
                        </>
                )
                })
                )}
              </div>
          </MessageContainer> 
          <TypeBox>
                <EmojiSvg/>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    MessageText(e , e.target[0].value )}}
                    >
                    <input type="text" placeholder="Message..." onChange={(e) => setNewMessage(e.target.value)} value={newMessage}/>
                </form>
                    <svg aria-label="Add Photo or Video" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M38.5 0h-29C4.3 0 0 4.3 0 9.5v29C0 43.7 4.3 48 9.5 48h29c5.2 0 9.5-4.3 9.5-9.5v-29C48 4.3 43.7 0 38.5 0zM45 38.5c0 3.6-2.9 6.5-6.5 6.5h-29c-3.3 0-6-2.5-6.4-5.6l8.3-8.3c.1-.1.3-.2.4-.2.1 0 .2 0 .4.2l6.3 6.3c1.4 1.4 3.6 1.4 5 0L35.9 25c.2-.2.6-.2.8 0l8.3 8.3v5.2zm0-9.4l-6.2-6.2c-1.3-1.3-3.7-1.3-5 0L21.3 35.3c-.1.1-.3.2-.4.2-.1 0-.2 0-.4-.2L14.2 29c-1.3-1.3-3.7-1.3-5 0L3 35.2V9.5C3 5.9 5.9 3 9.5 3h29C42.1 3 45 5.9 45 9.5v19.6zM11.8 8.2c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path></svg>
                    <svg aria-label="Like" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
          </TypeBox> 
        </>
    )
}

export default PersonalMessageField

export const Header = styled.div`
  width:100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content:space-between;

  div{
      display: flex;
      align-items: center;
      margin-left: 15px;
      h4{
          font-size: 16px;
          font-weight: 600;
          color: #262626;
      }
  }
`;

export const MessageContainer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    /* align-items: flex-start; */
    /* justify-content: flex-end; */
    top: 52px;
    height: calc(100% - 116px);
    overflow-y: scroll;
    /* border: 1px solid black; */
    div{
        width: 100%;
    }
`;

export const MessageDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content:${props => props.own ? "flex-end" : "flex-start"};
    /* border: 1px solid lightgrey; */
    /* margin-left:${props => props.own ? "10px" : "0px"} */
    p{
        max-width:40%;
        background-color:white;
        border: 1px solid lightgrey;
        border-radius:30px;
        padding: 20px;
        background-color:${props => props.own ? "#efefef" : "white"};
    }
`;

export const TypeBox = styled.div`
    position: absolute;
    bottom: 10px;
    border-radius:30px;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    width: 92%;
    height: 45px;
    border: 1px solid lightgrey;
    form{
         height: 90%;
        width: 75%;
        input{
            outline: none;
            height: 90%;
            width: 75%;
            border: none;
        }
    }
    
`;