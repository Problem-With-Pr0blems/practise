// postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postsAPI } from './postsAPI';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await postsAPI.fetchPosts();
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const selectAllPosts = state => state.posts.posts;
export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId);

export default postsSlice.reducer;
