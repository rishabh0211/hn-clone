import React, { useEffect } from 'react';
import { connect } from "react-redux";
import StyledNewsList from './styled/StyledNewsList';
import Listitem from './Listitem';
import { fetchStoryIds } from '../actions';

const NewsList = ({ stories, getStoryIds }) => {

  useEffect(() => {
    getStoryIds();
  });

  return (
    <>
      {!!stories.length &&
        <StyledNewsList>
          {stories.map((story, index) => (
            <Listitem story={story} key={story.id} index={index + 1}></Listitem>
          ))}
        </StyledNewsList>
      }
    </>
  )
}

const mapStateToPros = state => {
  const { hackernews: { stories } } = state;
  return { stories }
}

const mapDispatchToPros = dispatch => {
  return {
    getStoryIds: () => dispatch(fetchStoryIds()),
  }
};


export default connect(mapStateToPros, mapDispatchToPros)(NewsList);