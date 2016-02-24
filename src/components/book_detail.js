// components/book_detail.js
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BookDetail extends Component {
  componentWillMount() {
    this.props.fetchBook(this.props.params.id);
  }

  render() {
    const book = _.find(this.props.books, { id: parseInt(this.props.params.id) });

    if (!book) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        Name: {book.name}<br />
        Email: {book.email}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, actions)(BookDetail);
