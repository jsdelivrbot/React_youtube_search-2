import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB8dOiDqQd0rm2YuzycbYUNr6V1flhGkQg';

const App = () => {
  return <div>

    < SearchBar />

  </div>
};

ReactDOM.render(< App />, document.querySelector('.container'));
