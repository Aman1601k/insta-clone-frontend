import React, {useState} from 'react'
import {FormContainer, Form1, Form2, Form3, Form4, LoginForm, TextFieldStyle, ButtonStyle} from '../../components/AuthComponents/style'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link , useHistory} from 'react-router-dom'
import AuthComponents from "../../components/AuthComponents/AuthComponents";
import Info from "../../components/Info/Info";
import {Error , UploadButton} from './style';
import { signup } from '../../actions';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {Loader} from '../Login/style'

const SignUpPage = () => {
    const history = useHistory()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [picture, setPicture] = useState('')
    const [imageurl, setImageUrl] = useState('')
    const [error, setError] = useState('')
    const [status, setStatus] = useState('')
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const PostData = () =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            setError("Invalid Email")
            return
        }
        const user = {
            name,
            email,
            password,
          };
            dispatch(signup(user));
    }
    if(user.signUp) {
        return <Redirect to={`/signin`} />;
    }
    return (
        <AuthComponents>
            <Info/>
            <FormContainer>
            <Form1 style={{height:"550px"}}>
                <img style={{marginLeft: '65px' ,marginTop: '25px'}} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
                <LoginForm>
                    <form>
                    {user.error ? <Error><p>{user.error}</p></Error> : error && <Error><p>{error}</p></Error>}
                    <TextFieldStyle value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" type="email" label="Email" variant="outlined" />
                    <TextFieldStyle value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" type="text" label="Full Name" variant="outlined" />
                    <TextFieldStyle value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="password" label="Password" variant="outlined" />
                    {/* <UploadButton
                        variant="contained"
                        component="label"
                        color="secondary"
                        >
                        <input
                            type="file"
                            onChange={(e) => setPicture(e.target.files[0])}
                        />
                    </UploadButton> */}

                    { !user.loading ? 
                        <ButtonStyle onClick={ PostData} variant="contained" color="primary" primary>
                            Sign Up
                        </ButtonStyle>
                    :
                        <ButtonStyle variant="contained" color="primary" primary>
                            <Loader style={{marginTop: '8px'}}><p/></Loader>
                        </ButtonStyle>
                    }
                    </form>
                    <p style={{ color: "grey", fontSize:'13px' , textAlign:'center'}}>By signing up, you agree to our Terms , Data Policy and Cookies Policy . </p>
                </LoginForm>
            </Form1>
            <Form2>
                <h6 style={{fontWeight:400}}>Have an account?&nbsp;<Link to="/signin" style={{cursor:'pointer' , color:'blue' , textDecoration:'none'}}>Log In</Link></h6>
            </Form2>
            <Form3>
                <h6 style={{fontWeight:400}} >Get the app</h6>
            </Form3>
            <Form4>
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" style={{width:"136px" , height:"100%" ,marginRight:"6px"}}/> 
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" style={{width:"136px" , height:"100%"}}/>
            </Form4>
        </FormContainer>
        </AuthComponents>
        
    )
}

export default SignUpPage
