import React from "react";
import ItemBox from './ItemBox.js';
import AddItemForm from './AddItemForm.js';
import CartItem from "./CartItem.js";
import Button from "react-bootstrap/Button"
import {useState} from 'react';

import './ItemBox.css';
//by Rodelio M. Rodriguez

const RestoApp = (props) => {
    const [items,setItems] = useState(
        [
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
    )

    const [filter, setFilter] = useState('All');
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [editItem, setEditItem] = useState(null);


    const changeDisplay = (category) => {
        setFilter(category);
    }

    const addItem = (newItem) =>{
        newItem.id = items.length + 1;
        let itemsCopy=[...items];
        itemsCopy.push(newItem);

        setItems(itemsCopy);
    }

    const addToCart = (newItem) => {
        
        let newItems = [...cart];

        const index = newItems.findIndex(element => element.id === newItem.id);

        if (index !== -1){   
            newItems[index].quantity++;
        }
        else{
            newItems.push(newItem);
        }
        setCart(newItems);
        setTotal(total + parseFloat(newItem.price));
    }

    const deleteItem = (item) => {
        let itemsCopy = [...items];

        itemsCopy = itemsCopy.filter(i => i.id !== item.id)

        setItems(itemsCopy);
    }

    const updateEditItem = (item) => {
        setEditItem(item);
    }

    const updateItem = (item) => {
        let newItems = [...items];       
        const index = newItems.findIndex(element => element.id === item.id);        
        newItems[index] = item;
        setItems(newItems);        
    }
    
    let filteredItems = filter === 'All' ? 
        items :
        items.filter(item => item.category === filter)

    let itemDisplay = filteredItems
        .map((item) => 
            <ItemBox 
                key={item.id} 
                item={item} 
                parentCallback={addToCart} 
                deleteItem={deleteItem} 
                updateEditItem={updateEditItem}
            />
        );

    let cartDisplay = cart
        .map(item =>
            <CartItem key={item.id} item={item} />
        )

    return (
        <div> 
            <h1>Restaurant App</h1>
            <AddItemForm editItem={editItem} addNewItem={addItem} updateItem={updateItem} /><br />                
            <div>
                <Button variant="success" onClick={() => changeDisplay('All')} >All</Button> {' '}
                <Button variant="success" onClick={() => changeDisplay('Food')} >Food</Button>  {' '}
                <Button variant="success" onClick={() => changeDisplay('Drink')} >Drink</Button> 
            </div>
            <div className="flex-row-container"> 
                {itemDisplay}
            </div>
            <hr />
            <h1>Cart</h1>
            {cartDisplay}
            Total: {total}
        </div>
    );
}

// class RestoApp extends React.Component{
//     state = {        
//         items : [
//             {
//                 id: 1,
//                 name: "Burger",
//                 price: 50,
//                 category: "Food",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
//             },
//             {
//                 id: 2,
//                 name: "Pizza",
//                 price: 100,
//                 category: "Food",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
//             },
//             {
//                 id: 3,
//                 name: "Fries",
//                 price: 25,
//                 category: "Food",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
//             },
//             {
//                 id: 4,
//                 name: "Coffee",
//                 price: 35,
//                 category: "Drink",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
//             },
//             {
//                 id: 5,
//                 name: "Iced Tea",
//                 price: 45,
//                 category: "Drink",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
//             },
//             {
//                 id: 6,
//                 name: "Hot Tea",
//                 price: 45,
//                 category: "Drink",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
//             },
//         ],
//         filter: 'All',
//         cart: [],
//         total: 0,
//         editItem: null
//     }   

//     changeDisplay = (category) => {
//         this.setState({
//             filter: category
//         })
//     }

//     addItem = (newItem) =>{
//         newItem.id = this.state.items.length + 1;
//         let itemsCopy=[...this.state.items];
//         itemsCopy.push(newItem);

//         this.setState({
//             items: itemsCopy
//         })
//     }

//     addToCart = (newItem) => {
        
//         let newItems = [...this.state.cart];

//         const index = newItems.findIndex(element => element.id === newItem.id);

//         if (index !== -1)
//         {   
//             newItems[index].quantity++;
//         }
//         else
//         {
//             newItems.push(newItem);
//         }

//         this.setState({
//             cart: newItems,
//             total: this.state.total + newItem.price
//         });
//     }

//     deleteItem = (item) => {
//         let itemsCopy = [...this.state.items];

//         itemsCopy = itemsCopy.filter(i => i.id !== item.id)

//         this.setState({items: itemsCopy});
//     }

//     editItem = (item) => {
//         this.setState({editItem: item});
//     }

//     updateItem = (item) => {
//         let newItems = [...this.state.items];
        
//         const index = newItems.findIndex(element => element.id === item.id);

//         newItems[index] = item;

//         this.setState({items: newItems, 
//             editItem: null});
//     }

//     render(){  
//         let items = this.state.filter === 'All' ? 
//             this.state.items :
//             this.state.items.filter(item => item.category === this.state.filter)

//         let itemDisplay = items
//             .map((item) => 
//                 <ItemBox 
//                     key={item.id} 
//                     item={item} 
//                     parentCallback={this.addToCart} 
//                     deleteItem={this.deleteItem} 
//                     editItem={this.editItem}
//                 />
//             );

//         let cartDisplay = this.state.cart
//             .map(item =>
//                 <CartItem key={item.id} item={item} />
//             )

//         return (
//             <div> 
//                 <h1>Restaurant App</h1>
//                 <AddItemForm editItem={this.state.editItem} addItemx={this.addItem} updateItem={this.updateItem} /><br />                
//                 <div>
//                     <Button variant="success" onClick={() => this.changeDisplay('All')} >All</Button> {' '}
//                     <Button variant="success" onClick={() => this.changeDisplay('Food')} >Food</Button>  {' '}
//                     <Button variant="success" onClick={() => this.changeDisplay('Drink')} >Drink</Button> 
//                 </div>
//                 <div className="flex-row-container"> 
//                     {itemDisplay}
//                 </div>
//                 <hr />
//                 <h1>Cart</h1>
//                 {cartDisplay}
//                 Total: {this.state.total}
//             </div>
//         );
//     }
// };

export default RestoApp;