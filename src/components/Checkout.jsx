import { useContext, useState } from 'react';
import { Container, Button, Form, Table } from 'react-bootstrap';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';
const initialValues = { name: '', email: '', reemail: '', phone: '' };

export const Checkout = () => {
	const { items, clear } = useContext(CartContext);
	const [buyer, setBuyer] = useState(initialValues);

	const totalPrice = items.reduce(
		(price, valor) => price + valor.price * valor.quantity,
		0,
	);
	const handleChange = (event) => {
		setBuyer((buyer) => {
			visible();
			return { ...buyer, [event.target.name]: event.target.value };
		});
	};

	const visible = () => {
		if (
			buyer.name != '' &&
			buyer.email != '' &&
			buyer.phone != '' &&
			buyer.email == buyer.reemail
		) {
			return true;
		} else {
			return false;
		}
	};

	const sendOrder = () => {
		const date = new Date();
		const status = 'generada';
		const order = { date, status, buyer, items, total: totalPrice };
		if (visible) {
			const db = getFirestore();
			const orderCollection = collection(db, 'orders');

			addDoc(orderCollection, order).then(({ id }) => {
				if (id) {
					alert('orden: ' + id + ' generada!');
					setBuyer(initialValues);
					clear();
				}
			});
		} else {
			alert('Debe comprobar los datos del formulario');
		}
	};

	if (!items.length) {
		return (
			<Container className='mt-4'>
				<h2>No hay nada!!!</h2>
				<Link to={`/`}>
					<Button>Home</Button>
				</Link>
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
					</tr>
				</thead>

				<tbody>
					{items?.map((item) => (
						<tr key={item.id}>
							<td>{item.title}</td>
							<td>{item.quantity}</td>
							<td>{item.price}</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total $: {totalPrice}</td>
					</tr>
				</tfoot>
			</Table>
			<hr />
			<Form>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type='text'
						value={buyer.name}
						onChange={handleChange}
						name='name'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='text'
						value={buyer.email}
						onChange={handleChange}
						name='email'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicReEmail'>
					<Form.Label>Re-Email</Form.Label>
					<Form.Control
						type='text'
						value={buyer.reemail}
						onChange={handleChange}
						name='reemail'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPhone'>
					<Form.Label>Telefono</Form.Label>
					<Form.Control
						type='text'
						value={buyer.phone}
						onChange={handleChange}
						name='phone'
						required
					/>
				</Form.Group>

				<Button variant='success' onClick={sendOrder} disabled={!visible()}>
					Comprar
				</Button>
				<Link to={`/`}>
					<Button variant='secundary' onClick={clear}>
						Cancelar
					</Button>
				</Link>
			</Form>
		</Container>
	);
};
