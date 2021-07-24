import React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Grow } from '@material-ui/core';

const FeedModal = ({ handleClose, open, children }) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}
      >
        <Grow in={open}>
          <>
            {children}
          </>
        </Grow>
      </Modal>
    </>
  )
}

export default FeedModal