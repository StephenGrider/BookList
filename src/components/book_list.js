import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class BookList extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  renderListItem(book) {
    return (
      <li className="list-group-item">
        <Link to={`/users/${book.id}`}>{book.name}</Link>
      </li>
    );
  }

  renderList() {
    return _.map(this.props.books, this.renderListItem.bind(this));
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.props.color}
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps, actions)(BookList);
