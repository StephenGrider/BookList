import axios from 'axios';
import {
  SELECT_BOOK,
  FETCH_BOOKS,
  FETCH_POSTS,
  FETCH_BOOK,
  SAVE_POST,
  SELECT_POST
} from './types';

export function selectPost(post, selected) {
  return {
    type: SELECT_POST,
    payload: { post, selected }
  };
}

export function savePost(postProps) {
  const url = 'http://jsonplaceholder.typicode.com/posts'
  const request = axios.post(url, postProps);

  return {
    type: SAVE_POST,
    payload: request
  }
}

export function fetchBook(id) {
  const request = axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);

  return {
    type: FETCH_BOOK,
    payload: request
  };
}

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
  };
}

export function fetchPosts() {
  const request = axios.get('http://jsonplaceholder.typicode.com/posts');

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
