import React, { Component } from 'react';


class Booklist extends Component {
    constructor() {
        super();
    }

    render() {
        let mappedBooks = this.props.books.map((e) => {
            return <div className = 'eachBook' key={this.props.books.id}>
                <img onClick={() => this.props.addToShelf(e.title)} src={e.img} alt='book cover' />
                <div className = 'textBox'>
                    <p>{e.title}, by {e.author}</p>
                    
                </div>
            </div>
        })
        return (

            <div className='Booklist'>{mappedBooks}</div>
        )
    }
}

export default Booklist;
