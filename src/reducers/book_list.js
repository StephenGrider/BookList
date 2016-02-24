// reducers/book_list.js
// http://jsonplaceholder.typicode.com/users

import _ from 'lodash';
import { FETCH_BOOKS, FETCH_BOOK } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      const booksById = _.mapKeys(action.payload.data, 'id');
      return _.extend({}, state, booksById);
    case FETCH_BOOK:
      const book = action.payload.data;
      return _.extend({}, state, { [book.id]: book });
  }

  return state;
}
