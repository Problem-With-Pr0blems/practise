import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import store from './redux/store'
import PostPage from './pages/PostPage';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" exact component={PostsPage} />
          <Route path="/posts/:postId" component={PostPage} />
        </Routes>
        <PostsPage/>
      </div>
      </Provider>
  )
}

export default App;
