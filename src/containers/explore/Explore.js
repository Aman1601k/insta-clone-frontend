import React, { useEffect, useState } from "react";
import { Wrapper, FeedContainer, Hover, Image } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { allposts } from "../../actions";
import LikeSvg from "../../components/svg/LikeSvg";
import UnLikeSvg from "../../components/svg/UnLikeSvg";
import CommentSvg from "../../components/svg/CommentSvg";
import ShowFeedModal from "./ShowFeedModal";
import Skeleton from "@material-ui/lab/Skeleton";

const Explore = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState({});
  const [posts, setPosts] = useState(null);
  const post = useSelector((state) => state.post);
  const auth = useSelector((state) => state.auth);
const skeleton = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  useEffect(() => {
    dispatch(allposts());
  }, [auth.user]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setPosts(post.posts);
    }, 1000);
  });

  return (
    <Wrapper>
      {posts === null ? (
        skeleton.map((item) => {
          return <Skeleton style={{marginLeft:'15px' , marginBottom:'5px' , marginTop:'15px'}} variant="rect" width={293} height={293} animation="wave"/>;
        })
      ) : (
        <>
          {React.Children.toArray(
            posts?.map((item) => {
              return (
                <>
                  <FeedContainer
                    onClick={() => {
                      handleOpen();
                      setItems(item);
                    }}
                  >
                    <Image>
                      <img src={item.photo} />
                    </Image>
                    <Hover>
                      {item.likes.includes(auth.user._id) ? (
                        <UnLikeSvg />
                      ) : (
                        <div>
                          <svg
                            aria-label="Like"
                            class="_8-yf5 "
                            fill="white"
                            height="24"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        </div>
                      )}
                      <p>{item.likes.length}</p>
                      <div>
                        <svg
                          aria-label="Comment"
                          class="_8-yf5 "
                          fill="white"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p>{item.comments.length}</p>
                    </Hover>
                  </FeedContainer>
                </>
              );
            })
          )}
          <ShowFeedModal open={open} item={items} handleClose={handleClose} />
        </>
      )}
    </Wrapper>
  );
};

export default Explore;
