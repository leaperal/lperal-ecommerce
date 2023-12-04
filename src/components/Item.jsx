import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
	return (
		<Card style={{ width: '15rem', height: 'fit-content' }}>
			<Card.Img className='ImgCard' variant='top' src={item.pictureUrl} />
			<Card.Body>
				<Card.Title>{item.title}</Card.Title>
				<Card.Text>{item.description}</Card.Text>
				<Link to={`/item/${item.id}`}>
					<Button variant='primary'>Detalle</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};
