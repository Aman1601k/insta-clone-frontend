import React, {useState} from 'react'
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useParams , useHistory} from 'react-router-dom'
import {ButtonStyle} from './style'
import { newPassword } from '../../actions';

const NewPassPage = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const {token} = useParams();
    const [newPass, setNewPass] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [showError , setShowError] = useState(false)
    console.log(token)
    const message = "Password doesn't match"

    const UpdatePassword = () => {
        if(newPass === confirmPassword){
            dispatch(newPassword(newPass,token)).then(() => {
                history.push('/signin')
            })
        }else{
            setShowError(true)
            return 
        }
    }

    return (
        <>
            <Container>
                <FormContainer>
                    <Image>
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.pn" alt="Insta"/>
                    </Image>
                    <Body>
                        <div>
                            <input type="password" placeholder="New Password" value={newPass} onChange={(e) => setNewPass(e.target.value)}/>
                            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                <ButtonStyle variant="contained" onClick={() => UpdatePassword()}primary >
                                    Update Password
                                </ButtonStyle> 
                            {
                                showError &&
                                <p style={{color: 'red'}}>{message}</p>
                            }
                        </div>
                    </Body>
                </FormContainer>
            </Container>
        </>
    )
}

export default NewPassPage


const Container = styled.div`
  width: 100%;
  height: 100vh ;
  background-color:#fafafa;
  display: flex;
  align-items: center;
  justify-content:center;
`;

const FormContainer = styled.div`
    width:400px;
    height:300px;
    background-color:#fff;
    border: 1px solid lightgrey;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: max-content;
  div{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    input{
      width:95%;
      height:38px;
      margin-top: 7px;
      background-color:#fafafa;
      padding-left:10px;
      outline: none;
      border-radius:10px;
      border: none;
      border: 1px solid lightgrey;
    }
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;