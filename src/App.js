import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
  onSubmitSearch = (term) => {
    console.log(term)
  }
  render() {
    return (
     <div className="ui container" style={{ marginTop: '10px' }}>
       <Search onsubmit={this.onSubmitSearch}/>
     </div>
    );
  }
}

export default App;
