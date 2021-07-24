import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    height: 100%;
    background-color:transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export const Hover = styled.span`
        display: none;
        position: absolute;
        align-items: center;
        p{
            color: white;
            margin: 0px 5px 4px 5px;
        }
        /* justify-content:space-between; */
        /* background-color:red; */
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
    /* border: 1px dotted black; */

    &:hover{
        filter:brightness(92%);
        ${Hover}{
            display: flex;
        }
    }
    /* overflow: hidden; */
`;

export const Image = styled.div`
    width: 100%;
    /* position: absolute; */
    height: max-content;
    max-height:400px;
    /* border: 1px dotted black; */
    img{
        width: 100%;
        object-fit: contain;
    }
`;