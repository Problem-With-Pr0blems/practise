// Comment.js
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.text}</p>
      <button>Удалить</button>
    </div>
  );
};

export default Comment;
