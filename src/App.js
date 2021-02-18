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
	};

	return (
		<div className="App">
			<BookContext.Provider value={products}>
			<CartContext.Provider value={cart}>
			<Navigation  />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
			</BookContext.Provider>
		</div>
	);
}

export default App;
