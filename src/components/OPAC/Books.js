import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

const Books = (props) => {
    return (
        <>
            <br />
            <div class="row">
        <div class="col-md-9"><h1 class="page-header">Books </h1></div>
        <div class="col-md-3"><h1 class="page-header">
        {props.isLoggedIn ? <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bs-example-modal-lg">Add New Entry</button> : '' }
            
            </h1></div>
    </div>
            <Table responsive variant="light">
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Edition</th>
                        <th>Publication</th>
                        {props.isLoggedIn ? <th>Action</th> : '' }
                    </tr>
                </thead>
                <tbody>
                {props.books}
                </tbody>
            </Table>
        </>
    );
}

export default Books;