import styled from 'styled-components/macro';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  height: 100vh ;
  background-color:#fafafa;
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const FormContainer = styled.div`
    width:400px;
    height:500px;
    background-color:#fff;
    display: flex;
    position: relative;
    align-items: center;
    justify-content:center;
    border: 1px solid lightgrey;
`;

export const LockIconDiv = styled.div`
  width: 100%;
  height:96px;
  position:absolute;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
  div{
    height:100%;
    width: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius:55px;
  }
`;

export const LockOutlinedIconStyle  = styled(LockOutlinedIcon)`
    &.MuiSvgIcon-root{
        width: 50px!important;
        height: 50px !important;
    }
`;

export const Body = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
  flex-direction: column;
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
    margin-top: -15px;
    
    h5{
      font-size: 16px;
      font-weight:500;
    }
    p{
      font-size:14px;
      color:#8e8e8e;
      margin-top:-15px;
      text-align:center;
      /* width: 250px; */
    }
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

export const ButtonStyle = styled(Button)`
    width: 100%;
    height:30px;
    margin-top:15px !important;
    color: white !important;
    background-color: ${props => props.primary ? "#0095f6 !important"  : "lightblue !important" }
`

export const Footer = styled.div`
  width: 100%;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color:#fafafa;
  border-top: 1px solid lightgrey;
`;