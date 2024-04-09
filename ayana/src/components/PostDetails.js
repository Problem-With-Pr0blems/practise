import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostById, selectPostById } from '../redux/posts/PostsSlice';
import NewCommentForm from './NewCommentForm';
import Comment from './Comment';

const PostDetails = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => selectPostById(state, postId));

  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);

  if (!post) {
    return <div>Пост не найден</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Комментарии:</h3>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <NewCommentForm postId={postId} />
    </div>
  );
};

export default PostDetails;
