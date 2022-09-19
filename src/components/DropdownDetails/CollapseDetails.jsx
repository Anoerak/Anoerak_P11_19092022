import React from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './CollapseDetails.css';

const DropdownDetails = ({ title, infos, options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen ? true : false);

	const [styleInfos, setStyleInfos] = useState('collapse');
	const [styleOptions, setStyleOptions] = useState('collapse');
	const [styleChevronInfos, setStyleChevronInfos] = useState('collapse_show');
	const [styleChevronOptions, setStyleChevronOptions] = useState('collapse_show');

	const handleCollapseInfos = () => {
		if (isOpen) {
			setStyleInfos('collapse');
			setStyleChevronInfos('collapse_show');
		} else {
			setStyleInfos('collapse_show');
			setStyleChevronInfos('collapse');
		}
	};

	const handleCollapseOptions = () => {
		if (isOpen) {
			setStyleOptions('collapse');
			setStyleChevronOptions('collapse_show');
		} else {
			setStyleOptions('collapse_show');
			setStyleChevronOptions('collapse');
		}
	};

	const faSolidDownInfos = <FontAwesomeIcon icon={faChevronDown} className={styleChevronInfos} />;
	const faSolidUpInfos = <FontAwesomeIcon icon={faChevronUp} className={styleInfos} />;

	const faSolidDownOptions = <FontAwesomeIcon icon={faChevronDown} className={styleChevronOptions} />;
	const faSolidUpOptions = <FontAwesomeIcon icon={faChevronUp} className={styleOptions} />;

	return (
		<div className="dropdown_menus">
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

			<div className="infos_container">
				<div className="infos_title">
					<h3>{title}</h3>
					<button onClick={() => [toggle(), handleCollapseOptions()]}>
						{faSolidDownOptions}
						{faSolidUpOptions}
					</button>
				</div>
				<ul className={styleOptions}>
					{options.map((option, index) => (
						<li key={index}>{option}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

DropdownDetails.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	infos: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
};

DropdownDetails.defaultProps = {
	title: 'Description / Informations',
	description: 'Description',
	infos: 'Informations',
	options: ['Options1', 'Options2', 'Options3'],
};

export default DropdownDetails;
