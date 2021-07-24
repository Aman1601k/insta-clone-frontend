import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import CustomModal from "./PostModal";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { createpost } from "../../actions";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Login/style";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  
  const postDetails = () => {
    const data = new FormData();
    data.append("file", posts);
    data.append("upload_preset", "Insta-Profile");
    data.append("cloud_name", "amancloud24234");
    fetch("https://api.cloudinary.com/v1_1/amancloud24234/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        return setPostUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    if (!title && !body && !posts) {
      return setError("Please add all the fields");
    }
    if (!title) {
      return setError("Please add title");
    }
    if (!body) {
      return setError("Please add body");
    }
    if (!posts) {
      return setError("Please add post");
    }
    {
      const post = {
        title,
        body,
        pic: postUrl,
      };
      if (postUrl) {
        dispatch(createpost(post));
        setOpen(false);
        setTitle("");
        setBody("");
        setPostUrl("");
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <CustomModal open={open}>
        <div
          style={{
            backgroundColor: "#fafafa",
            border: "1px solid lightgrey",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            width: "50%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: 400,
              padding: "10px",
              border: "5px dashed lightgrey",
            }}
          >
            Create Post
          </h2>
          {error ? (
            <p
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
                margin: "-10px 0",
              }}
            >
              {error}
            </p>
          ) : (
            ""
          )}
          <TextField
            style={{ margin: "10px 0" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            type="text"
            label="Title"
          />
            <input
              style={{ padding: "10px", border: "1px dotted black" }}
              type="file"
              onChange={(e) => setPosts(e.target.files[0])}
            />
          <TextField
            style={{ margin: "10px 0" }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            id="outlined-basic"
            type="text"
            label="Body"
          />
          <Button
            onClick={postDetails}
            style={{ background: "#0095f6", color: "#fff", marginTop: "10px" }}
          >
            Submit
          </Button>
          <Button
            onClick={() => setOpen(false)}
            style={{ background: "red", color: "#fff", marginTop: "10px" }}
          >
            Close
          </Button>
        </div>
      </CustomModal>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ marginLeft: "20px" }}
      >
        Add Post
      </Button>
    </>
  );
};

export default CreatePost;
