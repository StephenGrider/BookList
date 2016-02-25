import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  onListItemCheck(post, event) {

  }

  renderListItem(post) {
    return (
      <li>
        <input type="checkbox" onChange={this.onListItemCheck.bind(this, post)} />
        {post.title}
      </li>
    );
  }

  render() {
    return (
      <div className="post-list">
        <Link to="/posts/new">Create</Link>
        <ul>
          {this.props.posts.map(this.renderListItem.bind(this))}
        </ul>
      </div>
    );
  }
}

export default connect(({posts}) => ({posts}), actions)(PostList);
