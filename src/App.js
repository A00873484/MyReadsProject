import React from 'react'
// import * as BooksAPI from './BooksAPI'
import SearchPage from './pages/SearchPage'
import BookListPage from './pages/SearchPage'
import './App.css'

class BooksApp extends React.Component {
  
  state = {
  }

  render() {
    return (
      <div className="app">
        <Router path="/home" Component={BookListPage}/>
        <Router path="/search" Component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
