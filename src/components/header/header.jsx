import React from 'react';
import Logo from '../logo/logo';
import HeaderMenu from '../header-menu/header-menu';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
