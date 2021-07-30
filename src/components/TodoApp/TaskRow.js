import React, { useEffect, useState }   from 'react';
import Button from "react-bootstrap/Button"
import { AiFillCarryOut, AiFillDelete } from "react-icons/ai";

const TaskRow = (props) => {
    const [name,setName]=useState(props.task.name);
    const [status,setStatus]=useState(props.task.status); 
    
    const editBtnClickHandler = () => {
        let item = {
            name: name,
            status: 'done'
        }

        props.markDone(item);
    }

    const deleteBtnClickHandler = () => {
        props.deleteItem(name);
    }

    return(            
        <tr>
            <td>
                {name} 
            </td>
            <td width="50%">
                {status === 'pending' &&
                        <Button variant="success" onClick={editBtnClickHandler}><AiFillCarryOut /></Button>
                }{' '}

                <Button variant="danger" onClick={deleteBtnClickHandler}><AiFillDelete /></Button>
            </td>
        </tr>
    );
}

// class TaskRow extends React.Component{
//     state = {
//         name: this.props.task.name,
//         status: this.props.task.status
//     }

//     editBtnClickHandler = () => {
//         let item = {
//             name: this.state.name,
//             status: 'done'
//         }

//         this.props.markDone(item);
//     }

//     deleteBtnClickHandler = () => {
//         this.props.deleteItem(this.state.name);
//     }


//     render(){        
//         return(            
//             <tr>
//                 <td>
//                     {this.props.task.name} 
//                 </td>
//                 <td width="50%">
//                     {this.state.status === 'pending' &&
//                          <Button variant="success" onClick={this.editBtnClickHandler}><AiFillCarryOut /></Button>
//                     }{' '}

//                     <Button variant="danger" onClick={this.deleteBtnClickHandler}><AiFillDelete /></Button>
//                 </td>
//             </tr>
//         );
//     }
// }

export default TaskRow;