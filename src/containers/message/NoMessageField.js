import React from 'react'
import styled from 'styled-components/macro';
import ShareSvg from '../../components/svg/ShareSvg';
import { Button } from '@material-ui/core';

const NoMessageField = () => {
    return (
        <>
        <Container>
            <ShareIconDiv>
                <div>
                    <svg aria-label="Share Post" class="_8-yf5 " fill="#262626" height="45" viewBox="0 0 48 48" width="45"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                </div>
            </ShareIconDiv>
                    <div>
                        <h4>Your Messages</h4>
                        <p>Send private photos and messages to a friend or group</p>
                        <ButtonStyle variant="contained" primary >
                                        Send Message
                        </ButtonStyle>
                    </div>
        </Container>
        </>
    )
}

export default NoMessageField

const Container = styled.div`
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        h4{
          font-size:22px;
          font-weight: 100;
        }
        p{
            margin-top:-25px;
            font-size: 14px;
            color: #8e8e8e;
        }
  }
`;

const ButtonStyle = styled(Button)`
    width: max-content;
    height:30px;
    /* margin-top:15px !important; */
    color: white !important;
    background-color: ${props => props.primary ? "#0095f6 !important"  : "lightblue !important" };
`


const ShareIconDiv = styled.div`
   width: 100%;
  height:96px;
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