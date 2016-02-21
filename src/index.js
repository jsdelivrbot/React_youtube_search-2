import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBwX32dIfXXgmEHl2BjSheEJ7DcMA3ghHM';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTsearch({key: API_KEY, term: 'bangla movie'}, (data)=>{
      this.setState({ videos: data });
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(< App />, document.querySelector('.container'));
