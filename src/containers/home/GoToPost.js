import React, { useState, useEffect } from "react";
import LikeSvg from '../../components/svg/LikeSvg'
import UnLikeSvg from '../../components/svg/UnLikeSvg'
import CommentSvg from '../../components/svg/CommentSvg'
import ShareSvg from '../../components/svg/ShareSvg'
import styled from 'styled-components/macro';
import SaveSvg from '../../components/svg/SaveSvg';
import SavedSvg from '../../components/svg/SavedSvg'
import { Avatar, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import EmojiSvg from '../../components/svg/EmojiSvg'
import { savePost, unsavePost } from "../../actions";

const ShowFeedModal = () => {
  const auth = useSelector(state => state.auth);
  const post = useSelector(state => state.post);
  const savedPosts = localStorage.getItem('ids');
  const dispatch = useDispatch();

  return (
    <>
          <Container>
            <Image>
              <div>
                <img src={post.postDetails.photo}/>
              </div>
            </Image>
            <DetailsSection>
              <Header>
                <div>
                    <Avatar style={{width:'30px' , height: '30px' , margin: '14px 15px'}} alt="Remy Sharp" src={post.postDetails.postedBy?.profilePicture}/>
                    <Link style={{textDecoration:'none' , cursor: 'pointer' }} to={post.postDetails.postedBy?._id !== auth.user._id  ? '/profile/'+ post.postDetails.postedBy?._id : '/profile'}><h5>{post.postDetails.postedBy?.name}</h5></Link>
                </div>                
              </Header>
                <Body>
                  <div>
                    <Avatar style={{width:'30px' , height: '30px' , margin: '14px 15px'}} alt="Remy Sharp" src={post.postDetails.postedBy?.profilePicture}/>
                    <Link style={{textDecoration:'none' , cursor: 'pointer'}} to={post.postDetails.postedBy?._id !== auth.user._id  ? '/profile/'+ post.postDetails.postedBy?._id : '/profile'}><h5>{post.postDetails.postedBy?.name}</h5></Link>
                    <p>{post.postDetails.body}</p>
                  </div>
                  <CommentSection>
                        {React.Children.toArray(
                               post.postDetails.comments?.map(comment => {
                                   return (
                                    <div>
                                        <div>
                                        <Avatar style={{width:'30px' , height: '30px' , margin: '14px 15px'}} alt="Remy Sharp" src={comment.postedBy?.profilePicture}/>
                                        <Link style={{textDecoration:'none' , cursor: 'pointer'}} to={post.postDetails.postedBy?._id !== auth.user._id  ? '/profile/'+ post.postDetails.postedBy?._id : '/profile'}><h5>{comment.postedBy.name}</h5></Link>
                                        </div>
                                            <p>{comment.text}</p>
                                    </div>
                                )
                            })
                           )}
                  </CommentSection>
                </Body>
                <Footer>
                  <div style={{display: 'flex', width:'100%' ,justifyContent: 'space-between',marginLeft:'5px', padding: '5px 0px 0px 5px' }}>
                    <div style={{display: 'flex' , width: '90px' , justifyContent: 'space-evenly'}}>
                      {
                      post.postDetails.likes?.length === 0 ?
                        <LikeSvg/> :
                        <UnLikeSvg/> 
                      }
                      <CommentSvg/>
                      <ShareSvg/> 
                    </div>
                    <div>
                    {savedPosts?.includes(post.postDetails._id) ? (
                        <Button
                          onClick={() => {
                            console.log('item', post.postDetails._id);
                            dispatch(unsavePost(post.postDetails._id));
                          }}
                          >
                          <SavedSvg />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            dispatch(savePost(post.postDetails._id));
                            window.location.reload();
                          }}
                        >
                          <SaveSvg />
                        </Button>
                      )}
                    </div>
                  </div>
                    <p>{post.postDetails.likes?.length} likes</p>
                      {/* <div>
                          <Button><EmojiSvg/></Button>
                          <form >
                              <input type="text" placeholder="Add a comment..." />
                          </form>
                          <a><p style={{color:'#25a4f6', marginRight: '7px'}}>Post</p></a>
                      </div> */}
                </Footer>
            </DetailsSection>
          </Container>
    </>
  );
};

export default ShowFeedModal;

const Container  = styled.div`
    width: 95%;
    height: 600px;
    display:flex;
    margin-top:50px;
`;
const Image  = styled.div`
    /* height: 100%; */
    width: 70%;
    border-right: 1px solid lightgrey;
    div{
      width: 100%;
      height: 100%;
      img{
      object-fit: cover;
        width:100%;
        height:100%;
    }
    }
    
`;

const DetailsSection = styled.div`
  width:30%;
  background-color:white;
`

const Header = styled.div`
  height:max-content;
  display: flex;
  border-bottom: 1px solid lightgrey;
  div{
    height: 19%;
    display: flex;
    align-items: center;
  }
  `

const Body = styled.div`
  height: max-content;
  overflow-y: scroll;
  min-height:450px;
  /* display: flex; */
  /* align-items: center; */
  /* background-color:red; */
  div{
      height: max-content;
      display: flex;
      align-items: center;
      p{
        font-size: small;
        margin: 0px 10px;
      }
    }
`
const CommentSection = styled.div`
    display:flex;
    flex-direction: column;
    max-height:140px;
  div{
    display: flex ;
    justify-content:flex-start;
    align-self: normal;
    div{

    }
    p{
      font-size:12px;
      font-weight:100; 
      /* margin-left:10px; */
    }
  }
`

const Footer = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;
  p{
    font-size:14px;
    margin-left: 10px;
  }
  div{
      display: flex;
      justify-content:space-between;
      align-items: center;
      form{
        input{
            height:100%;
            /* margin-left:10px; */
            border: none;
            & :focus{
                outline: none;
            }
      }
  }
}
`