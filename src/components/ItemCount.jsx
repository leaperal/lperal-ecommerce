import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ItemCount = ({ onAdd, stock, initial }) => {
	const [count, setCount] = useState(initial);

	const handeIncreaseCount = () => {
		if (stock > count) {
			setCount((prev) => prev + 1);
		}
	};
	const handeDecreaseCount = () => {
		if (count > 1) {
			setCount((prev) => prev - 1);
		}
	};

	const handleAdd = () => {
		onAdd(count);
		setCount(initial);
	};

	return (
		<>
			<div style={{ display: 'flex' }}>
				<br />
				<h5>
					<Button variant='secondary' onClick={handeDecreaseCount}>
						{' '}
						-{' '}
					</Button>
					<mark> {count} </mark>
					<Button variant='secondary' onClick={handeIncreaseCount}>
						+
					</Button>
				</h5>
			</div>
			<br />
			<Button onClick={handleAdd} variant='success'>
				Agregar
			</Button>
			<> </>
			<Link to={`/`}>
				<Button variant='dark'>Home</Button>
			</Link>
		</>
	);
};
