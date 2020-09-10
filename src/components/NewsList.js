import React, { useEffect } from 'react';
import { connect } from "react-redux";
import StyledNewsList from './styled/StyledNewsList';
import Listitem from './Listitem';
import { fetchStoryIds } from '../actions';

const NewsList = ({ stories, getStoryIds, activeTab }) => {

  useEffect(() => {
    getStoryIds(activeTab);
  }, []);

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
  const { hackernews: { stories, activeTab } } = state;
  return { stories, activeTab }
}

const mapDispatchToPros = dispatch => {
  return {
    getStoryIds: tab => dispatch(fetchStoryIds(tab)),
  }
};


export default connect(mapStateToPros, mapDispatchToPros)(NewsList);