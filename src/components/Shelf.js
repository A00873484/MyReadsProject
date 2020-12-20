import React, { Component } from 'react';
import BookItem from './BookItem';

class Shelf extends Component{

    state = {
        shelfName: ""
    }

    componentDidMount(){
        let shelfName = "";
        const type = Object.keys(this.props.shelf)[0];
        if(type === 'currentlyReading'){
            shelfName = "Currently Reading";
        } else if(type === 'wantToRead'){
            shelfName = "Want To Read";
        } else if(type === 'read'){
            shelfName = "Read";
        } else {
            shelfName = "Error";
        }
        this.setState({shelfName});
    }

    render(){ 
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.state.shelfName}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    Object.values(this.props.shelf)[0].map((book)=>{
                        return (<li key={book.id}>
                            <BookItem id={book.id} title={book.title} authors={book.authors} image={book.imageLinks.thumbnail} isSelected={book.shelf} updateShelf={this.props.updateShelf}/>
                        </li>)
                    })
                }
            </ol>
            </div>
        </div>
        )
    }
}

export default Shelf;