import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';

export const Error = styled.div`
    display: flex;
    justify-content:center;
    margin-top:-35px;
    p{
        font-size: 14px;
        color: ${props => props.green ? "green" : "red"};
    }
`
export const UploadButton = styled(Button)`
    margin:0px 0px 7px 46px !important;
    width: 258px;
    height:30px;
    font-size:10px !important;
    background-color:black  !important;
`