import React, { Component } from 'react';
import unSplash from './api/unSplash';
import Search from './components/Search';


class App extends Component {
  state = {
    images: []
  }
  onSubmitSearch = async (term) => {
    console.log(term)
    const response = await unSplash.get('search/photos', {
      params: { query: term },
     
    })

    this.setState({ images: response.data.results })

   
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Search onsubmit={this.onSubmitSearch} />
        Found: { this.state.images.length }
      </div>
    );
  }
}

export default App;
