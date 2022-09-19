import React from 'react';

import './Carousel.css';

const Carousel = () => {
	return (
		<div className="carousel">
			<div className="controls">
				<button className="prev"> prev </button>
				<div className="down"> compteur </div>
				<button className="next"> next </button>
			</div>

			<img src="https://picsum.photos/200/300" alt="image_bureau_travail" />
		</div>
	);
};

export default Carousel;
