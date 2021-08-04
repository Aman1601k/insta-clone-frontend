import React,{useEffect, useState} from "react";
import {FormContainer,Form1,Form2,Form3,Form4,LoginForm,TextFieldStyle,ButtonStyle,} from "../../components/AuthComponents/style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link , useHistory } from "react-router-dom";
import AuthComponents from "../../components/AuthComponents/AuthComponents";
import Info from "../../components/Info/Info";
import {Error} from '../Signup/style'
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions";
import {Loader} from './style'

const LoginPage = () => {
  const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')
    const [status, setStatus] = useState('')
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const PostData = () =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            setError("Invalid Email")
            return
        }
        const user = {
          email,
          password,
        };
        dispatch(login(user));
    }
    if (auth?.authenticate) {
      return <Redirect to={`/`} />;
    }

  return (
    <AuthComponents>
      <Info/>
      <FormContainer>
        <Form1>
          <img
            style={{ marginLeft: "65px", marginTop: "25px" }}
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          />
          <LoginForm>
            <form>
              {!auth?.authenticating && (auth?.error ? <Error><p>{auth?.error}</p></Error> : error && <Error><p>{error}</p></Error> )}
              {auth?.authenticating && <Loader><p/></Loader>}
              <TextFieldStyle
                id="outlined-basic"
                label=" Username or Email"
                variant="outlined"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextFieldStyle
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              {!auth?.authenticating ?
              <ButtonStyle variant="contained" color="primary" onClick={() => PostData()} primary>
                Log In
              </ButtonStyle> :
              <ButtonStyle variant="contained" color="primary" onClick={() => PostData()}>
              Log In
              </ButtonStyle>
              }
            </form>
            <p
              style={{
                marginLeft: "8rem",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              <Link style={{textDecoration:'none' , color:'black'}} to="/reset">Forget Password?</Link>
            </p>
          </LoginForm>
        </Form1>
        <Form2>
          <h6 style={{ fontWeight: 400 }}> 
            Don't have an account?&nbsp;
            <Link
              to="/signup"
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </h6>
        </Form2>
        <Form3>
          <h6 style={{ fontWeight: 400 }}>Get the app</h6>
        </Form3>
        <Form4>
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            style={{ width: "136px", height: "100%", marginRight: "6px" }}
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            style={{ width: "136px", height: "100%" }}
          />
        </Form4>
      </FormContainer>
    </AuthComponents>
  );
};

export default LoginPage;
