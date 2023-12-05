import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Error404 = () => {
	return (
		<Container className='mt-4'>
			<h1>Recurso no encontrado</h1>
			<Link to='/'>
				<Button variant='dark'>Home</Button>
			</Link>
		</Container>
	);
};
