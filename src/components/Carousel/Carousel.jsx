import React from 'react';
import PropTypes from 'prop-types';

import './Carousel.css';

const Carousel = (datas) => {
	// console.log(datas);

	let slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	async function plusSlides(n) {
		await showSlides((slideIndex += n));
	}

	async function showSlides(n) {
		await datas;
		let i;
		const slides = document.getElementsByClassName('mySlides');
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		// console.log('Mes Slides : ', slides);

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		slides[slideIndex - 1].style.display = 'block';
	}

	return (
		<div className="carousel">
			{datas.datas.length > 1 ? (
				<div className="controls">
					<button className="prev" onClick={() => plusSlides(-1)}>
						<svg viewBox="0 0 48 80" fill="white" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M47.0399 7.78312L39.9199 0.703125L0.359863 40.3031L39.9599 79.9031L47.0399 72.8231L14.5199 40.3031L47.0399 7.78312Z"
								fill="white"
							/>
						</svg>
					</button>
					<button className="next" onClick={() => plusSlides(1)}>
						<svg viewBox="0 0 48 80" fill="white" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			) : null}
			{datas.datas.map((item, index) => {
				return (
					<div key={item} className="mySlides fade">
						<div className="number_text">
							{index + 1} / {datas.datas.length}
						</div>
						<img src={item} alt={item + item.id} />
					</div>
				);
			})}
		</div>
	);
};

Carousel.propTypes = {
	datas: PropTypes.array.isRequired,
};

export default Carousel;
