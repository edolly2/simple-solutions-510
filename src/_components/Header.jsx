import React from 'react';
import TopBar from './TopBar';
import TopBarMid from './TopBarMid';
import TopNav from './TopNav';

const Header = () => {
  return (
    <div>
      <TopBar />
      <TopBarMid />
      <TopNav />
    </div>
  );
};

export default Header;
