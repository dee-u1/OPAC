import React from 'react';
import './ItemBox.css';
import Button from "react-bootstrap/Button"


const ItemBox = (props) => {

    const addToCart = (orderedItem) => {
        let newItem = {
            name : orderedItem.name,
            quantity: 1,
            price: orderedItem.price,
            image: orderedItem.image,
            id: orderedItem.id
        }

        props.parentCallback(newItem);
    }

    const deleteBtnClickHandler = () => {
        props.deleteItem(props.item)
    }

    const editBtnClickHandler = () => {
        props.updateEditItem(props.item);
    }
    
    let {name, price, image, category} = props.item;

    return(
        <div className="flex-row-item">
            <div className="left">
                <img src={image} alt={name} />
            </div>
            <div className="right">
                <strong>{name}</strong><br />
                <small>Php {price}</small><br />
                <small>{category}</small><br />
                <Button variant="secondary" onClick={() => addToCart(props.item)}>Order</Button>{' '}
                <Button variant="secondary" onClick={editBtnClickHandler}>Edit</Button>{' '}
                <Button variant="secondary" onClick={deleteBtnClickHandler}>Delete</Button>
            </div>
        </div>
    );
}


// class ItemBox extends React.Component{

//     addToCart = (orderedItem) => {
//         let newItem = {
//             name : orderedItem.name,
//             quantity: 1,
//             price: orderedItem.price,
//             image: orderedItem.image,
//             id: orderedItem.id
//         }

//         this.props.parentCallback(newItem);
//     }

//     deleteBtnClickHandler = () => {
//         this.props.deleteItem(this.props.item)
//     }

//     editBtnClickHandler = () => {
//         this.props.updateEditItem(this.props.item);
//     }

//     render(){
//         let {name, price, image, category} = this.props.item;
//         return(
//             <div className="flex-row-item">
//                 <div className="left">
//                     <img src={image} alt={name} />
//                 </div>
//                 <div className="right">
//                     <strong>{name}</strong><br />
//                     <small>Php {price}</small><br />
//                     <small>{category}</small><br />
//                     <Button variant="secondary" onClick={() => this.addToCart(this.props.item)}>Order</Button>{' '}
//                     <Button variant="secondary" onClick={this.editBtnClickHandler}>Edit</Button>{' '}
//                     <Button variant="secondary" onClick={this.deleteBtnClickHandler}>Delete</Button>
//                 </div>
//             </div>
//         );
//     }
// }

export default ItemBox;