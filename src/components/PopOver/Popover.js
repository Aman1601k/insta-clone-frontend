import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover({
  anchorEl,
  handleClose,
  children,
  anchorVO,
  transformVO,
  anchorHO,
  transformHO,
}) {
  const classes = useStyles();

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        style={{zIndex:'999999'}}
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: anchorVO ? anchorVO : 'center',
          horizontal: anchorHO ? anchorHO : 'center',
        }}
        transformOrigin={{
          vertical: transformVO ? transformVO : 'center',
          horizontal: transformHO ? transformHO : 'center',
        }}
      >
        {children}
      </Popover>
    </div>
  );
}