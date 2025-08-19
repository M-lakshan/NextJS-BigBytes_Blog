'use client';

import { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';

type PostCommentFormProps = {
  post_id: number;
  allowed?: boolean;
  display_only?: boolean;
  defined_comment?: string;
};

export default function CommentContainer({ post_id, allowed, display_only, defined_comment }: PostCommentFormProps) {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError("Comment cannot be empty.");
      return;
    }

    setError(null);

    console.log("Submitting comment:", {
      name,
      comment,
    });

    setComment('');
    setName('');
  };
  console.log((display_only && defined_comment),allowed);

  if(display_only && defined_comment) {
    let cmt = JSON.parse(defined_comment);

    return <p className="comment">
      <span className="timestamp">{cmt.timeStamp}</span>
      <span className="by">{cmt.commenter}</span>
      <span className="cmt">{cmt.context}</span>
    </p>
  } else {

    if(!allowed) {
      return null;
    } else {
      return <form className="post_comments" onSubmit={handleSubmit}>
        <div className="form_group">
          <textarea
            id="comment"
            className="form_textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="write your comment here..."
            rows={3}
          />
        </div>

        {error && <p className="form_error">{error}</p>}

        <button type="submit" className="post_action">
          <p>
            <span className="alt_text">
              <FaCommentAlt className="act_icon" />
            </span>
            <strong className="text">&nbsp;Post Comment</strong>
          </p>
        </button>
      </form>
    }
  }
}
