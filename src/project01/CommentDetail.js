import React from 'react';
import PropTypes from 'prop-types';

const CommentDetail = ({ id, author, text, avatar }) => {
  return (
    <div key={id}>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">{author}</a>
          <div className="metadata">
            {/* <span className="date">{date}</span> */}
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};

CommentDetail.propTypes = {
  data: PropTypes.array
};

export default CommentDetail;