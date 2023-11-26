import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({ item }) => {
	return (
		<>
			<h1>{item.title}</h1>
			<img src={item.pictureUrl} />
			<div>
				<p>{item.description}</p>
				<p>precio: {item.price} u$d</p>
			</div>
			<Link to={`/category/${item.category}`}>
				{' '}
				<Button variant='primary'>Volver</Button>
			</Link>
		</>
	);
};
