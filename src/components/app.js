// src/components/app.js
import React from 'react';

import Header from './header';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default App;
