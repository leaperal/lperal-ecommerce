import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';

import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
	const { onAdd } = useContext(CartContext);

	const add = (quantity) => {
		onAdd(item, quantity);
	};

	return (
		<>
			<h1>{item.title}</h1>
			<img src={item.pictureUrl} />
			<div>
				<p>{item.description}</p>
				<p>precio: {item.price} u$d</p>
				<p>stock: {item.stock}</p>
				<ItemCount onAdd={add} stock={item.stock} initial={1} />
			</div>
			<Link to={`/category/${item.category}`}>
				{' '}
				<Button variant='primary'>Volver</Button>
			</Link>
		</>
	);
};
