import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import AddEditBook from './AddEditBook';
import Modal from 'react-bootstrap/Modal'
import Book from './Book'
import BootTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { AiFillCarryOut, AiFillDelete, AiFillEdit } from "react-icons/ai";
import {useState} from 'react';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const Books2 = (props) => {
    const [showDataEntry, setShowDataEntry]=useState(false);
    const [editItem, setEditItem]=useState(null);
    //const [bookSource, setBookSource] = useState([]);

    // useEffect(() => {
    //     if (props.books) {
    //         setBookSource(props.books);
    //     }
    // },[props.books]);

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

    // let booksDisplay = props.books.map(book => 
    //     <Book 
    //         key={book.ISBN} 
    //         book={book} 
    //         isLoggedIn={props.isLoggedIn} 
    //         deleteBook={props.deleteBook}
    //         editBook={editBook}
    //     />)
    
    const saveUpdate=(book) => {
        props.updateBook(book);
    }

    const editBtnClickHandler = (e) => {       
        editBook(e, e.ISBN)
     }
 
     const deleteBtnClickHandler = (e) => {
         props.deleteBook(e);
     }

    const actionButtons = (cell, row, rowIndex) => {
        return (
            <>
            <Button variant="success" onClick={ () => editBtnClickHandler(row) } ><AiFillEdit /></Button>{' '}
            <Button variant="danger" onClick={ () => deleteBtnClickHandler(row.ISBN)  }><AiFillDelete /></Button>
            </>
        );
    };

    const columns = [
        {
          dataField: "ISBN",
          text: "ISBN"
        },
        {
          dataField: "title",
          text: "Title"
        },
        {
          dataField: "author",
          text: "Author"
        },
        {
            dataField: "edition",
            text: "Edition"
        },
        {
            dataField: "publication",
            text: "Publication"
        },
        {
          dataField: "",
          text: "Action",
          formatter: actionButtons
        }
    ];

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

            <BootTable keyField="id" data={props.books} columns={columns} pagination={paginationFactory()} />
        </>
    );
}

export default Books2;