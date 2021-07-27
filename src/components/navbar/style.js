import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
    border-bottom: 1px solid lightgrey;
    height: 54px;
    background-color:#fff;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    margin: 0 15%;
    width: 64%;
    padding: 0 20px;
`

export const Image = styled.div`
    margin-top: 7px;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`
export const Search = styled.input.attrs({
    type: "search",
    placeholder: "Search"
})`
    width:215px;
    height:28px;
    border-radius: 3px;
    background-color:#fafafa;
    color: rgba(var(--f52,142,142,142),1);
    cursor: text;
    font-size: 14px;
    font-weight: 100;
    padding: 7px;
    text-align: center;
    border:solid 1px rgba(var(--b6a,219,219,219),1);
`

export const NavIcons = styled.div`
    width: 22%;
    display:flex;
    justify-content:space-evenly;
    /* align-items:center; */
`
export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`