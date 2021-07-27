import React, { useEffect, useState }   from 'react';
import Button from "react-bootstrap/Button"
import { AiFillCarryOut, AiFillDelete, AiFillEdit } from "react-icons/ai";

const Book = (props) => {
    const [book, setBook] = useState({
            ISBN: props.book.ISBN,
            title : props.book.title,
            author: props.book.author,
            edition: props.book.edition,
            publication: props.book.publication
        }
    );
    
    const editBtnClickHandler = () => {
        
    }

    const deleteBtnClickHandler = () => {
        props.deleteBook(book.ISBN)
    }

    return(            
        <tr>
            <td>
                {book.ISBN} 
            </td>
            <td>
                {book.title} 
            </td>
            <td>
                {book.author} 
            </td>
            <td>
                {book.edition} 
            </td>
            <td>
                {book.publication} 
            </td>
            {props.isLoggedIn ?
                <td>
                    <Button variant="success" onClick={editBtnClickHandler}><AiFillEdit /></Button>{' '}
                    <Button variant="danger" onClick={deleteBtnClickHandler}><AiFillDelete /></Button>
                </td> : ''
            }
        </tr>
    );
}

export default Book;