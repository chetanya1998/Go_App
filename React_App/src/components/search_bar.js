import React, {Component} from 'react';
//const Component = React.Component;

// const SearchBar =() =>{//earlier it was just returning only jsx
//   return <input /> ;//
// };

class SearchBar extends Component{
  constructor (props){
    super(props);
    this.state ={term : ''};//we are creating object which posses some property
  }
  //adding event handler  on component
  render(){
    return(
      <div className="search-bar">
      <input
        value={this.state.term} //controlled component
       onChange={event=>this.onInputChange(event.target.value)} />

      </div>
  );

}
//when user enter any value it doesnot change its value it only triggers event
//writing event handler function

onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
}
}
export default SearchBar;
