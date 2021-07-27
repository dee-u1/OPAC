import React from 'react';
import Button from "react-bootstrap/Button"

class EditItemForm extends React.Component {
    state = {
        id: this.props.editItem.id,
        name : this.props.editItem.name,
        category: this.props.editItem.category,
        price: this.props.editItem.price,
        image: this.props.editItem.image
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateItem = (e) => {
        let newItem = {
            // id: this.state.id,
            // name : this.state.name,
            // category: this.state.category,
            // price: parseFloat(this.state.price),
            // image: this.state.image
            ...this.state //spreads the items of an object
        }
        this.props.updateParentItem(newItem);
    }

    render(){
        return(
            <div> 
                <label>Name:</label> <input 
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.inputChangeHandler}
                />
                <label>Category:</label> <input 
                    type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.inputChangeHandler}
                />
                <label>Price:</label> <input 
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.inputChangeHandler}
                />
                <label>Image:</label> <input 
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={this.inputChangeHandler}
                /><br /><br />
                <Button variant="primary" onClick={this.updateItem}>Edit Item</Button><br /><br />               
            </div>
        )
    }
}

export default EditItemForm