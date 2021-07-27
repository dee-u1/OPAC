import React from "react";
import ItemBox from './ItemBox.js';

import './ItemBox.css';

class ItemBoxes extends React.Component{
    state = {        
        items : [
            {
                id: 1,
                name: "Burger",
                price: 50,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
            },
            {
                id: 2,
                name: "Pizza",
                price: 100,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
            },
            {
                id: 3,
                name: "Fries",
                price: 25,
                category: "Food",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
            },
            {
                id: 4,
                name: "Coffee",
                price: 35,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
            },
            {
                id: 5,
                name: "Iced Tea",
                price: 45,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
            },
            {
                id: 6,
                name: "Hot Tea",
                price: 45,
                category: "Drink",
                status: 'active',
                image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
            },
        ]
    }   

    render(){  
        return (
            <div> 
                <h1>Restaurant App</h1>
                <div class="flex-row-container"> 
                    {this.state.items.map((item) => {
                        return <ItemBox
                            key={item.id}
                            item={item}
                            />
                    })}
                </div>
            </div>
        );
    }
};

export default ItemBoxes;