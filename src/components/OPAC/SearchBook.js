import React, { useEffect, useState }   from 'react';
import Button from "react-bootstrap/Button"
import { AiFillCarryOut, AiFillDelete } from "react-icons/ai";
import Book from './Book';
import Books from './Books';
import SearchResult from './SearchResult';
import { useHistory } from "react-router-dom";

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

    useEffect(() => {
        props.adminLogin(props.isLoggedIn);
    },[props.isLoggedIn]);

    const [searchWord, setSearchWord]=useState('');
    const [searchOption, setSearchOption]=useState('title');
        
    const history = useHistory();

    const searchOptionSelectChanged = (e) => {
        setSearchOption(e.target.value);
    }

    const searchValueChanged = (e) => {
        setSearchWord(e.target.value);
    }    
    
    const btnSearchClick = () => {
        if (searchWord.trim().length > 0){
            let searchResult = props.books.filter(item => item[searchOption].toLowerCase().indexOf(searchWord) > -1);   
           
            if (searchResult.length > 0){
                props.BookSearchResult(searchResult);                
                history.push("/searchresult");
            }
            else{
                alert("No books found for keyed-in Search value")
            }
        }
    }

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
                        <Col className="searchInput" xs="auto">
                            <Button variant="success" onClick={btnSearchClick} >Search</Button>
                        </Col>
                    </Row>
                </div>
            </div>            
        </div>      
    );
}

export default SearchBook;