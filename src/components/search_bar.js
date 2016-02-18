import React from 'react';

class SearchBar extends React.Component {

  // for state we need constractor function

  constractor(props){
    super(props);

    // initialize the state of term as a empty string
    this.state = { term: ''};
  }
  render() {

    // return < input onCange = { event => console.log(event.target.value)};

    return < input onChange={this.onInputChange}/>;
  }

  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;
