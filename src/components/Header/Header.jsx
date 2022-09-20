import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import KasaLogo from '../../assets/kasa_logo.svg';
import './Header.css';

const Header = () => {
	const [{ homeActive, aboutActive }, setIsActive] = useState(
		{ homeActive: 'inactive' },
		{ aboutActive: 'inactive' }
	);

	const handleMenu = (e) => {
		e === 'home' ? setIsActive({ homeActive: 'active' }) : setIsActive({ aboutActive: 'active' });
	};

	return (
		<header>
			<Link to="/">
				<img src={KasaLogo} alt="logo" className="kasa_logo" />
			</Link>
			<nav>
				<Link to="/" className={homeActive} onClick={() => handleMenu('home')}>
					Accueil
				</Link>
				<Link to="/about" className={aboutActive} onClick={() => handleMenu('about')}>
					A Propos
				</Link>
			</nav>
		</header>
	);
};

export default Header;
