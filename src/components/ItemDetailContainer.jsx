import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import { ItemDetail } from '../components/ItemDetail';

export const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const refDoc = doc(db, 'items', id);

		getDoc(refDoc).then((snapshot) => {
			setItem({ id: snapshot.id, ...snapshot.data() });
		});
	}, []);

	return (
		<>
			<Container className='mt-4'>
				{item ? <ItemDetail item={item} /> : <>Esperando...</>}
			</Container>
		</>
	);
};
