// reducers/book_list.js
// http://jsonplaceholder.typicode.com/users

import { FETCH_BOOKS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_BOOKS:
      return action.payload.data;
  }

  return state;
}
