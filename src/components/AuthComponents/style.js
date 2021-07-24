import styled, { css } from 'styled-components/macro';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#fafafa;
`
export const Body = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    /* flex-direction:row; */
    margin-left: 10vw;

`
export const Image = styled.div`
    width: 454px;
    height: 620px;
    margin-left: 75px;
    margin-top: 20px;
    position:relative;
    /* background-color:red; */
`

export const CarouselContainer = styled.div`
    width:240px;
    height: 427px;
    margin: 99px 0 0 151px;
    top: 0;
    position:absolute;
`

export const CarouselDiv = styled.div`
    width:240px;
    height: 427px;
    z-index:5;
    /* background-color:green; */
`

export const FormContainer = styled.div`
    width: 350px;
    height: 606px;
    z-index:6;
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`
export const Form1 = styled.div`
    width: 350px;
    height: 377.7px;
    margin: 10px 0;
    border: 1px solid lightgrey;
    background-color:#fff;
`

export const LoginForm = styled.div`
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
`

export const TextFieldStyle = styled(TextField)`
    & .MuiOutlinedInput-root{
        margin: 6px 46px;
        width: 258px;
        height:36px;
    }
    & .MuiInputLabel-formControl {
        top: -4px;
        left: 41px;
        font-size: 15px;
    }
    & .MuiInputLabel-outlined.MuiInputLabel-shrink {
        transform: translate(20px, 2px) scale(0.75);
    }
`

export const ButtonStyle = styled(Button)`
    margin-left:46px !important;
    width: 258px;
    height:30px;
    background-color: ${props => props.primary ? "#0095f6 !important"  : "lightblue !important" }
`

export const Form2 = styled.div`
    width: 350px;
    height: 62.6px;
    margin: 10px 0;
    display: flex;
    justify-content:center;
    align-items: center;
    border: 1px solid lightgrey;
    background-color:#fff;
`
export const Form3 = styled.div`
    width: 350px;
    height: 30px;
    margin: 10px 0;
    display: flex;
    justify-content:center;
    align-items: center;
    /* background-color:black; */
`
export const Form4 = styled.div`
    width: 350px;
    height: 35px;
    margin: 10px 0;
    display: flex;
    justify-content:center;
    align-items: center;
    /* background-color:black; */
`

export const Footer = styled.div`
    height: 10%;
    /* background-color: blue; */
`