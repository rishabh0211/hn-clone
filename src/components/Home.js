import React from 'react';
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import InfiniteScroll from 'react-infinite-scroller';
import { Switch, Route } from "react-router-dom"
import StyledHome from './styled/StyledHome';
import { selectNews } from '../selectors/newsSelector';
import theme from '../styles/theme';
import NewsList from './NewsList';
import Navbar from './Navbar';
import { fetchStories } from '../actions';
import Loader from './Loader';
import UserDetails from './UserDetails';

const Home = ({ hackernews, fetchStories }) => {

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
        <Switch>
          <Route path="/" exact render={() => (
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
          )}></Route>
          <Route path="/user" component={UserDetails} />
        </Switch>
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
    fetchStories: (storyIds, page) => dispatch(fetchStories({ storyIds, page }))
  }
};

export default connect(mapStateToProps, mapDispatchToPros)(Home);