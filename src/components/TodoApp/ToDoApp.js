import React, { useState } from 'react';
import TaskRow from './TaskRow';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import AddTask from './AddTask';
//by Rodelio M. Rodriguez

const ToDoApp = (props) => {
    const [tasks,setTasks]=useState([
        {name: "eat", status: "pending"},
        {name: "code", status: "pending"},
        {name: "sleep", status: "done"}
    ])
    
    const addNewTask = (taskName) => {
        let tasksCopy = [...tasks];

        let index = tasksCopy.findIndex(item => item.name === taskName);

        if (index !== -1){
            alert("Cannot add, task already existing!");
        }
        else
        {
            let newItem = {
                name : taskName,
                status: 'pending'
            }    
            
            tasksCopy.push(newItem);
    
            setTasks(tasksCopy);
        }        
    }

    const markDone = (item) => {
        let tasksCopy = [...tasks];

        const index = tasksCopy.findIndex(element => element.name === item.name);

        tasksCopy[index] = item;

        setTasks(tasksCopy);
    }

    const removeFromDone = (itemName) => {
        
        let tasksCopy = [...tasks];

        const index = tasksCopy.findIndex(element => element.name === itemName);

        tasksCopy[index].status='pending';

        setTasks(tasksCopy);
    }

    const removeItem = (itemName) => {
        
        let tasksCopy = [...tasks];

        const index = tasksCopy.findIndex(element => element.name === itemName);

        tasksCopy.splice(index, 1);

        setTasks(tasksCopy);
    }
    
    let pending = tasks.filter(item => item.status === 'pending')

    let pendingTasks = pending.map(item => 
        <TaskRow key={item.name} task={item}  markDone={markDone} deleteItem={removeItem} />
        );

    let notPending = tasks.filter(item => item.status === 'done')

    let finishedTasks = notPending.map(item => 
        <TaskRow key={item.name} task={item} deleteItem={removeFromDone} />
        );

    return(
        <div>
            <AddTask addNewTask={addNewTask} />
            {pendingTasks.length === 0 ? <h1>No Pending Tasks</h1> : 
                <Table variant="light">
                    <thead>
                        <tr>
                            <th colSpan="2">Pending Tasks</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {pendingTasks}
                    </tbody>                   
                </Table>
            }

            {finishedTasks.length === 0 ? <h1>No Done Tasks</h1> : 
                <Table variant="light">
                    <thead>
                        <tr>
                            <th colSpan="2">Done Tasks</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {finishedTasks}
                    </tbody>                   
                </Table>
            }
        </div>
    );
}


// class ToDoApp extends React.Component{
//     state = {
//         tasks: [
//             {name: "eat", status: "pending"},
//             {name: "code", status: "pending"},
//             {name: "sleep", status: "done"}
//         ],
//         taskName: ''
//     }
    
//     inputChangeHandler = (e) => {
//         this.setState({
//             taskName: e.target.value
//         })
//     }

//     addNewTask = () => {
//         let tasksCopy = [...this.state.tasks];

//         let index = tasksCopy.findIndex(item => item.name === this.state.taskName);

//         if (index !== -1){
//             alert("Cannot add, task already existing!");
//         }
//         else
//         {
//             let newItem = {
//                 name : this.state.taskName,
//                 status: 'pending'
//             }    
            
//             tasksCopy.push(newItem);
    
//             this.setState({
//                 tasks: tasksCopy,
//                 taskName: ''
//             })
//         }        
//     }

//     markDone = (item) => {
//         let tasksCopy = [...this.state.tasks];

//         const index = tasksCopy.findIndex(element => element.name === item.name);

//         tasksCopy[index] = item;

//         this.setState({
//             tasks: tasksCopy
//         });
//     }

//     removeFromDone = (itemName) => {
        
//         let tasksCopy = [...this.state.tasks];

//         const index = tasksCopy.findIndex(element => element.name === itemName);

//         tasksCopy[index].status='pending';

//         this.setState({
//             tasks: tasksCopy
//         });
//     }

//     removeItem = (itemName) => {
//         //alert('removeItem');
//         let tasksCopy = [...this.state.tasks];

//         const index = tasksCopy.findIndex(element => element.name === itemName);

//         tasksCopy.splice(index, 1);

//         this.setState({
//             tasks: tasksCopy
//         });
//     }
    
//     render(){

//         let pending = this.state.tasks.filter(item => item.status === 'pending')

//         let pendingTasks = pending.map(item => 
//             <TaskRow key={item.name} task={item}  markDone={this.markDone} deleteItem={this.removeItem} />
//             );

//         let notPending = this.state.tasks.filter(item => item.status === 'done')

//         let finishedTasks = notPending.map(item => 
//             <TaskRow key={item.name} task={item} deleteItem={this.removeFromDone} />
//             );

//         return(
//             <div>

//                 <Table variant="light">
//                         <thead>
//                             <tr>
//                                 <th>New Task</th>
//                             </tr>                        
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     <input 
//                                         type="text"
//                                         name="name"
//                                         value={this.state.taskName}
//                                         onChange={this.inputChangeHandler}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <Button onClick={this.addNewTask}>+Add Task</Button>
//                                 </td>
//                             </tr>
//                         </tbody>                   
//                 </Table>

//                  {pendingTasks.length === 0 ? <h1>No Pending Tasks</h1> : 
//                     <Table variant="light">
//                         <thead>
//                             <tr>
//                                 <th colSpan="2">Pending Tasks</th>
//                             </tr>                        
//                         </thead>
//                         <tbody>
//                             {pendingTasks}
//                         </tbody>                   
//                     </Table>
//                 }

//                 {finishedTasks.length === 0 ? <h1>No Done Tasks</h1> : 
//                     <Table variant="light">
//                         <thead>
//                             <tr>
//                                 <th colSpan="2">Done Tasks</th>
//                             </tr>                        
//                         </thead>
//                         <tbody>
//                             {finishedTasks}
//                         </tbody>                   
//                     </Table>
//                 }
//             </div>
//         );
//     }
// }

export default ToDoApp;