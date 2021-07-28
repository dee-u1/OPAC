import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import AddEditBook from './AddEditBook';
import Modal from 'react-bootstrap/Modal'
import Book from './Book'
import Student from './Student'
import {useState} from 'react';

const Students = (props) => {

    let studentsDisplay = props.students.map(student => 
        <Student 
            key={student.IDNum} 
            student={student} 
        />)
    

    return (
        <>
            <div className="row">
                <div className="col-md-12"><h1 className="page-header">Students</h1></div>
            </div>
            <Table responsive variant="light">
                <thead>
                    <tr>
                        <th>ID No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                {studentsDisplay}
                </tbody>
            </Table>
        </>
    );
}

export default Students;