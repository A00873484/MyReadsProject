import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../components/Shelf';


const booksList = {
    "Currently Reading":[
        {title:"To Kill a Mockingbird", author:"Harper Lee", image:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'},
    ]
}

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