import axios from 'axios';
import {
  SELECT_BOOK,
  FETCH_BOOKS
} from './types';

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  };
}

export function fetchBooks() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return function(dispatch) {
    request.then(function(response) {
      dispatch({
        type: FETCH_BOOKS,
        payload: response
      });
    });
  }
}
