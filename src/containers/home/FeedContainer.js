import React, { useRef ,useLayoutEffect, useState } from 'react'
import styled, { css } from 'styled-components/macro';
import {FeedContainer , NameSection , ImageSection , DetailsSection ,ViewComments, CommentDiv , LikeDiv ,ShowComment } from './style'
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import LikeSvg from '../../components/svg/LikeSvg'
import UnLikeSvg from '../../components/svg/UnLikeSvg'
import CommentSvg from '../../components/svg/CommentSvg'
import ShareSvg from '../../components/svg/ShareSvg'
import SaveSvg from '../../components/svg/SaveSvg'
import EmojiSvg from '../../components/svg/EmojiSvg'
import SavedSvg from '../../components/svg/SavedSvg'
import { useDispatch, useSelector } from "react-redux";
import {likepost , unlikepost , comment , deletepost , deletecomment, unsavePost, savePost, setPostDetails} from '../../actions';
import {Loader} from '../Login/style'
import {Link} from 'react-router-dom'
import useStayScrolled from 'react-stay-scrolled';
import ShowFeedModal from '../explore/ShowFeedModal';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteModal from './DeleteModal';
import ModalContainer from '../ModalSmall/ModalContainer';

const FeedsContainer = (props) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post)
    const auth = useSelector(state => state.auth)
    const scrollRef = useRef();
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const { scrollBottom } = useStayScrolled(scrollRef);
    const [item, setItem] = useState({});

    const Likepost = (id) => {
        dispatch(likepost(id))
    }

    const UnLikepost = (id) => {
        dispatch(unlikepost(id))
    } 

    useLayoutEffect(() => {
        scrollBottom();
    }, [props.comments.length])
    
    const Comment = (e,text,id) => {
        e.target.reset();
        dispatch(comment(text,id))
    }

    const DeletePost = (id) => {
        dispatch(deletepost(id))
    }
    
    const DeleteComment = (id,commentId) => {
        dispatch(deletecomment(id ,commentId))
    }

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const openDeleteModal = () => {
        setOpenDelete(true);
    };

    const closeDeleteModal = () => {
    setOpenDelete(false);
    };
    
    const savedPosts = localStorage.getItem('ids');

    return (
        <>
        <ModalContainer open={openDelete} handleClose={closeDeleteModal}>
            <DeleteModal close={setOpenDelete} data={item} />
        </ModalContainer>
        <FeedContainer  style={{backgroundColor: '#fff'}}>
                    <NameSection>
                        <div>
                            <Avatar style={{width:'50px' , height: '50px' , margin: '14px 15px'}} alt="Remy Sharp" src={props.profilePicture}/>
                            <Link style={{textDecoration:'none'}} to={props.postedBy_id !== auth.user._id  ? '/profile/'+ props.postedBy_id : '/profile'}><h5>{props.name}</h5></Link>
                        </div>
                        {
                            <Button 
                                onClick={() => {
                                    openDeleteModal();
                                    setItem(props.item);
                                    dispatch(setPostDetails(props.item));
                                }}
                            >
                                <MoreHorizIcon/>
                            </Button>
                        }
                    </NameSection>
                        <ImageSection>
                            <img style={{height:"auto" , width:"100%" }} src={props.image} />
                        </ImageSection>
                    <DetailsSection>
                        <LikeDiv>
                            <div>
                                {
                                    props.likesUser.includes(auth.user._id) 
                                    ?
                                    <Button onClick={() => UnLikepost(props._id)}><UnLikeSvg/></Button>
                                    :
                                    <Button onClick={() => Likepost(props._id)}><LikeSvg/></Button>

                                }
                               <Button><CommentSvg/></Button>
                               <Button><ShareSvg/></Button> 
                            </div>
                                {savedPosts?.includes(props._id) ? (
                                    <Button
                                      onClick={() => {
                                        console.log('item', props._id);
                                        dispatch(unsavePost(props._id));
                                      }}
                                      >
                                      <SavedSvg style={{marginRight: '10px'}}/>
                                    </Button>
                                  ) : (
                                    <Button
                                      onClick={() => {
                                        dispatch(savePost(props._id));
                                      }}
                                    >
                                      <SaveSvg style={{marginRight: '10px'}}/>
                                    </Button>
                                  )}
                        </LikeDiv>
                        <p style={{padding: '5px' , margin:'-1px 12px'}}>{props.likesLength} likes</p>
                        <div style={{display: 'flex' , alignItems: 'center' , margin:'-25px 0 -20px 15px' }}>
                            <h5 style={{fontSize:'17px'}}>{props.name}</h5>
                            <p style={{fontSize:'17px' , marginLeft:'5px'}}>{props.caption}</p>
                        </div>
                            <ViewComments
                                 onClick={() => {
                                    handleOpen();
                                  }}
                            >
                                View all {props.commentsLength} comments
                            </ViewComments>
                        <ShowComment ref={scrollRef}>
                           {React.Children.toArray(
                               props.comments?.map(comment => {
                                   return (
                                    <div style={{display: 'flex' , alignItems: 'center' , justifyContent: 'space-between', margin:'-10px 15px -15px 15px' }}>
                                        <div style={{display: 'flex' , alignItems: 'center'}}>
                                            <h5>{comment?.postedBy?.name}</h5>
                                            <p style={{fontSize:'12px'  , fontWeight:'100' , marginLeft:'10px'}}>{comment?.text}</p>
                                        </div>
                                        {comment?.postedBy?._id === auth?.user?._id && 
                                        <Button onClick={() => DeleteComment(props._id ,comment._id) }><DeleteForeverRoundedIcon/></Button>
                                        }
                                    </div>
                                )
                            })
                           )} 
                        </ShowComment>
                        <div style={{display: 'flex' , alignItems: 'flex-start', margin: '-10px 0px 0px 15px' , flexDirection:"column"}}>
                            <p style={{fontSize:'12px' , color:'grey' }}>{props.createdAt.split("T")[0]}</p>
                            {/* <p style={{fontSize:'12px' , color:'grey' }}>Time : {props.createdAt.split("T")[1].split('.')[0]}</p> */}
                        </div>
                        <CommentDiv>
                            <div>
                                <Button><EmojiSvg/></Button>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    Comment(e , e.target[0].value , props._id)
                                }}>
                                    <input type="text" placeholder="Add a comment..." />
                                </form>
                            </div>
                        </CommentDiv>
                    </DetailsSection>
        </FeedContainer>
        <br/>
        <ShowFeedModal open={open}  handleClose={handleClose} item={props.item}></ShowFeedModal>
        </>
    )
}

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

export default FeedsContainer
