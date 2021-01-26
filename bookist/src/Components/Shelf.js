import React, { Component } from 'react';

class Shelf extends Component {

    render() {
        let mappedBooks = this.props.shelf.map((e, index) => {
            return <h2 key={index}>{e}</h2>;
        });
        return (
            <div className='shelfBox'>
                <button onClick={this.props.clearShelf}>Clear Shelf</button>
                <div className='Shelf'>
                    <div className='bookTitles'>{mappedBooks}</div>
                </div>
            </div>
        )
    }
}

export default Shelf