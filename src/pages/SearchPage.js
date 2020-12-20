import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI.js'
import BookItem from '../components/BookItem.js';

class SearchPage extends Component {
    
    state = {
        books:[]
    }

    doSearch = (e) => {
        let searchItem = e.target.value;
        search(searchItem).then((res)=>{
            this.setState({books:Array.isArray(res)?res:[]});
            console.log(res);
        });
    }
    render(){
        return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.doSearch}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.books&&this.state.books.map((book)=>(<li key={book.id}>
                            <BookItem id={book.id} title={book.title} authors={book.authors} image={book.imageLinks?book.imageLinks.thumbnail:""} isSelected={book.shelf} updateShelf={this.props.updateShelf}/>
                        </li>))
                    }
                </ol>
            </div>
        </div>)
    }
}

export default SearchPage;