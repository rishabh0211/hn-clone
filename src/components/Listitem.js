import React from 'react';
import StyledListitem from './styled/StyledListitem';
import moment from "moment";
import { LINK_REL } from '../constants/general';
import { Link } from "react-router-dom";

const Listitem = ({ story, index }) => {
  const { title, by, descendants, id, kids, score, time, url } = story;

  return (
    <StyledListitem>
      <div className="title-container">
        <p className="title">{index}. {title}</p>
        {url &&
          <a
            href={url}
            target="__blank"
            rel={LINK_REL}
            className="website"
          >
            ({new URL(url).hostname.replace('www.', '')})
          </a>
        }
      </div>
      <div className="info-container">
        <p className="attr">{score} points</p>
        <p className="attr">by
          <Link className="website" to={`/user?id=${by}`} >
            {by}
          </Link>
        </p>
        <p className="attr">{moment(time * 1000).fromNow()}</p>
        <div className="separator"></div>
        <p className="attr">{descendants} comments</p>
      </div>
    </StyledListitem>
  )
}

export default Listitem;
