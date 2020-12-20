import React from 'react';
import PropTypes, { string } from 'prop-types';
import { update, get } from '../BooksAPI.js';

const BookItem = ({id, title, authors, image, isSelected='none', updateShelf}) => {

    const changeStatus = (e) => {
        let selected = e.target.value;
        get(id).then((res)=>{
            update(res, selected).then((res)=>{
                updateShelf();
            });
        });
    }

    return <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+image+')', backgroundRepeat:"no-repeat", backgroundSize: "128px 193px" }}></div>
        <div className="book-shelf-changer">
            <select onChange={changeStatus} value={isSelected}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors&&authors.map((author, index)=>(index===0)?author:", "+author)}</div>
    </div>
}

BookItem.propTypes = {
    title: PropTypes.string,
    authors: PropTypes.array,
    image: PropTypes.string
}

export default BookItem;