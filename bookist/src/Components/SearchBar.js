import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = (input) => {
        this.setState({
            input: input
        })
    }

    handleClick = () => {
        this.props.filterBooks(this.state.input)
    }

    handleClear = () => {
        this.setState({
            input: ''
        })
        this.props.reset();
    }

    render() {
        return (
            <div className='SearchBar'>
                <div className='searchBox'>
                    <input type='text' onChange={e => this.handleChange(e.target.value)} value={this.state.input}/>
                    <button onClick={this.handleClick}>Search</button>
                    <button onClick={this.handleClear}>Clear Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;