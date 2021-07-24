import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'


const SuggestedUser = (props) => {
    const auth = useSelector((state) => state.auth);

    return (
        <div style={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center' , margin: '-15px 0'}}>
            <div>
                <Avatar style={{width:'25px' , height: '25px' , margin: '14px 20px' , border: '1px solid lightgrey'}} alt="Remy Sharp" src={props.profilePicture}/>
                <h5>{props.name}</h5>
            </div>
            <Link style={{textDecoration:'none'}} to={props._id !== auth.user._id  ? '/profile/'+ props._id : '/profile'}><p style={{color:'#25a4f6', marginRight: '7px'}}>View</p></Link>
        </div>
    )
}

export default SuggestedUser
