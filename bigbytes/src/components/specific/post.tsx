'use client';

import { 
  FaArrowAltCircleUp, FaArrowAltCircleDown, FaCommentAlt, 
  FaShareAlt, FaUserCircle, FaCircle 
} from 'react-icons/fa';
import getPostPublishPeriod from "@/utils/generalCalculations";
import type { CMSContent, Post, User } from "@/types";
import CommentContainer from './comment';
import clsx from "clsx";

type SinglePostProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
  publisher_alt?: User;
  coauthor_alt?: User;
  postObj: Post;
  type?: string;
  layout?: string;
  session_exists?: boolean
}

export function SinglePost({ classList, postObj, type, layout, publisher_alt, coauthor_alt, session_exists }: SinglePostProps) {
  const cls = clsx(classList?.tw, classList?.cs, (layout) ? `${layout}_item` : "detailed_item");
  const { id, timeStamp, publisher, coauthor, title, context, votes, comments, thumbnail, sharable } = postObj;
  const { upv, dnv } = votes;
  const published_period = getPostPublishPeriod(timeStamp);

  return <div id={(type) ? `${type}_post_${id}` : "specific_post"} className={cls}>
    <div className="post_header">
      <h4 className="title_bar">{title}</h4>
      <p className="period">{published_period}</p>
      <div className="publication">
        <p className={`publishers ${(coauthor) ? "many" : "single"}`}>
          <FaUserCircle />
          <FaCircle />
          <FaUserCircle />
        </p>
        <p className="publisher">
          <span className="alt_text">publisher: </span>
          <span className="context">{(publisher_alt) ? `${publisher_alt.prefix} ${publisher_alt.name}` : "anonymous"}</span>
        </p>
        {(coauthor) && <p className="coauthor">
          <span>&nbsp;|&nbsp;</span>
          <span className="alt_text">co-author: </span>
          <span className="context">{(coauthor_alt) ? `${coauthor_alt.prefix} ${coauthor_alt.name}` : "anonymous"}</span>
        </p>}
      </div>
    </div>
    <div className="post_body">
      <p className="context">{context}Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laudantium enim quam placeat qui illum voluptatem alias, similique animi ipsa praesentium repudiandae reprehenderit repellat aliquid earum officia obcaecati, molestias, soluta quibusdam! Id error repellendus dolorum, eaque accusamus saepe dolore praesentium unde asperiores, temporibus laborum suscipit!</p>
      <div className="read_more">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <span className="alt_text">
            read more...
          </span>
        </button>
      </div>
    </div>
    <div className="post_footer">
      <div className="act votes">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <p>
            <span className="alt_text">
              <FaArrowAltCircleUp className="act_icon"/>
            </span>
            <span className="context">
              &nbsp;{upv.length}
            </span>
            <strong>&nbsp;upvote</strong>
          </p>
        </button>
        <button 
          className="post_action"
          onClick={() => null}
        >
          <p>
            <span className="alt_text">
              <FaArrowAltCircleDown className="act_icon"/>
            </span>
            <span className="context">
              &nbsp;{dnv.length}
            </span>
            <strong>&nbsp;downvote</strong>
          </p>
        </button>
      </div>
      <div className="act comments">
        <button 
          className="post_action"
          onClick={() => null}
          >
          <p>
            <span className="alt_text">
              <FaCommentAlt className="act_icon"/>
            </span>
            <span className="context">
              &nbsp;{(comments) ? comments.length : ''}
            </span>
            <strong>&nbsp;comment</strong>
          </p>
        </button>
      </div>
      <div className="act shares">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <p>
            <span className="alt_text">
              <FaShareAlt className="act_icon"/>
            </span>
            <strong>&nbsp;share</strong>
          </p>
        </button>
      </div>
    </div>
  </div>
}

