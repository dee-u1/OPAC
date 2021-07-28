import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import AddEditBook from './AddEditBook';
import Modal from 'react-bootstrap/Modal'
import Book from './Book'
import {useState} from 'react';

const Books = (props) => {
    const [showDataEntry, setShowDataEntry]=useState(false);
    const [editItem, setEditItem]=useState(null);

    const displayDataEntry = () =>{
        setEditItem(null);
        setShowDataEntry(true);
    }
    
    const handleClose = (e) => {
        setShowDataEntry(e);
    };
    
    const editBook = (book, ISBN) => {
        setEditItem(book);
        setShowDataEntry(true);
    }

    let booksDisplay = props.books.map(book => 
        <Book 
            key={book.ISBN} 
            book={book} 
            isLoggedIn={props.isLoggedIn} 
            deleteBook={props.deleteBook}
            editBook={editBook}
        />)
    
    const saveUpdate=(book) => {
        props.updateBook(book);
    }

    return (
        <>
            {showDataEntry ?
                <AddEditBook show={showDataEntry} handleClose={handleClose} addNewItem={props.addNewBook} editItem={editItem} saveUpdate={saveUpdate} /> : ''
            }
            <div className="row">
                <div className="col-md-9"><h1 className="page-header">Books</h1></div>
                <div className="col-md-3"><h1 className="page-header">
                    {props.isLoggedIn ? 
                    <button type="button" onClick={displayDataEntry} className="btn btn-success" >Add New Entry</button> : null }                    
                    </h1></div>
            </div>
            <Table responsive variant="light">
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Edition</th>
                        <th className="d-none d-lg-block">Publication</th>
                        {props.isLoggedIn ? <th>Action</th> : null }
                    </tr>
                </thead>
                <tbody>
                {booksDisplay}
                </tbody>
            </Table>
        </>
    );
}

export default Books;