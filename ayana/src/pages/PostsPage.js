import React from "react"
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
const PostsPage = ({ posts }) => {
    if (!posts) {
      return <div>Loading...</div>; // или другое сообщение о загрузке
    }
  
    return (
      <div>
        <h1>Список постов</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const mapStateToProps = state => ({
    posts: state.posts // Предполагается, что данные о постах хранятся в состоянии Redux
  });
  
export default connect(mapStateToProps)(PostsPage);