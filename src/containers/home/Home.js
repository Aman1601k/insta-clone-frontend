import React,{useEffect, useState} from 'react'
import {Container ,LeftContainer , StoryContainer , RightContainer , Logout , Suggestion} from './style' 
import Avatar from '@material-ui/core/Avatar';
import FeedsContainer from './FeedContainer';
import SuggestedUser from './SuggestedUser';
import CreatePost from './CreatePost'
import { Link } from 'react-router-dom';
import { signout , getsubpost, suggestedUsers } from '../../actions';
import {useDispatch, useSelector} from 'react-redux'


const Home = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getsubpost());
        dispatch(suggestedUsers());
    }, [auth.user])
    
    const logout =() => {
        dispatch(signout());
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <LeftContainer>
                {post.posts.length === 0 ? 
                <StoryContainer>
                    <h2 style={{fontSize:'18px' , color:'grey' , marginLeft: '22%'}}>Follow someone to see posts....</h2>
                    <Link to="/explore" style={{textDecoration:'none' , margin:'15px'}}>Explore</Link>
                </StoryContainer>
                :
                <StoryContainer style={{backgroundColor: '#fff'}}>
                    {
                        React.Children.toArray(
                            post.posts?.map((item) => {
                                return(
                            <Avatar style={{width:'66px' , height: '66px' , margin: '14px 15px'}} alt="Remy Sharp" src={auth.user.profilePicture}/>
                            )
                        })
                        )}
                </StoryContainer>
                }
                <br/>
                {React.Children.toArray(
                    post.posts?.map((item) => {
                        return(
                            <FeedsContainer 
                                item={item}
                                _id = {item._id}
                                postedBy_id = {item.postedBy._id}
                                likesLength={item.likes.length}
                                likesUser={item.likes}
                                commentsLength={item.comments.length}
                                comments={item.comments}
                                name={item.postedBy?.name}
                                profilePicture={item.postedBy?.profilePicture}
                                caption={item.body}
                                image={item.photo}
                                createdAt={item.createdAt}
                                avatar={auth.user.profilePicture}
                            />
                        )
                    })
                )}

            </LeftContainer>
            <RightContainer>
                <Logout>
                    <div>
                        <div>
                            <Avatar style={{width:'50px' , height: '50px' , margin: '14px 15px' , border: '1px solid lightgrey'}} alt="Remy Sharp" src={auth.user.profilePicture}/> 
                            <div>
                                <h5>{auth.user.name}</h5>
                                <p style={{fontSize:'14px' , color:'grey'}}>{auth.user.name}</p>
                            </div>
                        </div>
                        <Link onClick={logout} style={{ textDecoration:'none' }}><p style={{color:'#25a4f6', marginRight: '7px'}}>Sign out</p></Link>
                    </div>
                </Logout>
                <Suggestion>
                    <div>
                        <p style={{fontSize:'12px' , color:'grey' , marginLeft: '15px'}}>Suggestions For You</p>
                        <Link style={{ textDecoration:'none' }}><p style={{ fontSize:'12px' ,marginRight: '7px' , cursor:'pointer'}}>See All</p></Link>
                    </div>
                    {React.Children.toArray(
                        user.suggestedUser?.slice(-5).map((item) => {
                            if(item._id === auth.user._id){
                                return
                            }
                            return(
                                <SuggestedUser 
                                    _id = {item._id}
                                    name={item.name}
                                    profilePicture={item.profilePicture}
                                />
                            )
                        })
                    )}
                </Suggestion>
                <br/>
                <CreatePost/>
            </RightContainer>
        </Container>
    )
}

export default Home
