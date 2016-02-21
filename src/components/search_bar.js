import React from 'react';

class SearchBar extends React.Component {

  // for state we need constractor function

  constructor(props){
    super(props);

    // initialize the state of term as a empty string
    this.state = { term: ''};
  }

  render() {

    return (
      <div>
        <input
          value={this.state.term}
          onChange = { event => this.setState({ term: event.target.value})}
        />
      </div>)

    // return < input onChange={this.onInputChange}/>;
  }

  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
