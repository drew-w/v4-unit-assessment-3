import './App.css';
import Header from './Components/Header';
import Bookist from './Components/Booklist'
import Shelf from './Components/Shelf'
import data from './data'
import SearchBar from './Components/SearchBar'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (newBook) => {
    let copy = [...this.state.shelf];
      if (!copy.includes(newBook)) {
        copy.push(newBook);
      }
      this.setState({
      shelf: copy
    })
  }

  clearShelf = () => {
    this.setState({
      shelf: []
    })
  }

  filterBooks = (input) => {
    let inputLower = input.toLowerCase();
    let reduced = this.state.books.reduce(((titles, current) => {
      let titleLower = current.title.toLowerCase();
      if (titleLower.includes(inputLower)) {
        let titleArr = { id: current.id, title: current.title, author: current.author, img: current.img }
        titles.push(titleArr)
      }
      return titles
    }), [])

    this.setState({
      books: reduced
    })

  }

  reset = () => {
    this.setState({
      books: data
    })
  }

  render() {
    return (
      <main>
        <div className="App">
          <Header />
          <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
          <div className='content'>
            <Bookist books={this.state.books} addToShelf={this.addToShelf} />
            <div className='line' />
            <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
          </div>
        </div>
      </main>

    );
  }
}

export default App;
