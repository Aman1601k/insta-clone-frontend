import styled from 'styled-components/macro';

export const PostDiv = styled.div`
    width:293px;
    height:293px;
    margin: 1vw 1vw;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
` 

export const Image = styled.div`
    /* width:293px; */
    height:293px;
    img{
        object-fit: cover;
    }
    &:hover{
        filter: brightness(60%);
    }
`