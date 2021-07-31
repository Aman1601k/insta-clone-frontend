import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { deletepost } from '../../actions';

const DeleteModal = ({ close, data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const closeModal = () => {
    close(false);
  };

  const postDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletepost(id)).then(() => {
      close(false);
    });
  };

  return (
    <>
      <Details>
        {data.postedBy._id === auth.user._id && (
          <DetailsContent onClick={(e) => postDelete(e, data._id)}>
            <span>Delete</span>
          </DetailsContent>
        )}
            <Divider />
        <DetailsContent
          onClick={(e) => {
            history.push(`/post/${data._id}`);
          }}
        >
          <p>Go to post </p>
        </DetailsContent>
            <Divider />
        <DetailsContent onClick={closeModal}>
          <p>Cancel </p>
        </DetailsContent>
        <Divider />
      </Details>
    </>
  );
};

export default DeleteModal;

const Details = styled.div`
  width: 400px;
  height: max-content;
  background-color: #ffffff;
  border-radius: 12px;
  &:focus-visible,
  &:focus {
    outline: none;
  }
`;

const DetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50px;
  padding: 15px 10px;
  width: 96%;
  transition: background-color 0.5s linear;
  cursor: pointer;
  &:hover {
    background-color: #00000010;
    span {
      &:hover {
        font-weight: 800;
      }
    }
  }
  &:focus-visible {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  p,
  span {
    /* width: 100%; */
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
  }
  span {
    color: #ed4956;
  }
`;
