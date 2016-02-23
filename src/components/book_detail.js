// components/book_detail.js
import React from 'react';
import { connect } from 'react-redux';

const BookDetail = (props) => {
  if (!props.book) {
    return <div>Click a book to get started</div>;
  }

  return (
    <div>
      Title: {props.book.title}<br />
      Pages: {props.book.pages}
    </div>
  );
};

export default connect(({selectedBook}) => ({book: selectedBook}))(BookDetail);
