// ./src/reducers/index.js

import { combineReducers } from 'redux';
import BookList from './book_list';
import SelectedBook from './reducer_selected_book';
import posts from './reducer_posts';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  books: BookList,
  selectedBook: SelectedBook,
  posts,
  form
});

export default rootReducer;
