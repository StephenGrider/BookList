import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

const PostNew = (props) => {
  const { fields: { title, body }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(props.savePost)}>
      <fieldset className="form-group">
        <label>Title</label>
        <input className="form-control" {...title} />
      </fieldset>
      <fieldset className="form-group">
        <label>Body</label>
        <input className="form-control" {...body} />
      </fieldset>
      <button action="submit">Submit Comment</button>
    </form>
  );
};

export default reduxForm({
  form: 'PostNew',
  fields: ['title', 'body']
}, null, actions)(PostNew);
