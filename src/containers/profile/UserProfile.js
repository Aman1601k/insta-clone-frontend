import React, { useEffect } from 'react'
import styled from 'styled-components/macro';
import {Header ,ImageSection , DetailsSection , AvatarSection , NameSection ,Button, FollowerSection , BioSection ,Body ,AnchorTag} from './style'
import Avatar from '@material-ui/core/Avatar';
import PostsContainer from './PostsContainer/PostsContainer'
import {useDispatch, useSelector} from 'react-redux'
import { userProfile , followUser , unfollowUser } from '../../actions';
import {useParams} from 'react-router-dom'
import {Loader} from '../Login/style'
const x = localStorage.getItem('user');
const y = JSON.parse(x);

const UserProfile = () => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const {userid} = useParams()
    console.log(userid)

    useEffect(() => {
        dispatch(userProfile(userid));
    }, [userid])
    
    const FollowUser = () => {
        dispatch(followUser(userid))
    }
    const UnFollowUser = () => {
        dispatch(unfollowUser(userid))
    }
    
    return (
        <>
        { user.loading ?
        <div style={{display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}>
            <Loader />
        </div>
        :
        <>
        <Header>
            <ImageSection>
                <AvatarSection>
                    <Avatar style={{width:'100%' , height: '100%'}} alt="Remy Sharp" src={user.userprofile?.profilePicture}/>
                </AvatarSection>
            </ImageSection>
            <DetailsSection>
                <NameSection>
                    <p style={{fontSize:'28px' ,marginTop: '1px'}}>{user.userprofile?.name}</p>
                    
                    {   
                        !user.userprofile?.followers?.includes(auth.user._id) ? 
                        <FollowButton onClick={() => FollowUser()}>
                        Follow
                        </FollowButton>
                        : 
                        <UnFollowButton onClick={() => UnFollowUser()}>
                        Unfollow
                        </UnFollowButton>
                    }
                    
                </NameSection>
                <FollowerSection>
                    <AnchorTag><span><strong>{user.userPost.length}</strong></span>  posts</AnchorTag>
                    <AnchorTag><span><strong>{user.userprofile?.followers.length}</strong></span>  followers</AnchorTag>
                    <AnchorTag><span><strong>{user.userprofile?.following.length}</strong></span>  following</AnchorTag>
                </FollowerSection>
                <BioSection>
                    <strong>{user.userprofile?.name}</strong>
                    <p>
                        I D G A F
                    </p>
                </BioSection>

            </DetailsSection>
        </Header>
        <Body>
            {React.Children.toArray(
                    user.userPost?.map((item) => {
                        return(
                    <PostsContainer image = {item.photo} />
                    )
                })
            )}
        </Body>
        </>
        }
        </>
    )
}

const FollowButton = styled.button`
    padding: 3px ;
    height: 1.7rem;
    width:5rem;
    margin: 8px 1rem;
    border: 1px solid #0095f6; 
    background-color:#0095f6;
    color: #fff;
    border-radius: 5px;
`
const UnFollowButton = styled.button`
    padding: 3px ;
    height: 1.7rem;
    width:5rem;
    margin: 8px 1rem;
    border: 1px solid #000; 
    background-color:#fff;
    color: #000;
    border-radius: 5px;
`

export default UserProfile
