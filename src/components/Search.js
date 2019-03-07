import React, { Component } from 'react';

class Search extends Component {
    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.term)
        this.props.onsubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })} />

                    </div>
                </form>
            </div>
        )
    }
}

export default Search;