type SinglePostAltProps = {
  classList?: {
    tw?: string[];
    cs?: string[];
  }
  publisher_alt: User | null;
  coauthor_alt: User | null;
  // postObj: PostAlt;
  postObj: CMSContent | null;
  format?: string;
  layout?: string;
  session_exists?: boolean
}

export function SinglePostAlt({ classList, postObj, format, layout, publisher_alt, coauthor_alt, session_exists }: SinglePostAltProps) {
  const cls = clsx(classList?.tw, classList?.cs, (layout) ? `${layout}_item` : "detailed_item");
  
  if (!postObj) return null;
  
  const { id, createdAt, updatedAt, publishedAt, comments, title, description, coverImageUrl, coverImageAlt, slug, type, author, language, category, tags, allowComments, source } = postObj;
  const published_period = getPostPublishPeriod(publishedAt);
  
  // const { id, timeStamp, publisher, coauthor, title, context, votes, comments, thumbnail, sharable } = postObj;
  // const { upv, dnv } = votes;
  const coauthor = null; // not needed
  const publisher = author; // re-aligned
  const votes = { upv: [], dnv: [] }; // not needed
  const { upv, dnv } = votes; // not needed

  return <div id={(format) ? `${format}_post_${id}` : "specific_post"} className={cls}>
    <div className="post_header">
      <h4 className="title_bar">{title}</h4>
      {tags && <h5 
        className="tags">
        {tags.map((ech_tg,idx) => <span 
          key={`tag_#${idx+1}`} 
          className="tag"
        ><em>#</em>{ech_tg.toUpperCase()}</span>)}
      </h5>}
      <p className="period">{published_period}</p>
      <div className="publication">
        <p className={`publishers ${(coauthor) ? "many" : "single"}`}>
          <FaUserCircle />
          <FaCircle />
          <FaUserCircle />
        </p>
        <p className="publisher">
          <span className="alt_text">publisher: </span>
          <span className="context">{(publisher_alt) ? `${publisher_alt.prefix} ${publisher_alt.name}` : publisher}</span>
        </p>
        {(coauthor) && <p className="coauthor">
          <span>&nbsp;|&nbsp;</span>
          <span className="alt_text">co-author: </span>
          <span className="context">{(coauthor_alt) ? `${coauthor_alt.prefix} ${coauthor_alt.name}` : "anonymous"}</span>
        </p>}
      </div>
    </div>
    <div className="post_body">
      <p className="context">{description}</p>
      <div className="comments">
        {(comments && comments?.length > 0) ? comments?.map((cmt,idx) => {
          const cmt_period = getPostPublishPeriod(cmt.timeStamp);
        
          return <CommentContainer 
            key={`cmt_${idx+1}`}
            post_id={Number(id)}
            defined_comment={JSON.stringify({
              timestamp: cmt_period,
              commenter: cmt.commenter,
              context: cmt.context
            })}
            display_only={true}
          />
        }) : <p className="empty_context">- no comments yet -</p>}
        {allowComments && <CommentContainer 
          post_id={Number(id)}
          allowed={allowComments}
        />}
      </div>
    </div>
    <div className="post_footer">
      <div className="act votes">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <p>
            <span className="alt_text">
              <FaArrowAltCircleUp className="act_icon"/>
            </span>
            <span className="context">
              &nbsp;{upv?.length}
            </span>
            <strong>&nbsp;upvote</strong>
          </p>
        </button>
        <button 
          className="post_action"
          onClick={() => null}
        >
          <p>
            <span className="alt_text">
              <FaArrowAltCircleDown className="act_icon"/>
            </span>
            <span className="context">
              &nbsp;{dnv?.length}
            </span>
            <strong>&nbsp;downvote</strong>
          </p>
        </button>
      </div>
      <div className="act shares">
        <button 
          className="post_action"
          onClick={() => null}
        >
          <p>
            <span className="alt_text">
              <FaShareAlt className="act_icon"/>
            </span>
            <strong>&nbsp;share</strong>
          </p>
        </button>
      </div>
    </div>
  </div>
}