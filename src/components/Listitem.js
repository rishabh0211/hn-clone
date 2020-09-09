import React from 'react';
import StyledListitem from './styled/StyledListitem';
import moment from "moment";
import { Url } from 'url';

const Listitem = ({ story, index }) => {
  const { title, by, descendants, id, kids, score, time, url } = story;

  return (
    <StyledListitem>
      <div className="title-container">
        <p className="title">{index}. {title}</p>
        {url && <a className="website">({new URL(url).hostname.replace('www.', '')})</a>}
      </div>
      <div className="info-container">
        <p className="attr">{score} points</p>
        <p className="attr">by {by}</p>
        <p className="attr">{moment(time * 1000).fromNow()}</p>
        <div className="separator"></div>
        <p className="attr">{descendants} comments</p>
      </div>
    </StyledListitem >
  )
}

export default Listitem;
