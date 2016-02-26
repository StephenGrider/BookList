import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <div className="header">
      <h3>App Directory</h3>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
