import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { InfoWrapper, InfoContainer, Box, Label, Text } from './style';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FeedModal from '../../containers/explore/FeedModal';

const Info = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <InfoWrapper>
        <InfoIcon onClick={handleOpen} />
      <FeedModal open={open} handleClose={handleClose}>
        <InfoContainer>
          <h2>Demo Login Credentials for Guest Account</h2>
          <Box>
            <Label>Email :</Label>
            <Text ml="10px"> guest@instaclone.com</Text>
            <span>
              <CopyToClipboard text="guest@instaclone.com">
                  <FileCopyIcon/>
              </CopyToClipboard>
            </span>
          </Box>
          <Box>
            <Label>Password :</Label>
            <Text ml="10px"> 123456</Text>
            <span>
              <CopyToClipboard text="123456">
                  <FileCopyIcon/>
              </CopyToClipboard>
            </span>
          </Box>
        </InfoContainer>
      </FeedModal>
    </InfoWrapper>
  );
};

export default Info;