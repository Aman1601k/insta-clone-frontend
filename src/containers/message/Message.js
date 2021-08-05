import React, { useEffect, useState , useRef ,useLayoutEffect } from 'react'
import {
  Container,
  LeftContainer,
  RightContainer,
  Header,
  Inbox,
  PersonChatBox,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Avatar } from "@material-ui/core";
import SimplePopover from '../../components/PopOver/Popover';
import ReactScrollableFeed from 'react-scrollable-feed';
import {
  getConversation,
  getConversationId,
  getSpecificChats,
  userChats,
  sendMessage,
  suggestedUsers,
  deleteConversation
} from "../../actions";
import { io } from "socket.io-client";
import moment from 'moment';
import styled from 'styled-components/macro';
import EmojiSvg from '../../components/svg/EmojiSvg'
import useStayScrolled from 'react-stay-scrolled';
import ShareSvg from '../../components/svg/ShareSvg';
import { Button } from '@material-ui/core';
import ModalSmall from '../ModalSmall/ChatModal'
import ModalContainer from '../ModalSmall/ModalContainer'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Drawer from '../../components/Drawer/Drawer'
import useWindowSize from '../../helpers/useWindowSize'
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';

const Message = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const convo = useSelector((state) => state.convo);
  const [changeConvo, setChangeConvo] = useState(false);
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const scrollRef = useRef()
  const socket = useRef(io("ws://localhost:5500"));
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [height, width] = useWindowSize();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const MessageText = (e , msgtext) => {
    console.log("eeeeeeeeeeeeee",e)  
    const message = {
          sender: auth.user._id,
          receiver: convo.userDetails[0]._id,
          text: msgtext,
          conversationId: convo.conversationId
      }
      dispatch(sendMessage(message)).then(() => {
        e.target.reset();
      });
      
      socket.current.emit("sendMessage" ,{
        senderId: auth.user._id,
        receiverId: convo.userDetails[0]._id,
        text: msgtext,
      })
    }

    useEffect(() => {
      dispatch(suggestedUsers())
    },[])

    useEffect(() => {
      scrollRef?.current?.scrollIntoView({ scrollBehavior: 'smooth'})
    },[convo.specificChat])

    useEffect(() => {
        dispatch(getSpecificChats(convo.conversationId))
    },[convo.specificChat.length])

  useEffect(() => {
    socket.current = io("ws://localhost:5500");
    socket.current.on("getMessage" , (data) => {
      setArrivalMessage({
        sender:data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, []);

  useEffect(() => {
    socket?.current?.emit("addUser", auth.user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [auth.user._id]);

  useEffect(() => {
    arrivalMessage && dispatch(getSpecificChats(convo.conversationId));
  },[arrivalMessage])

  useEffect(() => {
    const members = convo.conversation?.map((e) => e.members);
    let allMembers = [].concat.apply([], members);
    const filteredMembers = allMembers.filter(
      (member) => member !== auth.user._id
    );
    dispatch(getConversation(auth.user._id));
    if (filteredMembers.length > 0) {
      dispatch(userChats(filteredMembers)).then(() =>
        console.log("--------------", filteredMembers)
      );
    }
  }, [auth.user._id, convo.conversation?.length]);


  const handleConvo = (senderId, receiverId) => {
    dispatch(getConversationId(senderId, receiverId));
    if (convo.conversationId != "") {
      setChangeConvo(true);
    }
  };

  useEffect(() => {
    dispatch(getSpecificChats(convo.conversationId));
  }, [convo.conversationId]);

  const newConversation = () => {
    const ids = user.suggestedUser.map((id) => id._id);
  };

  const openPopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopOver = () => {
    setAnchorEl(null);
  };

  const conversationDelete = () => {
    dispatch(
      deleteConversation(convo.conversationId, auth.user._id)
    ).then(() => {
      window.location.reload();
    });
  };
  return (
    <Container>
      <LeftContainer>
        <SimplePopover anchorEl={anchorEl} handleClose={closePopOver}>
              <DeleteLayout onClick={() => conversationDelete()}>
                <p>Delete</p>
                <span>
                  <DeleteOutlineOutlinedIcon />
                </span>
              </DeleteLayout>
        </SimplePopover>
        {
          width >= 900 ?
          <>
           <Header>
          <h5>{auth.user.name}</h5>
          <KeyboardArrowDownIcon />
          <div style={{position: 'absolute' , right:'10px' , cursor: 'pointer'}} onClick={handleOpen} >
              <svg aria-label="New Message" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
          </div>
        </Header>
        <Inbox>
          {React.Children.toArray(
            user.userChats?.map((item) => {
              return (
                <PersonChatBox
                  onClick={() => handleConvo(auth.user._id, item._id)}
                >
                  <Avatar
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "14px 15px",
                    }}
                    alt="Remy Sharp"
                    src={item.profilePicture}
                  />
                  <div>
                    <p>{item.name}</p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#8e8e8e",
                      }}
                    >
                      Sent you a message
                    </p>
                  </div>
                  <DeleteButton onClick={(event) => openPopOver(event, user)}>
                    <MoreVertIcon />
                  </DeleteButton>
                </PersonChatBox>
              );
            })
          )}
        </Inbox>
          </>
          :
        <Drawer open={openDrawer} onClose={handleCloseDrawer} width="287px">
        <Header>
          <h5>{auth.user.name}</h5>
          <KeyboardArrowDownIcon />
          <div style={{position: 'absolute' , right:'10px' , cursor: 'pointer'}} onClick={handleOpen} >
              <svg aria-label="New Message" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
          </div>
        </Header>
        <Inbox>
          {React.Children.toArray(
            user.userChats?.map((item) => {
              return (
                <PersonChatBox
                onClick={() => handleConvo(auth.user._id, item._id)}
                >
                  <Avatar
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "14px 15px",
                    }}
                    alt="Remy Sharp"
                    src={item.profilePicture}
                    />
                  <div>
                    <p>{item.name}</p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#8e8e8e",
                      }}
                    >
                      Sent you a message
                    </p>
                  </div>
                  <DeleteButton onClick={(event) => openPopOver(event, user)}>
                    <MoreVertIcon />
                  </DeleteButton>
                </PersonChatBox>
              );
            })
            )}
        </Inbox>
        </Drawer>
      }
      </LeftContainer>
      <RightContainer>
        {!changeConvo ? (
          <NoMsgContainer>
            <ShareIconDiv>
                <div>
                    <svg aria-label="Share Post" class="_8-yf5 " fill="#262626" height="45" viewBox="0 0 48 48" width="45"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                </div>
            </ShareIconDiv>
                    <div>
                        <h4>Your Messages</h4>
                        <p>Send private photos and messages to a friend or group</p>
                        <ButtonStyle variant="contained" primary onClick={handleOpenDrawer} >
                                        Send Message
                        </ButtonStyle>
                    </div>
          </NoMsgContainer>
        ) : 
          <>
            <Top>
              <div>
                {React.Children.toArray(
                  convo.userDetails?.map((item) => {
                    return (
                      <>
                        <Avatar
                          style={{
                            width: "20px",
                            height: "20px",
                            margin: "14px 15px",
                          }}
                          alt="Remy Sharp"
                          src={item.profilePicture}
                        />
                        <h4>{item.name}</h4>
                      </>
                    );
                  })
                )}
              </div>
              <div style={{ marginRight:'7px'}}>
                <DehazeRoundedIcon onClick={handleOpenDrawer}/>
              </div>
            </Top>
            <MessageContainer>
            {/* <MessageContainer> */}
              <div>
                {React.Children.toArray(
                  convo?.specificChat?.map((item) => {
                    return (
                      <>
                        {item.sender === auth.user._id ? (
                          <div ref={scrollRef}>
                            <MessageDiv own>
                            <p>{item.text}</p>
                            <span>
                              {moment(item.createdAt)
                                .startOf('seconds')
                                .fromNow()}
                            </span>
                          </MessageDiv>
                          </div>
                        ) : (
                          <div ref={scrollRef}>
                            <MessageDiv>
                            <p>{item.text}</p>
                            <span>
                              {moment(item.createdAt)
                                .startOf('seconds')
                                .fromNow()}
                            </span>
                          </MessageDiv>
                          </div>
                          
                        )}
                      </>
                    );
                  })
                )}
              </div>
            </MessageContainer>
            <TypeBox>
              <EmojiSvg />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  MessageText(e,e.target[0].value);
                }}
              >
                <input
                  type="text"
                  placeholder="Message..."
                />
              </form>
              <svg
                aria-label="Add Photo or Video"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M38.5 0h-29C4.3 0 0 4.3 0 9.5v29C0 43.7 4.3 48 9.5 48h29c5.2 0 9.5-4.3 9.5-9.5v-29C48 4.3 43.7 0 38.5 0zM45 38.5c0 3.6-2.9 6.5-6.5 6.5h-29c-3.3 0-6-2.5-6.4-5.6l8.3-8.3c.1-.1.3-.2.4-.2.1 0 .2 0 .4.2l6.3 6.3c1.4 1.4 3.6 1.4 5 0L35.9 25c.2-.2.6-.2.8 0l8.3 8.3v5.2zm0-9.4l-6.2-6.2c-1.3-1.3-3.7-1.3-5 0L21.3 35.3c-.1.1-.3.2-.4.2-.1 0-.2 0-.4-.2L14.2 29c-1.3-1.3-3.7-1.3-5 0L3 35.2V9.5C3 5.9 5.9 3 9.5 3h29C42.1 3 45 5.9 45 9.5v19.6zM11.8 8.2c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path>
              </svg>
              <svg
                aria-label="Like"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </TypeBox>
          </>
        }
      </RightContainer>
        <ModalContainer open={open} handleClose={handleClose}>
          <ModalSmall data={user.suggestedUser} onBtnClick={newConversation}/>
        </ModalContainer>
    </Container>
  );
};

