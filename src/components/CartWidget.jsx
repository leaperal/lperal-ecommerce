import { Link } from 'react-router-dom';
import cart from '../assets/carrito.png';

export const CartWidget = () => {
	return (
		<Link to='/cart'>
			<img src={cart} alt='Carrito' width={25} height={25}></img>
			<br />
			<span>278</span>{' '}
		</Link>
	);
};
