import React from 'react';
import { connect } from "react-redux";
import StyledNewsList from './styled/StyledNewsList';

const NewsList = () => {
  return (
    <StyledNewsList>
      <h1>Newest</h1>
    </StyledNewsList>
  )
}

const mapStateToPros = state => {
  const { hackernews: { stories } } = state;
  return { stories }
}

export default connect(mapStateToPros)(NewsList);