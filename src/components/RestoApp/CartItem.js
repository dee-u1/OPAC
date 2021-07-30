import React from 'react';
import './ItemBox.css';

class CartItem extends React.Component{
    render(){
        let {name, price, image, quantity} = this.props.item;
        return(
            <div className="cart-row-item">
                <div className="left">
                    <img src={image} alt={name} />
                </div>
                <div className="right">
                    <strong>{name}</strong><br />
                    <strong>{quantity}</strong><br />
                    <strong>Php {price * quantity}</strong><br />
                </div>
            </div>
        );
    }
}

export default CartItem;