import styled from 'styled-components/macro';

export const Header = styled.div`
    height: 27vh;
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

    @media (max-width: 1000px){
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
    span{
      position: absolute;
      right: 30px;
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
    border: 1px solid lightgrey; 
    background-color:#fff;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 506px){
      height: 1.6rem;
      font-size:12px;
    }
    @media (max-width: 460px){
      font-size:10px;
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
    @media (max-width: 355px){
      font-size:14px;
    }
    /* background-color:brown; */
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