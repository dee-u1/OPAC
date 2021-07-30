import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

const AddTask = (props) => {
    const [taskName, setTaskName]=useState('');
        
    const inputChangeHandler = (e) => {
        setTaskName(e.target.value);
    }

    const AddNewTask = () => {
        props.addNewTask(taskName);
        setTaskName('');
    }

    return (
        <Table variant="light">
            <thead>
                <tr>
                    <th>New Task</th>
                </tr>                        
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input 
                            type="text"
                            name="name"
                            value={taskName}
                            onChange={inputChangeHandler}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button onClick={AddNewTask}>+Add Task</Button>
                    </td>
                </tr>
            </tbody>                   
        </Table>
    );
}

export default AddTask;