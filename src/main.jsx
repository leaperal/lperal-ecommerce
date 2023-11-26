import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const firebaseConfig = {
	apiKey: 'AIzaSyCIbgYN11hCfincOCA3OxBfZ2YJhKJvlX0',
	authDomain: 'lperal-ecommerce.firebaseapp.com',
	projectId: 'lperal-ecommerce',
	storageBucket: 'lperal-ecommerce.appspot.com',
	messagingSenderId: '668264002424',
	appId: '1:668264002424:web:640caa5025b2f0bad3ce8d',
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
