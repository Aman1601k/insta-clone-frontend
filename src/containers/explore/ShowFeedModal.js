import React, { useState, useEffect } from "react";
import FeedModal from "./FeedModal";
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

const ShowFeedModal = (props) => {
  const auth = useSelector(state => state.auth)
  const savedPosts = localStorage.getItem('ids');
  const dispatch = useDispatch();

  return (
    <>
      <FeedModal open={props.open} handleClose={props.handleClose}>
          <Container>
            <Image>
              <div>
                <img src={props.item?.photo}/>
              </div>
            </Image>
            <DetailsSection>
              <Header>
                <div>
                    <Avatar style={{width:'30px' , height: '30px' , margin: '14px 15px'}} alt="Remy Sharp" src={props.item?.postedBy?.profilePicture}/>
                    <Link style={{textDecoration:'none' , cursor: 'pointer' }} to={props.item?.postedBy?._id !== auth.user._id  ? '/profile/'+ props.item.postedBy?._id : '/profile'}><h5>{props.item.postedBy?.name}</h5></Link>
                </div>                
              </Header>
                <Body>
                  <div>
                    <Avatar style={{width:'30px' , height: '30px' , margin: '14px 15px'}} alt="Remy Sharp" src={props.item.postedBy?.profilePicture}/>
                    <Link style={{textDecoration:'none' , cursor: 'pointer'}} to={props.item.postedBy?._id !== auth.user._id  ? '/profile/'+ props.item.postedBy?._id : '/profile'}><h5>{props.item.postedBy?.name}</h5></Link>
                    <p>{props.item.body}</p>
                  </div>
                  <CommentSection>
                        {React.Children.toArray(
                               props.item.comments?.map(comment => {
                                   return (
                                    <div>
                                        <div>
                                        <Avatar style={{width:'30px' , height: '30px' , margin: '14px 15px'}} alt="Remy Sharp" src={comment.postedBy?.profilePicture}/>
                                        <Link style={{textDecoration:'none' , cursor: 'pointer'}} to={props.item.postedBy?._id !== auth.user._id  ? '/profile/'+ props.item.postedBy?._id : '/profile'}><h5>{comment.postedBy.name}</h5></Link>
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
                      props.item?.likes?.length === 0 ?
                        <LikeSvg/> :
                        <UnLikeSvg/> 
                      }
                      <CommentSvg/>
                      <ShareSvg/> 
                    </div>
                    <div>
                    {savedPosts?.includes(props.item._id) ? (
                        <Button
                          onClick={() => {
                            console.log('item', props.item._id);
                            dispatch(unsavePost(props.item._id));
                          }}
                          >
                          <SavedSvg />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            dispatch(savePost(props.item._id));
                            window.location.reload();
                          }}
                        >
                          <SaveSvg />
                        </Button>
                      )}
                    </div>
                  </div>
                    <p>{props.item.likes?.length} likes</p>
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
      </FeedModal>
    </>
  );
};

export default ShowFeedModal;

const Container  = styled.div`
    width: 65%;
    height: 600px;
    display:flex;
    /* height:max-content; */
    /* border: 1px solid red; */
    /* background-color: red; */
    @media (max-width:900px){
      width: 95%;
      justify-content:center;
    }
    @media (max-width:650px){
      width: 100%;
      height:450px;
    }
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
    @media (max-width:650px){
      width: 60%;
    }
    `;

const DetailsSection = styled.div`
  width:30%;
  background-color:white;
  @media (max-width:650px){
    width: 40%;
  }
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
  @media (max-width:650px){
    min-height:300px;
  }
  div{
      height: max-content;
      display: flex;
      align-items: center;
      @media (max-width:650px){
        h5{
        font-size:10px;
      }
    }
      p{
        font-size: small;
        margin: 0px 10px;
        @media (max-width:650px){
        font-size:10px ;
    }
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
      @media (max-width:650px){
        h5{
        font-size:10px ;
      }
      }
      
    }
    p{
      font-size:12px;
      font-weight:100; 
      @media (max-width:650px){
        font-size:10px ;
      }
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