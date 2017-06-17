import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API_key from './components/API_key.js';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(){
    super();
    this.state = { videos: [] };

    YTSearch({key: API_key, term: 'surfboards'}, (videos) =>{
    this.setState({ videos });
});
  };

  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
