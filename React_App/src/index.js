import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';//library
import SearchBar from './components/search_bar';//associated file
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from'./components/video_detail';
//declare variable to hold this api key
const  API_KEY='AIzaSyD8TfxuRNsBoN7SxRUS7s3JjtaISYrA-T0';


//create a new component .this component should produce some html
//<SearchBar/>class based component//function based components can be based upn class based components
// the App () will going to fetch data from youtube api

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos :[] ,
      selectedVideo: null
    };// video selection
   this.videoSearch('surfboard')

  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]

      });
      //this.setState({videos:videos});
    });
  }
  render(){
   const videoSearch = _.debounce((term) =>{this.videoSearch(term)},300);//throttling speed of search

    return (<div>
  <SearchBar onSearchTermChange ={videoSearch}/>
  <VideoDetail video={this.state.selectedVideo}/>
  <VideoList
  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
  videos={this.state.videos}/>

      </div>);
  }
//this is jsx
}
//Take this components generated html and put it on the page(in the dom)
ReactDOM.render(<App/>,document.querySelector('.container'));
