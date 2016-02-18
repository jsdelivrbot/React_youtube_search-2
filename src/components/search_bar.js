import React from 'react';

class SearchBar extends React.Component {
  render() {

    // return < input onCange = { event => console.log(event.target.value)};

    return < input onChange={this.onInputChange}/>;
  }

  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;
