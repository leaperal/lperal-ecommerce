import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Error404 } from './components/Error404';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer greeting='Home' />} />
					<Route path='/category/:id' element={<ItemListContainer />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
