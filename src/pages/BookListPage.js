import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../components/Shelf';

const BookListPage = ({shelves, updateShelf}) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                {
                    Object.keys(shelves).map((shelfKey)=>{
                        let obj = {};
                        obj[shelfKey] = shelves[shelfKey];
                        return <Shelf key={shelfKey} shelf={obj} updateShelf={updateShelf}/>
                    })
                }
            </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
)

export default BookListPage;