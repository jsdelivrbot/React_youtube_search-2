import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBwX32dIfXXgmEHl2BjSheEJ7DcMA3ghHM';

YTsearch({key: API_KEY, term: 'bangla movie'}, (data)=>{
  console.log(data);
});

const App = () => {
  return <div>

    < SearchBar />

  </div>
};

ReactDOM.render(< App />, document.querySelector('.container'));
