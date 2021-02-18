import React, { useContext } from 'react';
import BookContext from "../contexts/bookContext";

// Components
import Product from './Product';

const Products = props => {

const {products, addItem}=useContext(BookContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
