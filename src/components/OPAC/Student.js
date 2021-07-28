import React, { useEffect, useState }   from 'react';
import Button from "react-bootstrap/Button"
import { AiFillCarryOut, AiFillDelete, AiFillEdit } from "react-icons/ai";

const Student = (props) => {
    const [student, setBook] = useState({            
            IDNum: props.student.IDNum,
            firstName : props.student.firstName,
            lastName : props.student.lastName,
            userName : props.student.userName
        }
    );
    
    return(            
        <tr>
            <td>
                {student.IDNum} 
            </td>
            <td>
                {student.firstName} 
            </td>
            <td>
                {props.student.lastName} 
            </td>
            <td className="d-none d-lg-block">
                {props.student.userName} 
            </td>
        </tr>
    );
}

export default Student;