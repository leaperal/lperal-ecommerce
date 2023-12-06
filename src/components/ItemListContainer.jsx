import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from 'firebase/firestore';

import { ItemList } from '../components/ItemList';
import { Error404 } from '../components/Error404';
import { Loading } from '../components/Loading';

export const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const refCollections = !id
			? collection(db, 'items')
			: query(collection(db, 'items'), where('category', '==', id));

		getDocs(refCollections)
			.then((snapshot) => {
				if (snapshot.size === 0) <h1>'no results'</h1>;
				else
					setItems(
						snapshot.docs.map((doc) => {
							return { id: doc.id, ...doc.data() };
						}),
					);
			})
			.catch(() => <Error404 />)
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) {
		<Loading />;
	} else {
		return (
			<>
				<Container className='mt-4'>
					<h1>{props.greeting ? props.greeting : id ? id : ''}</h1>
					{items.length > 0 ? <ItemList items={items} /> : <Error404 />}
				</Container>
			</>
		);
	}
};
