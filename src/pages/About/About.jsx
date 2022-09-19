import React from 'react';
import DropdownDetails from '../../components/DropdownDetails/DropdownDetails';

import './About.css';

const About = () => {
	return (
		<div className="about">
			<div className="about_background"></div>
			<div className="about_dropdown_menus">
				<DropdownDetails
					title="Fiabilité"
					infos="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
				/>
				<DropdownDetails
					title="Respect"
					infos="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				/>
				<DropdownDetails
					title="Service"
					infos="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
				/>
				<DropdownDetails
					title="Responsabilité"
					infos="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
				/>
			</div>
		</div>
	);
};

export default About;
