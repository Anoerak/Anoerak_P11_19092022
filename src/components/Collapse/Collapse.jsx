import React from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './Collapse.css';

const DropdownInfos = ({ title, infos }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen ? true : false);

	const [styleInfos, setStyleInfos] = useState('collapse');
	const [styleChevronInfos, setStyleChevronInfos] = useState('collapse_show');

	const handleCollapseInfos = () => {
		if (isOpen) {
			setStyleInfos('collapse');
			setStyleChevronInfos('collapse_show');
		} else {
			setStyleInfos('collapse_show');
			setStyleChevronInfos('collapse');
		}
	};

	const faSolidDownInfos = <FontAwesomeIcon icon={faChevronDown} className={styleChevronInfos} />;
	const faSolidUpInfos = <FontAwesomeIcon icon={faChevronUp} className={styleInfos} />;

	return (
		<div className="collapse_menus">
			<div className="infos_container">
				<div className="infos_title">
					<h3>{title}</h3>
					<button onClick={() => [toggle(), handleCollapseInfos()]}>
						{faSolidDownInfos}
						{faSolidUpInfos}
					</button>
				</div>
				<p className={styleInfos}>{infos}</p>
			</div>
		</div>
	);
};

DropdownInfos.propTypes = {
	title: PropTypes.string.isRequired,
	infos: PropTypes.string.isRequired,
};

DropdownInfos.defaultProps = {
	title: 'Description / Informations',
	infos: "En attente d'informations",
};

export default DropdownInfos;
