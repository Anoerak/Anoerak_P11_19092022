import React from 'react';
import DropdownInfos from '../../components/Collapse/Collapse';

import './About.css';

const About = () => {
	return (
		<div className="about">
			<div className="about_background"></div>
			<DropdownInfos title="Fiabilité" infos="" />
			<DropdownInfos
				title="Respect"
				infos="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
			/>
			<DropdownInfos title="Service" infos="" />
			<DropdownInfos title="Responsabilité" infos="" />
		</div>
	);
};

export default About;
