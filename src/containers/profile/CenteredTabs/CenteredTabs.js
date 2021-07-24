import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {PaperStyle} from './style'

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PaperStyle>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <Tab label="POSTS" />
        <Tab label="IGTV" />
        <Tab label="SAVED" />
        <Tab label="TAGGED" />
      </Tabs>
    </PaperStyle>
  );
}