import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import { ItemDetail } from '../components/ItemDetail';
import { Item404 } from '../components/Item404';
import { Loading } from '../components/Loading';

export const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const refDoc = doc(db, 'items', id);

		getDoc(refDoc)
			.then((snapshot) => {
				setItem({ id: snapshot.id, ...snapshot.data() });
			})
			.catch(() => <Item404 />)
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Loading />;
	} else {
		return (
			<>
				<Container className='mt-4'>
					{item ? <ItemDetail item={item} /> : <Item404 />}
				</Container>
			</>
		);
	}
};
