import React, { Component } from 'react';

class Shelf extends Component {

    render() {
        let mappedBooks = this.props.shelf.map((e, index) => {
            return <h2 key={index}>{e}</h2>;
        });

        if (this.props.shelf.length !== 0) {
            return (
                <div className='shelfBox'>
                    <button onClick={this.props.clearShelf}>Clear Shelf</button>
                    <div className='Shelf'>
                        <div className='bookTitles'>{mappedBooks}</div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='shelfBox'>
                    {/* <button onClick={this.props.clearShelf}>Clear Shelf</button> */}
                    <div className='Shelf'>
                        <div className='bookTitles empty' >You don't have any books!</div>
                    </div>
                </div>
            )
        }
    }
}

export default Shelf