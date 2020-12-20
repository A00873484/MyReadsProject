import React from 'react'
import { Route } from 'react-router-dom'
import { getAll } from './BooksAPI.js'
// import * as BooksAPI from './BooksAPI'
import SearchPage from './pages/SearchPage'
import BookListPage from './pages/BookListPage'
import './App.css'

class BooksApp extends React.Component {
  
  state = {
    books:[],
    shelves:{}
  }

  componentDidMount(){
    this.updateShelf();
  }

  updateShelf = () => {
    getAll().then((books)=>{
      let shelves = {};
      books.forEach((book)=>{
        if(shelves[book.shelf])
          shelves[book.shelf].push(book);
        else 
          shelves[book.shelf] = [];
      })
      this.setState({shelves, books});
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=><BookListPage shelves={this.state.shelves} updateShelf={this.updateShelf}/>}/>
        <Route path="/search" render={()=><SearchPage updateShelf={this.updateShelf} myBooks={this.state.books}/>}/>
      </div>
    )
  }
}

export default BooksApp
