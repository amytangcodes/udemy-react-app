import React from 'react';
import PropTypes from 'prop-types';

const CommentDetail = (props) => {
  return (
    <section>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">{props.author}</a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </section>
  );
};

CommentDetail.propTypes = {
  data: PropTypes.array
};

export default CommentDetail;