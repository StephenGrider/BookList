import _ from 'lodash';
import { createSelector } from 'reselect';

const posts = state => state.posts
const selectedPostIds = state => state.selectedPostIds

const getSelectedPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.chain(selectedPostIds)
    .map((selected, id) => {
      if (selected) return Number(id);
    })
    .flatten()
    .compact()
    .value();

  return _.filter(posts, post => selectedPosts.indexOf(post.id) > -1);
};

export default createSelector(posts, selectedPostIds, getSelectedPosts);
