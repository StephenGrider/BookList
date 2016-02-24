import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Link to="/posts/new">Create</Link>
        <ul>
          {this.props.posts.map(post => <li>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(({posts}) => ({posts}), actions)(PostList);
