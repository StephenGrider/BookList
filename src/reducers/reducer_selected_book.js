// reducers/reducer_selected_book.js

import { SELECT_BOOK } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case SELECT_BOOK:
      return action.payload;
  }

  return state;
}
