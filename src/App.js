import React, { useState, createContext, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import BookContext from "./contexts/bookContext";
import CartContext from "./contexts/cartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart, item
		])
		localStorage.setItem("MyCart", JSON.stringify([...cart, item]))
	};

	const removeItem= title => {
		console.log({title});
		setCart(
			cart.filter((cartItem)=>{
				console.log(cartItem);
				return cartItem.title !== title;
			})
		)
	}

	return (
		<div className="App">
			<BookContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
			<Navigation  />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</CartContext.Provider>
			</BookContext.Provider>
		</div>
	);
}

export default App;
