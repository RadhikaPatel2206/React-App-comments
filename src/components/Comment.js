import React from "react";

const Comment = ({ avatarSrc, author, days, text }) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={avatarSrc ? avatarSrc : ''} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="/">{author}</a>
        <div className="metadata">
          <span className="date">{days}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
