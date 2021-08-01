import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display:flex;
    margin-top: 3vh;
    /* background-color: red; */
`

export const LeftContainer = styled.div`
    width: 67%;
    /* height: 100%; */
    max-width:615px;
    display: flex;
    flex-direction: column;
    /* background-color:yellow; */
`

export const StoryContainer = styled.div`
    width:100%;
    /* height: auto; */
    border: 1px solid lightgrey;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    overflow-x: hidden;
    /* background-color: green; */
`

export const FeedContainer = styled.div`
    width:100%;
    height: max-content;
    /* padding-bottom: 10px; */
    border: 1px solid lightgrey;
    /* background-color: green; */
`

export const NameSection = styled.div`
    width: 87%;
    max-height: 60px ;
    margin: 1% 1% 1% 5%;
    /* background-color:red; */
    display: flex;
    justify-content:space-between;
    align-items:center;

    div{
        display: flex;
        justify-content: space-evenly;
        align-items:center;
        width: 32%;

        h5{
            color: black;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export const PostDiv = styled.div`
    width: 614px;
    height:614px;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageSection = styled.div`
    height: fit-content;
    max-height:614px;
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
    /* background-color:yellow; */
`
export const LikeDiv = styled.div`
    width: 100%;
    height: max-content;
    /* border: 1px solid black; */
    margin: 2px 0 5px 0;
    display: flex;
    justify-content:space-between;

    div{
        display: flex;
        justify-content: space-evenly;
        /* width: 15%; */
        margin-left:5px;
    }
`
export const ShowComment = styled.div`
  overflow-y:scroll;
  max-height:90px;
  ::-webkit-scrollbar {
    display: none;
    }
  /* display: flex; */
  /* flex-direction: column-reverse; */
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
    /* background-color:yellow; */
`

export const Logout = styled.div`
    width: 100%;
    /* border: 1px solid black; */

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