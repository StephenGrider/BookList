import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import selectedPostsSelector from '../selectors/selected_posts';

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  onListItemCheck(post, event) {
    this.props.selectPost(post, event.target.checked);
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
        <h3>Selection Set</h3>
        <ul>
          {this.props.selectedPosts.map(post => <li>{post.title}</li>)}
        </ul>
        <h3>All Posts</h3>
        <ul>
          {this.props.posts.map(this.renderListItem.bind(this))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    selectedPosts: selectedPostsSelector(state)
  };
};

export default connect(mapStateToProps, actions)(PostList);
