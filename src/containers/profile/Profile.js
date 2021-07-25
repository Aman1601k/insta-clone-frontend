import React, { useEffect ,useState} from 'react'
import styled from 'styled-components/macro';
import {Header ,ImageSection , DetailsSection , AvatarSection , NameSection ,Button, FollowerSection , BioSection ,Body ,AnchorTag} from './style'
import Avatar from '@material-ui/core/Avatar';
import CustomModal from "../home/PostModal";
import PostsContainer from './PostsContainer/PostsContainer'
import {useDispatch, useSelector} from 'react-redux'
import { mypost, updateBio, updateProfilePicture } from '../../actions';
import ModalContainer from '../ModalSmall/ModalContainer';
import ChatModal from '../ModalSmall/ChatModal';

const Profile = () => {
    const [picture, setPicture] = useState('')
    const [bio, setBio] = useState('')
    const [imageurl, setImageUrl] = useState('')
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const [open, setOpen] = useState(false);
    const [followerModal, setFollowerModal] = useState(false);
    const [followingModal, setFollowingModal] = useState(false);

    const profileUpdate = () => {
        const data = new FormData()
        data.append("file" , picture)
        data.append("upload_preset" , "Insta-Profile")
        data.append("cloud_name", "amancloud24234")
        fetch("https://api.cloudinary.com/v1_1/amancloud24234/image/upload",{
            method: "post",
            body: data
        }).then(res => res.json())
        .then(data => {
            if(data){
                setImageUrl(data.url)
            }
        })
        .catch(err =>{
            console.log(err)
    })
    }

    const bioUpdate = (bio) => {
        dispatch(updateBio(bio))
    }

    useEffect(() => {
        dispatch(mypost());
    },[post.mypost.length])

    useEffect(() => {
        if(imageurl){
            dispatch(updateProfilePicture(imageurl));
        }
    }, [imageurl])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const openFollower = () => {
        setFollowerModal(true);
      };
    
    const closeFollower = () => {
        setFollowerModal(false);
    };

    const openFollowing = () => {
        setFollowingModal(true);
        // console.log("Open")
    };

    const closeFollowing = () => {
        setFollowingModal(false);
    };

    return (
        <>
        <Header>
            <ImageSection>
                <AvatarSection>
                    <Avatar style={{width:'100%' , height: '100%'}} alt="Remy Sharp" src={auth.user.profilePicture}/>
                </AvatarSection>
            </ImageSection>
            <DetailsSection>
                <NameSection>
                    <p style={{fontSize:'28px' ,marginTop: '1px'}}>{auth.user.name}</p>
                    <Button onClick={handleOpen}>Edit profile</Button>
                </NameSection>
                <FollowerSection>
                    <AnchorTag><span><strong>{post.mypost.length}</strong></span>  posts</AnchorTag>
                    <AnchorTag onClick={openFollower}><span><strong>{auth.user?.followers?.length}</strong></span>  followers</AnchorTag>
                    <AnchorTag onClick={openFollowing}><span><strong>{auth.user?.following?.length}</strong></span>  following</AnchorTag>
                </FollowerSection>
                <BioSection>
                    <strong>{auth.user.name}</strong>
                    <p>
                        {auth.user.bio && auth.user.bio}
                    </p>
                </BioSection>
            </DetailsSection>
        </Header>
        {/* <CenteredTabs/> */}
        <Body>
            {React.Children.toArray(
                    post.mypost?.map((item) => {
                        return(
                    <PostsContainer items={item} image = {item.photo} />
                    )
                })
            )}
        </Body>
        <CustomModal  open={open} handleClose={handleClose}>
            <Container>
                <h4>Edit Profile</h4>
                <div>
                    <h5>Update profile Picture</h5>
                    <input type="file" onChange={(e) => setPicture(e.target.files[0])}/>
                    <UpdateButton onClick={() => profileUpdate()}>Done</UpdateButton>
                </div>  
                <div>
                    <h5>Update Bio</h5>
                    <input style={{height:'5vh'}} placeholder={auth.user.bio} type="text" onChange={(e) => setBio(e.target.value)}  />
                    <UpdateButton onClick={() => bioUpdate(bio)}>Done</UpdateButton>
                </div>  
            </Container>
        </CustomModal>
        {auth?.user?.followers?.length > 0 && (
            <ModalContainer open={followerModal} handleClose={closeFollower}>
                <ChatModal details={auth.user.followers} follower={true} />
            </ModalContainer>
        )}

        {auth?.user?.following?.length > 0 && (
            <ModalContainer open={followingModal} handleClose={closeFollowing}>
                <ChatModal details={auth.user.following} following={true} />
            </ModalContainer>
        )}
        </>
    )
}

export default Profile

const Container  = styled.div`
  width: 30vw; 
  height:max-content;
  background-color:#fff;
  border:1px solid lightgrey;
  h4{
      display: flex;
      justify-content: center;
      font-weight: 500;
      text-decoration: underline;
    }
    div{
        display: flex;
        border: 2px dashed lightgrey;
        align-items: center;
        margin:15px;
        justify-content:space-evenly;
        h5{
            font-weight: 300;
        }
        input{
            width:15vw;
            text-decoration: none;
        }
  }
`;

const UpdateButton = styled.button`
    background-color: #74E8F4 ;
    color: #fff;
    border: none;
`