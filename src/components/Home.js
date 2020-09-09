import React from 'react';
import { connect } from "react-redux";
import StyledHome from './styled/StyledHome';
import { selectNews } from '../selectors/news';

const Home = ({ hackernews }) => {
  return (
    <StyledHome>
      {JSON.stringify(hackernews, null, 2)}
      <h1>Home</h1>
    </StyledHome>
  )
}

const mapStateToProps = state => {
  return {
    hackernews: selectNews(state.hackernews)
  }
}

export default connect(mapStateToProps)(Home);