import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components/macro';
import { NavContainer, Wrapper, Image, Search, NavIcons , Button } from "./style";
import Avatar from "@material-ui/core/Avatar";
import { Link, useLocation } from "react-router-dom";
import HomeSvgActive from "../svg/HomeSvgActive";
import HomeSvgInActive from "../svg/HomeSvgInActive";
import MessageSvgActive from "../svg/MessageSvgActive";
import MessageSvgInActive from "../svg/MessageSvgInActive";
import ExploreSvgActive from "../svg/ExploreSvgActive";
import ExploreSvgInActive from "../svg/ExploreSvgInActive";
import FavSvgActive from "../svg/FavSvgActive";
import FavSvgInActive from "../svg/FavSvgInActive";
import { useSelector } from "react-redux";
import CustomModal from "../../containers/home/PostModal";

function Navbar() {
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [search, setSearch] = useState('');
  const location = useLocation()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleClose()
  }, [location.pathname])

  return (
    <NavContainer>
      <Wrapper>
        <Image to='/' onClick={() => localStorage.setItem("location" , "home")}>
          <img
            style={{ width: "103px", height: "29px" }}
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt=""
            />
        </Image>
        <Search onChange={(e) => {
          handleOpen();
          setSearch(e.target.value);
        }}
        value={search} />
        <NavIcons>
          {localStorage.getItem("location") === "home" ? (
            <Link to="/">
              <Button onClick={() => localStorage.setItem("location" , "home")}>
                <HomeSvgActive />
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button onClick={() => localStorage.setItem("location" , "home")}>
                <HomeSvgInActive />
              </Button>
            </Link>
          )}
          {localStorage.getItem("location")  === "message" ? (
            <Link to="/message">
              <Button onClick={() => localStorage.setItem("location" , "message")}>
                <MessageSvgActive />
              </Button>
            </Link>
          ) : (
            <Link to="/message">
              <Button onClick={() => localStorage.setItem("location" , "message")}>
                <MessageSvgInActive/>
              </Button>
            </Link>
          )}
          {localStorage.getItem("location")  === "explore" ? (
            <Link to="/explore">
              <Button onClick={() => localStorage.setItem("location" , "explore")}>
                <ExploreSvgActive />
              </Button>
            </Link>
          ) : (
            <Link to="/explore">
              <Button onClick={() => localStorage.setItem("location" , "explore")}>
                <ExploreSvgInActive />
              </Button>
            </Link>
          )}
          {localStorage.getItem("location")  === "profile" ? (
            <Link to="/profile">
              <Button>
                <Avatar
                  style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid black",
                  }}
                  onClick={() => localStorage.setItem("location" , "profile")}
                  src={auth.user.profilePicture}
                  /> 
              </Button>
            </Link>
          ) : (
                <Link to="/profile">
            <Button>
                  <Avatar
                        style={{ width: "20px", height: "20px" }}
                        onClick={() => localStorage.setItem("location" , "profile")}
                        src={auth?.user?.profilePicture}
                    />
              </Button>
            </Link>
          )}
        </NavIcons>
      </Wrapper>
      <CustomModal  open={open} handleClose={handleClose}>
        <ModalContainer>
        {user.suggestedUser.filter((val) => {
          if(search == ""){
            return 
          } else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val
          }
        }).map((val) => {
              return(
                <div>
                  <Avatar style={{width:'50px' , height: '50px' , margin: '0px 15px'}} alt="Remy Sharp" src={val.profilePicture}/>
                  <Link style={{textDecoration:'none'}} to={val._id !== auth.user._id  ? '/profile/'+ val._id : '/profile'}><h5>{val.name}</h5></Link>
                </div>
              )
          })}
        </ModalContainer>
      </CustomModal>
    </NavContainer>
  );
}

export default Navbar;

const ModalContainer = styled.div`
  position: absolute;
  top: 58px;
  left: 29vw;
  width:460px;
  max-height:400px;
  height:max-content;
  background-color:#fafafa90;
  @media(max-width:650px) {
    width:400px;
    left:18vw;
  }
  @media(max-width:500px) {
    width:300px;
    left:15vw;
  }
  div{
    /* border: 1px dashed lightgrey; */
    padding:10px;
    display:flex;
    align-items: center;
    &:hover{
      background-color :#E6E9E9;
    }
    h5{
      color:black;
      &:hover{
        text-decoration: underline;
        /* color:black; */
      }
    }
  }
  & .MuiAvatar-img{
    border-radius: 30px;
  }
`;