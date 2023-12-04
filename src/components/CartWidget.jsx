import { Link } from 'react-router-dom';
import { useContext } from 'react';

import cart from '../assets/carrito.png';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
	const { items } = useContext(CartContext);
	const totalQuantity = items.reduce(
		(quantity, valor) => quantity + valor.quantity,
		0,
	);

	return (
		<Link to='/cart'>
			<div style={{ display: 'flex' }}>
				<img src={cart} alt='Carrito' width={25} height={25}></img>
				<br />
				<span>{totalQuantity}</span>
			</div>
		</Link>
	);
};
