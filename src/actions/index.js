import { SELECT_BOOK } from './types';

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  };
}
