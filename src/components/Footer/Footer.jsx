import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/kasa_logo_footer.svg';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<Link to="/">
				<img src={Logo} alt="logo" />
			</Link>
			<p>© 2020 Kasa. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
