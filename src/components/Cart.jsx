import { useContext, useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { CartContext } from '../contexts/CartContext';

const initialValues = { name: '', email: '', phone: '' };

export const Cart = () => {
	const { items, clear, onRemove } = useContext(CartContext);
	const [buyer, setBuyer] = useState(initialValues);

	const navigate = useNavigate();

	const handleChange = (event) => {
		setBuyer((buyer) => {
			return { ...buyer, [event.target.name]: event.target.value };
		});
	};

	const sendOrder = () => {
		const order = { buyer, items, total: 1 };

		const db = getFirestore();
		const orderCollection = collection(db, 'orders');

		addDoc(orderCollection, order).then(({ id }) => {
			if (id) {
				alert('orden: ' + id + ' generada!');
				setBuyer(initialValues);
				clear();
			}
		});
	};

	if (!items.length) {
		return (
			<Container className='mt-4'>
				<h2>No hay nada!!!</h2>
				<button onClick={() => navigate('/')}>Home</button>
			</Container>
		);
	}
	return (
		<Container className='mt-4'>
			<h1>Mi Carrito</h1>
			<Table>
				<thead>
					<tr>
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
						<td>Total: 2</td>
					</tr>
				</tfoot>
			</Table>
			<button onClick={clear}>Vaciar Carrito</button>
			<hr />
			<Form>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type='text'
						value={buyer.name}
						onChange={handleChange}
						name='name'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='text'
						value={buyer.email}
						onChange={handleChange}
						name='email'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPhone'>
					<Form.Label>Telefono</Form.Label>
					<Form.Control
						type='text'
						value={buyer.phone}
						onChange={handleChange}
						name='phone'
					/>
				</Form.Group>
				<Button variant='primary' onClick={sendOrder}>
					Comprar
				</Button>
			</Form>
		</Container>
	);
};
