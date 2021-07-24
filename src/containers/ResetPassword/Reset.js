import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { resetPassword } from '../../actions';
import { Container ,FormContainer ,LockIconDiv, LockOutlinedIconStyle,Body , ButtonStyle , Footer} from './style'

const Reset = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [email, setEmail] = useState()

    const ResetPassword = (email) => {
        dispatch(resetPassword(email));
    }

    return (
        <>
            <Container>
                <FormContainer>
                    <LockIconDiv>
                        <div>
                            <LockOutlinedIconStyle/>
                        </div>
                    </LockIconDiv>
                    <Body>
                        <div>
                            <h5>Trouble Logging In?</h5>
                            <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                            <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {!auth.resetLoading ?
                                <ButtonStyle variant="contained" onClick={() => ResetPassword(email)} primary >
                                    Send Login Link
                                </ButtonStyle> :
                                <ButtonStyle variant="contained">
                                    Send Login Link
                                </ButtonStyle>
                            }
                            {auth.resetLoading &&
                                <h4 style={{margin:"10px 0px -10px 0px" , color:"green"}}>{auth.message}</h4>
                            }
                        </div>
                        <p>Or</p>
                        <Link style={{textDecoration:'none' , color:'black'}} to="/signup">Create new account</Link>
                    </Body>
                        <Footer>
                            <Link style={{textDecoration:'none' , color:'black'}} to="/signin">Back to Login</Link>
                        </Footer>
                </FormContainer>
            </Container>
        </>
    )
}

export default Reset
