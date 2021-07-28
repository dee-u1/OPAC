import React, { useEffect, useState }   from 'react';
import Button from "react-bootstrap/Button"
import { AiFillCarryOut, AiFillDelete } from "react-icons/ai";
import Book from './Book';
import Books from './Books';

import FormControl from "react-bootstrap/FormControl"
import InputGroup from 'react-bootstrap/InputGroup';

import './opac.css';

const SearchResult = (props) => {

    return (
        <>
            {props.searchBooks.length > 0 ? <Books books={props.searchBooks} isLoggedIn={false} ></Books> : null}               
        </>      
    );
}

export default SearchResult;