// src/components/app.js
import React from 'react';

import BookList from './book_list';
import BookDetail from './book_detail';

const App = () => {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  );
};

export default App;
