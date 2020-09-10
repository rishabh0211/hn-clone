import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StyledNavbar from './styled/StyledNavbar';
import { onTabChange } from '../actions';
import { TABS } from '../constants/general';

const Navbar = ({ onTabChange, activeTab }) => {

  const onTabClick = tab => {
    return () => {
      if (tab === activeTab) return;
      onTabChange(tab);
    };
  };

  return (
    <StyledNavbar>
      <Link to="/">
        <div className="logo">
          <img src="/logo192.png" className="logo__img" />
          <h1 className="logo__title">HackerNews</h1>
        </div>
      </Link>
      <ul className="links">
        <li
          className={`links__item ${activeTab === TABS.TOP_STORIES ? 'active' : ''}`}
          onClick={onTabClick(TABS.TOP_STORIES)}>
          Top
        </li>
        <li
          className={`links__item ${activeTab === TABS.NEWEST_STORIES ? 'active' : ''}`}
          onClick={onTabClick(TABS.NEWEST_STORIES)}>
          New
        </li>
        <li
          className={`links__item ${activeTab === TABS.BEST_STORIES ? 'active' : ''}`}
          onClick={onTabClick(TABS.BEST_STORIES)}>
          Best
        </li>
        <li
          className={`links__item ${activeTab === TABS.JOBS_STORIES ? 'active' : ''}`}
          onClick={onTabClick(TABS.JOBS_STORIES)}>
          Jobs
        </li>
      </ul>
    </StyledNavbar>
  )
}

const mapStateToPros = state => {
  return {
    activeTab: state.hackernews.activeTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTabChange: tab => dispatch(onTabChange(tab))
  }
};

export default connect(mapStateToPros, mapDispatchToProps)(Navbar);