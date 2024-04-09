import axios from 'axios';

export const postsAPI = {
  fetchPosts: async () => {
    const response = await axios.get('https://dummyjson.com/docs/posts?limit=25');
    return response.data;
  },
  fetchPostById: async postId => {
    const response = await axios.get(`https://dummyjson.com/docs/posts/${postId}`);
    return response.data;
  },
};
