import { useState } from 'react';

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
				<div style={{ display: 'flex' }} onClick={handeDecreaseCount}>
					-
				</div>
				<mark>{count}</mark>
				<div style={{ display: 'flex' }} onClick={handeIncreaseCount}>
					+
				</div>
			</div>
			<br />
			<button onClick={handleAdd}>Agregar</button>
		</>
	);
};
