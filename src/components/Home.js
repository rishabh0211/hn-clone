import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import StyledHome from './styled/StyledHome';
import { selectNews } from '../selectors/newsSelector';
import theme from '../styles/theme';
import NewsList from './NewsList';
import Navbar from './Navbar';
import { fetchStoryIds } from '../actions';

const Home = ({ hackernews, getStoryIds }) => {

  useEffect(() => {
    getStoryIds();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Navbar></Navbar>
        <div className="list-container">
          <NewsList></NewsList>
        </div>
      </StyledHome>
    </ThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    hackernews: selectNews(state.hackernews)
  }
}

const mapDispatchToPros = dispatch => {
  return {
    getStoryIds: () => dispatch(fetchStoryIds())
  }
};

export default connect(mapStateToProps, mapDispatchToPros)(Home);