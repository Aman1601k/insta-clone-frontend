import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 80%;
  height: 89vh;
  /* min-width:840px; */
  margin: 20px 63px;
  /* z-index:5; */
  display: flex;
  background-color:#fff;
`;

export const LeftContainer = styled.div`
  width: 40%;
  height:100%;
  border: 1px solid lightgrey;
  `;

export const Header = styled.div`
  width:100%;
  height: 50px;
  position:relative;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Inbox = styled.div`
  width: 100%;
  height:90%;
  overflow-y:scroll ;
`;

export const PersonChatBox = styled.div`
  /* width:100%; */
  height: 56px;
  margin: 10px;
  display: flex;
  position: relative;
  align-items: center;
  /* border: 1px solid lightgrey; */

  div{
    p{
        margin: -2px 0;
        font-size:14px;
    }
  }

  span{
    width: 8px;
    height: 8px;
    background-color: #0095f6;
    border-radius:50%;
    position: absolute;
    right:0;
  }

  &:hover{
      background-color:#fafafa;
  }
`;

export const RightContainer = styled.div`
  width: 60%;
  height:100%;
  border: 1px solid lightgrey;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;