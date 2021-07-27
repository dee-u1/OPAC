import React, { useEffect, useState }   from 'react';
import Button from "react-bootstrap/Button"
import { AiFillCarryOut, AiFillDelete } from "react-icons/ai";
import Book from './Book';
import Books from './Books';

// import Nav from "react-bootstrap/Nav"
// import Navbar from "react-bootstrap/Navbar"
// import Container from "react-bootstrap/Container"
import FormControl from "react-bootstrap/FormControl"
//import { LinkContainer } from 'react-router-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown  from 'react-bootstrap/Dropdown'
// import BootstrapSelect from 'react-bootstrap-select-dropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './opac.css';

const SearchBook = (props) => {
    const [books,setBooks] = useState(
        [
            {"ISBN" : "001", "title": "Northanger Abbey", "author": "Austen, Jane", "edition": 1814, "publication": "Penguin"},
            {"ISBN" : "002", "title": "War and Peace", "author": "Tolstoy, Leo", "edition": 1865, "publication": "Penguin"},
            {"ISBN" : "003", "title": "Anna Karenina", "author": "Tolstoy, Leo", "edition": 1875, "publication": "Penguin"},
            {"ISBN" : "004", "title": "Mrs. Dalloway", "author": "Woolf, Virginia", "edition": 1925, "publication": "Harcourt Brace"},
            {"ISBN" : "005", "title": "The Hours", "author": "Cunnningham, Michael", "edition": 1999, "publication": "Harcourt Brace"},
            {"ISBN" : "006", "title": "Huckleberry Finn", "author": "Twain, Mark", "edition": 1865, "publication": "Penguin"},
            {"ISBN" : "007", "title": "Bleak House", "author": "Dickens, Charles", "edition": 1870, "publication": "Random House"},
            {"ISBN" : "008", "title": "Tom Sawyer", "author": "Twain, Mark", "edition": 1862, "publication": "Random House"},
            {"ISBN" : "009", "title": "A Room of One's Own", "author": "Woolf, Virginia", "edition": 1922, "publication": "Penguin"},
            {"ISBN" : "010", "title": "Harry Potter", "author": "Rowling, J.K.", "edition": 2000, "publication": "Harcourt Brace"},
            {"ISBN" : "011", "title": "One Hundred Years of Solitude", "author": "Marquez", "edition": 1967, "publication": "Harper  Perennial"},
            {"ISBN" : "012", "title": "Hamlet, Prince of Denmark", "author": "Shakespeare", "edition": 1603, "publication": "Signet  Classics"},
            {"ISBN" : "013", "title": "Lord of the Rings", "author": "Tolkien, J.R.", "edition": 1937, "publication": "Penguin"},
        ]
    )
    const [searchWord, setSearchWord]=useState('');
    const [searchOption, setSearchOption]=useState('title');
    
    useEffect(() => {
        if (props.isLoggedIn === false) {
           props.adminLogin(false);
        }
    },[props.isLoggedIn]);

    const searchOptionSelectChanged = (e) => {
        setSearchOption(e.target.value);
    }

    const searchValueChanged = (e) => {
        setSearchWord(e.target.value);
    }

    let searchBooks = [];
    if (searchWord){
        searchBooks = books.filter(item => item[searchOption].toLowerCase().indexOf(searchWord) > -1);   
    }

    let booksDisplay = searchBooks.map(book => <Book key={book.ISBN} book={book} isLoggedIn={false} />)

    return (
        <div>
            <div className="search-wrapper">
                <div className="search-inner">
                    <Row>
                        <Col className="searchInput" xs="auto">
                            <Form.Select aria-label="Search Option" defaultValue={'DEFAULT'} onChange={searchOptionSelectChanged} >
                                <option value="DEFAULT" disabled>Search Option</option>
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="publication">Publication</option>
                            </Form.Select>
                        </Col>
                        <Col className="searchInput">
                            <FormControl 
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                onChange={searchValueChanged}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            {booksDisplay.length > 0 ? <Books books={booksDisplay} isLoggedIn={false} ></Books> : ''};
        </div>      
    );
}

export default SearchBook;