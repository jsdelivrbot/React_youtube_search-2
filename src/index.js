import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(< App />, document.querySelector('.container'));
