import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import reducers from './reducers';
import App from './components/app';
import BookList from './components/book_list';
import Main from './components/main';
import PostList from './components/post_list';
import BookDetail from './components/book_detail';
import PostNew from './components/post_new';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="users" component={BookList} />
        <Route path="users/:id" component={BookDetail} />
        <Route path="posts" component={PostList} />
        <Route path="posts/new" component={PostNew} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
