import React, { useEffect, useState }   from 'react';
import Button from "react-bootstrap/Button"
import { AiFillCarryOut, AiFillDelete } from "react-icons/ai";
import Book from './Book';
import Books from './Books';
import Login from './Login';
import SearchBook from './SearchBook';


import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
// import FormControl from "react-bootstrap/FormControl"
// import { LinkContainer } from 'react-router-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown  from 'react-bootstrap/Dropdown'
// import BootstrapSelect from 'react-bootstrap-select-dropdown';
// import Form from 'react-bootstrap/Form';

import {
    MemoryRouter,
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useHistory
  } from "react-router-dom";

import './opac.css';

const OPAC = (props) => {
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
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const adminLogin=(e)=>{
        setIsLoggedIn(e);        
    }

    const removeBook = (ISBN) => {
        
        let booksCopy = [...books];

        const index = booksCopy.findIndex(element => element.ISBN === ISBN);

        booksCopy.splice(index, 1);

        setBooks(booksCopy);
    }

    let booksDisplay = books.map(book => 
        <Book 
            key={book.ISBN} 
            book={book} 
            isLoggedIn={isLoggedIn} 
            deleteBook={removeBook}
        />)

    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                <Container>
                <Navbar.Brand as={Link} to="/">Online Public Access Catalogue</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to='/books'>Books</Nav.Link>
                    </Nav>
                    {isLoggedIn ?
                        <Nav>
                            <Nav.Link as={Link} to="/logout">Log-out</Nav.Link>
                        </Nav> :
                        <Nav>
                            <Nav.Link as={Link} to="/login">Log-in</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
            <Route path="/books">
                <Books books={booksDisplay} adminLogin={adminLogin} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/login">
                <Login adminLogin={adminLogin} />
            </Route>
            <Route path="/logout">
                <SearchBook adminLogin={adminLogin} isLoggedIn={false} />
            </Route>
            <Route path="/">
                <SearchBook adminLogin={adminLogin}  isLoggedIn={isLoggedIn} />
            </Route>
            </Switch>
        </Router>            
    );
}

export default OPAC;