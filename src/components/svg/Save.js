import React from 'react';

const Save = ({ fill, height, width }) => {
  return (
    <div>
      <svg
        aria-label="Save"
        className="_8-yf5 "
        viewBox="0 0 48 48"
        fill={fill ? fill : '#262626'}
        height={height ? height : '24'}
        width={width ? width : '24'}
      >
        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
      </svg>

      {/*    
        fill="#8e8e8e"
        height="12"
        width="12" */}
    </div>
  );
};

export default Save;