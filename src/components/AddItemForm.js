import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button"
import {useState} from 'react';

const AddItemForm = (props) => {
    // const [name, setName] = useState('');
    // const [category, setCategory] = useState('');
    // const [price, setPrice] = useState(0);
    // const [image, setImage] = useState('');

    // useEffect(() => {
    //     if (props.editItem) {
    //         setName(props.editItem.name);
    //         setCategory(props.editItem.category);
    //         setPrice(props.editItem.price);
    //         setImage(props.editItem.image);
    //     }
    // },[props.editItem]);

    // const addItem = (e) => {
    //     let newItem = {
    //         name : name,
    //         category: category,
    //         price: parseFloat(price),
    //         image: image
    //     }

    //     props.addNewItem(newItem);
    // }

    // const updateItem = (e) => {
    //     let newItem = { 
    //         id: props.editItem.id,
    //         name: name,
    //         category: category,
    //         price: parseFloat(price),
    //         image: image
    //     }
    //     props.updateItem(newItem);
    // }

    const [item, setItem] = useState({
            id: 0,
            name : '',
            category: '',
            price: 0,
            image: ''
        }
    );
    const [isInEdit, setEditMode] = useState(false);

    useEffect(() => {
        if (props.editItem) {
            setEditMode(true);
            setItem({
                id: props.editItem.id,
                name : props.editItem.name,
                category: props.editItem.category,
                price: parseFloat(props.editItem.price),
                image: props.editItem.image
            });
        }
    },[props.editItem]);

    const addItem = (e) => {
        let newItem = item;
        props.addNewItem(newItem);
        clearInputs();        
    }

    const clearInputs = () => {
        setItem({
            id: 0,
            name : '',
            category: '',
            price: 0,
            image: ''
        })
    }

    const updateItem = (e) => {
        let newItem = {
            id: item.id,
            name : item.name,
            category: item.category,
            price: parseFloat(item.price),
            image: item.image
        }            
        props.updateItem(newItem);
        clearInputs();
        setEditMode(false);
    }

    const btnClickHandler = () => {
        if (isInEdit) {
            updateItem();
        }
        else {
            addItem();
        }
    }

    const inputChangeHandler = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div> 
            <label>Name:</label> <input 
                type="text"
                name="name"
                value={item.name}
                onChange={inputChangeHandler}
            />
            <label>Category:</label> <input 
                type="text"
                name="category"
                value={item.category}
                onChange={inputChangeHandler}
            />
            <label>Price:</label> <input 
                type="number"
                name="price"
                value={item.price}
                onChange={inputChangeHandler}
            />
            <label>Image:</label> <input 
                type="text"
                name="image"
                value={item.image}
                onChange={inputChangeHandler}  
            /><br /><br />      
            <Button variant="primary" onClick={btnClickHandler} >{isInEdit ? 'Edit' : 'Add'}</Button>
           
        </div>
    )

}

// class AddItemForm extends React.Component {
//     state = {
//         name : '',
//         category: '',
//         price: 0,
//         image: ''
//     }

//     inputChangeHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     addNewItem = () => {
//         let newItem = {
//             name : this.state.name,
//             category: this.state.category,
//             price: parseFloat(this.state.price),
//             image: this.state.image
//         }

//         this.props.parentCallback(newItem);
//     }

//     render(){
//         return(
//             <div> 
//                 <label>Name:</label> <input 
//                     type="text"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.inputChangeHandler}
//                 />
//                 <label>Category:</label> <input 
//                     type="text"
//                     name="category"
//                     value={this.state.category}
//                     onChange={this.inputChangeHandler}
//                 />
//                 <label>Price:</label> <input 
//                     type="number"
//                     name="price"
//                     value={this.state.price}
//                     onChange={this.inputChangeHandler}
//                 />
//                 <label>Image:</label> <input 
//                     type="text"
//                     name="image"
//                     value={this.state.image}
//                     onChange={this.inputChangeHandler}
//                 /><br /><br />
//                 <Button variant="primary" onClick={this.addNewItem}>Add Item</Button>
               
//             </div>
//         )
//     }
// }

export default AddItemForm