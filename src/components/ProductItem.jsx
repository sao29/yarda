import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import removefromCartImage from '@icons/bt_added_to_cart.svg'

const ProductItem = ({ product }) => {
	const { addToCart,addProduct } = useContext(AppContext);
	const {  removeFromCart } = useContext(AppContext);
	const { state: {cart} } = useContext(AppContext);

	const isProductAdded = () => cart.some( (item) => item.id == product.id) ? true : false;

	const handleCart = (item) => {
		isProductAdded() ? removeFromCart(item.id) : addToCart(item);
	}

	// const handleClick = item => {
	// 	addToCart(item);
	// }

	const handleProduct = (item) => {
		addProduct(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{/* <figure onClick={() => handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure> */}
				<figure className='ProductItem__add-to-cart' onClick={() => handleCart(product)}>
					{ isProductAdded()
					? (	<img className='ProduProductItem__icon' src={removefromCartImage} alt="" /> ) 
					: ( <img className='ProduProductItem__icon' src={addToCartImage} alt="" /> )
					}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;