export default Message;

export const Top = styled.div`
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
    overflow-x: hidden;
    /* border: 1px solid black; */
    div{
        width: 100%;
    }
`;

export const MessageDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    /* justify-content:${props => props.own ? "flex-end" : "flex-start"}; */
    align-items:${props => props.own ? "flex-end" : "flex-start"};
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
    span {
    color: #8e8e8e;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    margin-top: -1px;
    font-size: 9px;
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

const NoMsgContainer = styled.div`
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        h4{
          font-size:22px;
          font-weight: 100;
          @media (max-width:550px) {
            font-size:17px;
          }
        }
        p{
          margin-top:-25px;
          font-size: 14px;
          color: #8e8e8e;
          @media (max-width:550px) {
            font-size:10px;
          }
          @media (max-width:377px) {
            text-align:center;
          }
        }
      }
      `;

const ButtonStyle = styled(Button)`
    width: max-content;
    height:30px;
    /* margin-top:15px !important; */
    color: white !important;
    background-color: ${props => props.primary ? "#0095f6 !important"  : "lightblue !important" };
`

const ShareIconDiv = styled.div`
   width: 100%;
  height:96px;
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    height:100%;
    width: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius:55px;
    @media (max-width:550px) {
      height: 80%;
      width: 80px;
    }
  }
    
  `;

  const DeleteButton = styled.button`
    background: transparent;
    border: none;
    height: 45px;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    right: 0;
    cursor: pointer;
    & .MuiSvgIcon-root {
      font-size: 22px;
    }
  `;

const DeleteLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  border-radius:5px;
  &:hover {
    p {
      color: #ff0317;
    }
    span {
      & .MuiSvgIcon-root {
        fill: #ff0317;
      }
    }
  }
  p {
    color: #000000;
    font-size: 14px;
    font-weight: 600;
  }
  span {
    & .MuiSvgIcon-root {
      margin-top: 3px;
      font-size: 16px;
      fill: #000000;
    }
  }
`;