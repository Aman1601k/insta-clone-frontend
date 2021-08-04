import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    height: 100%;
    background-color:transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    @media (max-width: 730px){
        justify-content: center;
    }
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

export const Hover = styled.span`
        display: none;
        position: absolute;
        align-items: center;
        p{
            color: white;
            margin: 0px 5px 4px 5px;
        }
`

export const FeedContainer = styled.div`
    width: 300px;
    position:relative;
    min-height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(max-content + 10px);
    margin: 10px !important;
    padding: 5px !important;    
    &:hover{
        filter:brightness(72%);
        ${Hover}{
            display: flex;
        }
    }
`;

export const Image = styled.div`
    width: 293px;
    height: 293px;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;