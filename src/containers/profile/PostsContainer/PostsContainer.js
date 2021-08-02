import React, { useState } from 'react'
import ShowFeedModal from '../../explore/ShowFeedModal';
import {PostDiv , Image} from './style'

const PostsContainer = (props) => {
    const [profileitem, setProfileItem] = useState({})
    const [open, setOpen] = useState(false);

    const handleOpen = () => {  
        setOpen(true);
    };    

    const handleClose = () => {
        setOpen(false); 
    };
    return (
        <>
            <PostDiv onClick={() => {
                handleOpen();
                setProfileItem(props.items);
            }}>
                <Image>
                    <img style={{ height:"100%" , width:"100%"  }} src={props.image} />
                </Image> 
            </PostDiv>
            <ShowFeedModal open={open} item={profileitem} handleClose={handleClose}/>
        </>
    )
}

export default PostsContainer 
 