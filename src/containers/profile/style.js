import styled from 'styled-components/macro';

export const Header = styled.div`
    height: 21vh;
    padding: 2rem;
    display: flex;
    margin-bottom: 3rem;
    @media(max-width:1000px){
      width: 100%;
    }    
`

export const Body = styled.div`
    width:100%;
    height:auto;
    display: flex; 
    align-items: center;
    margin-top: 15px;
    flex-wrap: wrap;
    justify-content:flex-start;
    max-height:100%;

    @media (max-width: 1430px){
        width: 967px;
        margin-left: -10px;
    }
    @media (max-width: 1310px){
        width: 967px;
        margin-left: -50px;
    }
    @media (max-width: 1290px){
        width: 967px;
        margin-left: -60px;
    }
    @media (max-width: 1220px){
        width: 967px;
        margin-left: -70px;
    }
    @media (max-width: 1170px){
        width: 967px;
        margin-left: -80px;
    }
    @media (max-width: 1110px){
        width: 967px;
        margin-left: -105px;
    }
    @media (max-width: 1050px){
        width: 967px;
        margin-left: -136px;
    }
    @media (max-width: 1024px){
        width: 100%;
        margin-left: 0;
        justify-content: center;
    }
    `

export const ImageSection = styled.div`
    display: flex;
    justify-content:center;
    width:30%;
    `
export const AvatarSection = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    @media (max-width: 800px){
      height: 130px;
      width: 130px;
    }
    @media (max-width: 600px){
      height: 110px;
      width: 110px;
    }
    @media (max-width: 400px){
      height: 90px;
      width: 90px;
      margin-left: -20px;
    }

    `

export const DetailsSection = styled.div`
    width:70%;
    display:flex;
    flex-direction: column;
    padding-left: 4vw;
    `

export const NameSection = styled.div`
    width:100%;
    display:flex;
    height: 3rem;
    margin-top: 2%;
    position: relative;
    align-items: end;
    /* align-items: center; */
    span{
      position: absolute;
      right: 30px;
      @media (max-width:700px) {
        position: absolute;
        right: 5%;
      }
      @media (max-width:600px) {
        position: absolute;
        right: 1%;
      }
      @media (max-width:550px) {
        position: absolute;
        right: 8%;
        top:120%;
      }
      @media (max-width:450px) {
        position: absolute;
        right: 0%;
        top:120%;
      }
      @media (max-width:400px) {
        position: absolute;
        right: -13%;
        top:120%;
      }
    }
    p{
      font-size:28px;
      margin-top: 1px;
      
      @media (max-width: 600px){
        font-size:24px;
      }
      @media (max-width: 450px){
        font-size:20px;
      }
    }
`

export const Button = styled.button`
    padding: 3px ;
    height: 1.7rem;
    margin: 10px 7px;
    font-size:14px;
    min-width: 56px;
    border: 1px solid lightgrey; 
    background-color:#fff;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 506px){
      height: max-content;
      font-size:12px;
    }
    @media (max-width: 460px){
      font-size:10px;
      margin:10 6px;
    }
    @media (max-width: 350px){
      font-size:8px;
      margin:10px 3px;
    }
    `

export const FollowerSection = styled.div`
    width:100%;
    height: 1.2rem;
    margin-top: 2%;
    display: flex;
    
    strong{
      font-size: 12px;
      @media (max-width: 355px){
        font-size:10px;
      }
    }
    p{
      font-size: 12px;
      @media (max-width: 355px){
        font-size:10px;
      }
    }
`
export const AnchorTag = styled.p`
    margin-right:2vw;
    cursor:pointer;
    `

export const BioSection = styled.div`
    width:100%;
    height: 6rem;
    margin-top: 15px;
    p{
      margin: 3px 0;
    }
    @media (max-width: 355px){
      font-size:14px;
    }
`

export const Content = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #ecf3f9;
    div {
      p {
        color: black;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: 600;
      margin-left: 10px;
      color: #8e8e8e;
      transition: color 0.2s linear;
    }
  }
`;

export const PopoverContainer = styled.div`
  height: max-content;
  width: 250px;
`;