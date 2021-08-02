import styled from 'styled-components/macro';

export const Container = styled.div`
    height:max-content;
    width: 100%;
    background-color: #fafafa;
    @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Wrapper = styled.div`
    min-width: 68%;
    width: 68%;
    margin: 0% 16%;

    @media (max-width: 1000px) {
        min-width:90%;
    }
    @media (max-width: 500px) {
        min-width:100%;
    }
`

