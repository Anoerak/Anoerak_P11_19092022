import React from 'react';
import { Link } from 'react-router-dom';
import KasaLogo from '../../assets/kasa_logo.svg';
import './Header.css';

const Header = () => {
	return (
		<header>
			<Link to="/">
				<img src={KasaLogo} alt="logo" className="kasa_logo" />
			</Link>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/about">A Propos</Link>
			</nav>
		</header>
	);
};

export default Header;
