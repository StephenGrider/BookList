import _ from 'lodash';
import { SELECT_POST } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SELECT_POST:
      return _.extend({}, state, { [action.payload.post.id]: action.payload.selected })
  }

  return state;
}
