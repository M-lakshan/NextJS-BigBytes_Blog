'use client';

import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaCommentAlt, FaShareAlt } from 'react-icons/fa';
import getPostPublishPeriod from "@/utils/generalCalculations";
import type { Post } from "@/types";
import clsx from "clsx";

type SinglePostProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
  postObj: Post;
  type?: string;
  layout?: string;
  session_exists?: boolean
}

export default function SinglePost({ classList, postObj, type, layout, session_exists }: SinglePostProps) {
  const cls = clsx(classList?.tw, classList?.cs, (layout) ? `${layout}_item` : "detailed_item");
  const { id, timeStamp, publisher, coauthor, title, context, votes, comments, thumbnail, sharable } = postObj;
  const { upv, dnv } = votes;
  const published_period = getPostPublishPeriod(timeStamp);

  return <div id={(type) ? `${type}_post_${id}` : "specific_post"} className={cls}>
    <div className="post_header">
      <h4 className="title_bar">{title}</h4>
      <p className="publication">
        <span className="alt_text">{published_period}</span>
        <span className="alt_text">publisher: </span>
        <span className="context">{publisher}</span>
        {(coauthor) && <>
          <span className="alt_text">coauthor: </span>
          <span className="context">{coauthor}</span>
        </>}
      </p>
    </div>
    <div className="post_body">
      <p className="context">{context}</p>
      <div className="read more">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <span className="alt_text">
            read more
          </span>
        </button>
      </div>
    </div>
    <div className="post_footer">
      <div className="votes">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <span className="alt_text">
            <FaArrowAltCircleUp className="act_icon"/>
          </span>
          <span className="context">
            {upv.length}
          </span>
        </button>
        <button 
          className="post_action"
          onClick={() => null}
        >
          <span className="alt_text">
            <FaArrowAltCircleDown className="act_icon"/>
          </span>
          <span className="context">
            {dnv.length}
          </span>
        </button>
      </div>
      <div className="comments">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <span className="alt_text">
            <FaCommentAlt className="act_icon"/>
          </span>
          <span className="context">
            {(comments) ? comments.length : 0}
          </span>
        </button>
      </div>
      <div className="shares">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <span className="alt_text">
            <FaShareAlt className="act_icon"/>
          </span>
          <span className="context">share</span>
        </button>
      </div>
    </div>
  </div>
}