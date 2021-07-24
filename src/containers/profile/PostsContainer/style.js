import styled from 'styled-components/macro';

export const PostDiv = styled.div`
    width:30%;
    height:30%;
    margin: 1vw 1vw;
    cursor:pointer;
` 

export const Image = styled.div`
    width:100%;
    height:auto;
    object-fit: contain;
    &:hover{
        filter: brightness(60%);
    }
`