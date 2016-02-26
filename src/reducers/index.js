// ./src/reducers/index.js

import { combineReducers } from 'redux';
import BookList from './book_list';
import posts from './reducer_posts';
import selectedPostIds from './reducer_selection';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  books: BookList,
  posts,
  form,
  selectedPostIds
});

export default rootReducer;
