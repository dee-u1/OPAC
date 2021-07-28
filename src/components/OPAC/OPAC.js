import React, { useEffect, useState }   from 'react';
import Books from './Books';
import Students from './Students';
import Login from './Login';
import SearchBook from './SearchBook';
import SearchResult from './SearchResult';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import AddEditStudent from './AddEditStudent';
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
    const [students,setStudents] = useState(
        [
            {
                IDNum: '0001',
                firstName: 'Rodelio',
                lastName: 'Rodriguez',
                userName: 'dee-u',
                password: 'mahaba',
                confirmpassword: ''
            },
            {
                IDNum: '0002',
                firstName: 'Bill',
                lastName: 'Gates',
                userName: 'bill',
                password: 'mahaba',
                confirmpassword: ''
            }
    ]
    )
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showDataEntry, setShowDataEntry]=useState(false);

    const history = useHistory();

    const adminLogin=(e)=>{
        setIsLoggedIn(e);        
    }
   
    const setBookSearchResult = (data) => {
        setSearchResult(data);
    }

    const removeBook = (ISBN) => {        
        let booksCopy = [...books];
        const index = booksCopy.findIndex(element => element.ISBN === ISBN);
        booksCopy.splice(index, 1);
        setBooks(booksCopy);
    }

    const addNewBook = (book) => {
        let booksCopy = [...books];
        let index = booksCopy.findIndex(item => item.ISBN === book.ISBN);
        if (index !== -1){
            alert("Cannot add, book's ISBN is already existing!");
        }
        else {            
            booksCopy.push(book);    
            setBooks(booksCopy);
        }        
    }

    const updateBook = (book) => {
        let booksCopy = [...books];
        const index = booksCopy.findIndex(item => item.ISBN === book.ISBN);
        booksCopy[index] = book;
        setBooks(booksCopy);
    }
   
    const handleClose = (e) => {
        setShowDataEntry(e);
    };

    const addNewStudent = (student) => {
        let studentsCopy = [...students];
        let index = studentsCopy.findIndex(item => item.IDNum === student.IDNum);
        if (index !== -1){
            alert("Cannot add new student, ID No. is already existing!");
        }
        else {            
            studentsCopy.push(student); 
            setStudents(studentsCopy);
        }        
    }

    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                <Container>
                <Navbar.Brand as={Link} to="/">Online Public Access Catalogue</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                       
                        {isLoggedIn ?
                            <Nav>
                            <Nav.Link as={Link} to='/books'>Books</Nav.Link> 
                            <Nav.Link as={Link} to='/students'>Students</Nav.Link> 
                            </Nav>
                            : ''
                        }
                    </Nav>
                    {isLoggedIn ?
                        <Nav>
                            <Nav.Link as={Link} to="/logout">Log-out</Nav.Link>
                        </Nav> :
                        <Nav>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/login">Log-in</Nav.Link>                            
                        </Nav>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
            <Route path="/books">
                <Books books={books} adminLogin={adminLogin} isLoggedIn={isLoggedIn} addNewBook={addNewBook} deleteBook={removeBook} updateBook={updateBook} />
            </Route>
            <Route path="/students">
                <Students students={students} />
            </Route>
            <Route path="/login">
                <Login show={true} handleClose={handleClose} adminLogin={adminLogin} />
            </Route>
            <Route path="/logout">
                <SearchBook adminLogin={adminLogin} isLoggedIn={false} BookSearchResult={setBookSearchResult} books={books} />
            </Route>
            <Route path="/searchresult">
                <SearchResult isLoggedIn={isLoggedIn} searchBooks={searchResult} />
            </Route>
            <Route path="/register">
                <AddEditStudent show={true} handleClose={handleClose} addStudent={addNewStudent} />
            </Route>
            <Route path="/">
                <SearchBook adminLogin={adminLogin} isLoggedIn={isLoggedIn} BookSearchResult={setBookSearchResult} books={books}  />
            </Route>
            </Switch>
        </Router>            
    );
}

export default OPAC;