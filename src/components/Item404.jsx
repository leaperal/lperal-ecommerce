import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item404 = () => {
	return (
		<Container className='mt-4'>
			<h2>No existe el producto</h2>
			<Link to='/'>
				<Button variant='dark'>Home</Button>
			</Link>
		</Container>
	);
};
