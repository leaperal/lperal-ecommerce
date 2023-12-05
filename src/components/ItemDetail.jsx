import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
	const { onAdd } = useContext(CartContext);

	const add = (quantity) => {
		onAdd(item, quantity);
	};

	if (!item.title) {
		return (
			<Container className='mt-4'>
				<h2>No existe el producto</h2>
				<Link to='/'>
					<Button variant='dark'>Home</Button>
				</Link>
			</Container>
		);
	} else {
		return (
			<>
				<h1>{item.title}</h1>
				<img
					src={item.pictureUrl}
					style={{ width: '20rem', height: 'fit-content' }}
				/>
				<div>
					<h4>{item.description}</h4>
					<h5>u$d: {item.price} </h5>
					<h6>stock: {item.stock}</h6>
					<ItemCount onAdd={add} stock={item.stock} initial={1} />
				</div>
			</>
		);
	}
};
