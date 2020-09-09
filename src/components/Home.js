import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import InfiniteScroll from 'react-infinite-scroller';
import StyledHome from './styled/StyledHome';
import { selectNews } from '../selectors/newsSelector';
import theme from '../styles/theme';
import NewsList from './NewsList';
import Navbar from './Navbar';
import { fetchStoryIds, fetchStories } from '../actions';
import Loader from './Loader';

const Home = ({ hackernews, getStoryIds, fetchStories }) => {

  useEffect(() => {
    getStoryIds();
  }, [getStoryIds]);

  const hasMoreStories = () => {
    return hackernews.stories.length !== hackernews.storyIds.length;
  };

  const loadMoreStories = () => {
    if (hackernews.isLoading) return;
    fetchStories(hackernews.storyIds, hackernews.page);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Navbar></Navbar>
        <InfiniteScroll
          pageStart={0}
          hasMore={hasMoreStories()}
          loadMore={loadMoreStories}
          initialLoad={false}
          loader={<Loader key={0} />}
        >
          <div className="list-container">
            <NewsList></NewsList>
          </div>
        </InfiniteScroll>
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
    getStoryIds: () => dispatch(fetchStoryIds()),
    fetchStories: (storyIds, page) => dispatch(fetchStories({ storyIds, page }))
  }
};

export default connect(mapStateToProps, mapDispatchToPros)(Home);