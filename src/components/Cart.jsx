import { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

export const Cart = () => {
	const { items, clear, onRemove } = useContext(CartContext);

	const totalPrice = items.reduce(
		(price, valor) => price + valor.price * valor.quantity,
		0,
	);

	if (!items.length) {
		return (
			<Container className='mt-4'>
				<h2>No hay productos agregados al carrito.</h2>
				<Link to='/'>
					<Button variant='dark'>Home</Button>
				</Link>
			</Container>
		);
	} else {
	}
	return (
		<Container className='mt-4'>
			<h1>Mi Carrito</h1>
			<Table>
				<thead>
					<tr className='body'>
						<th>Nombre</th>
						<th>Cantidad</th>
						<th>Precio Unitario</th>
						<th>Imagen</th>
						<th>Eliminar</th>
					</tr>
				</thead>

				<tbody>
					{items?.map((item) => (
						<tr key={item.id}>
							<td>{item.title}</td>
							<td>{item.quantity}</td>
							<td>{item.price}</td>
							<td>
								<img src={item.pictureUrl} width={300} />
							</td>
							<td onClick={() => onRemove(item.id)}>X</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total $: {totalPrice}</td>
					</tr>
				</tfoot>
			</Table>

			<Link to='/Checkout'>
				<Button variant='success'>Comprar</Button>
			</Link>
			<> </>
			<Link to='/'>
				<Button variant='secondary' onClick={clear}>
					Vaciar Carrito
				</Button>
			</Link>
		</Container>
	);
};
