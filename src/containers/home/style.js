import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display:flex;
    margin-top: 3vh;
    
    @media (max-width: 1000px) {
        align-items: center;
        justify-content: center;    
    }
`

export const LeftContainer = styled.div`
    width: 67%;
    max-width:615px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        max-width :100% ;
        width : 100%;
    }
`

export const StoryContainer = styled.div`
    width:100%;
    border: 1px solid lightgrey;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    overflow-x: hidden;
`

export const FeedContainer = styled.div`
    width:100%;
    height: max-content;
    border: 1px solid lightgrey;
`

export const NameSection = styled.div`
    width: 87%;
    max-height: 60px ;
    margin: 1% 1% 1% 5%;
    display: flex;
    justify-content:space-between;
    align-items:center;

    div{
        display: flex;
        justify-content: space-evenly;
        align-items:center;

        h5{
            color: black;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`


export const ImageSection = styled.div`
    height: 400px;
    max-height:500px;
    display: flex;
    justify-content: center;
    border-top: 1px solid lightgrey;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const DetailsSection = styled.div`
    margin-top:7px;
    width: 100%;
`
export const LikeDiv = styled.div`
    width: 100%;
    height: max-content;
    margin: 2px 0 5px 0;
    display: flex;
    justify-content:space-between;

    div{
        display: flex;
        justify-content: space-evenly;
        margin-left:5px;
    }
`
export const ShowComment = styled.div`
  overflow-y:scroll;
  max-height:90px;
  ::-webkit-scrollbar {
    display: none;
    }
`;

export const CommentDiv = styled.div`
    width: 100%;
    height: max-content;
    min-height: 50px;
    border-top: 1px solid lightgrey;
    margin: 2px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        justify-content:space-between;
        align-items: center;
            input{
            width: 36vw;
            height: 8vh;
            margin-left:10px;
            border: none;
            & :focus{
                outline: none;
            }
        }
    }
`

export const RightContainer = styled.div`
    width: 293px;
    height: max-content;
    margin: 0 23px;
    min-width: 250px;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const Logout = styled.div`
    width: 100%;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            div{
            display: flex;
            flex-direction:column;
                h5{
                    margin: -20px 0;
                }
                p{
                    margin: -20px 0;
                }
            }
        }
    }
`

export const Suggestion = styled.div`
    width: 100%;
    div{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const ViewComments = styled.p`
  color: #8e8e8e;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  margin-left: 15px;
  margin-top: -10px;
`;