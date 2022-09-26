import { Routes, Route } from 'react-router-dom';

// import ContextProvider from './utils/context/context';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import About from './pages/About/About';

let App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
