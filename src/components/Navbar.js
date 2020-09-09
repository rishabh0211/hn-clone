import React from 'react';
import StyledNavbar from './styled/StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo">
        <img src="/logo192.png" className="logo__img" />
        <h1 className="logo__title">HackerNews</h1>
      </div>
      <ul className="links">
        <li className="links__item">New</li>
        <li className="links__item">Past</li>
        <li className="links__item">Comments</li>
        <li className="links__item">Jobs</li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar;