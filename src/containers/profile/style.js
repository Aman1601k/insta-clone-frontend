import styled from 'styled-components/macro';

export const Header = styled.div`
    height: 27vh;
    padding: 2rem;
    display: flex;
    /* background-color:yellow; */
`
export const Body = styled.div`
    width:100%;
    height:auto;
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;
    justify-content:flex-start;
    max-height:100%;
    /* border: 1px solid black; */
    /* background-color: yellow; */
`

export const ImageSection = styled.div`
    display: flex;
    justify-content:center;
    width:30%;
    /* background-color: blue; */
`
export const AvatarSection = styled.div`
    position: absolute;
    width: 166px;
    height: 166px;
`

export const DetailsSection = styled.div`
    width:70%;
    display:flex;
    flex-direction: column;
    padding-left: 4vw;
    /* background-color: green; */
`
export const NameSection = styled.div`
    width:100%;
    display:flex;
    height: 3rem;
    margin-top: 2%;
    /* background-color:brown; */
`
export const Button = styled.button`
    padding: 3px ;
    height: 1.7rem;
    margin: 4px 1rem;
    border: 1px solid lightgrey; 
    background-color:#fff;
    border-radius: 5px;
`

export const FollowerSection = styled.div`
    width:100%;
    height: 1.2rem;
    margin-top: 2%;
    display: flex;
    justify-content:flex-start;
    /* background-color:brown; */
`
export const AnchorTag = styled.a`
    margin-right:2vw;
    cursor:pointer;
`

export const BioSection = styled.div`
    width:100%;
    height: 6rem;
    margin-top: 2%;
    /* background-color:brown; */
`

