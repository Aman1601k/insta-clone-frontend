import styled,{keyframes} from 'styled-components/macro';

const Rotate = keyframes`
    0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`

export const Loader = styled.div`
    display: flex;
    justify-content:center;
    margin:-25px 0 5px 0;
    p{
    width: 1em;
	height: 1em;
    border: .1em dashed black;
	border-radius: 50%;
	animation: 1s ${Rotate} linear infinite; 
    }
    
`
