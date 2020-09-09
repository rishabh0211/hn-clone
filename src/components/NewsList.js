import React from 'react';
import { connect } from "react-redux";
import StyledNewsList from './styled/StyledNewsList';
import Listitem from './Listitem';

const NewsList = ({ stories }) => {
  return (
    <>
      {!!stories.length ?
        <StyledNewsList>
          {stories.map((story, index) => (
            <Listitem story={story} key={story.id} index={index+1}></Listitem>
          ))}
        </StyledNewsList>
        :
        <h1>Loading...</h1>
      }
    </>
  )
}

const mapStateToPros = state => {
  const { hackernews: { stories } } = state;
  return { stories }
}

export default connect(mapStateToPros)(NewsList);