// ./src/reducers/index.js

import { combineReducers } from 'redux';
import BookList from './book_list';
import SelectedBook from './reducer_selected_book';

const rootReducer = combineReducers({
  books: BookList,
  selectedBook: SelectedBook
});

export default rootReducer;
