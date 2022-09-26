import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../utils/hooks/hook';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';

import './Home.css';

const Home = () => {
	// const { data, loading, isError, errorMessage } = useFetch('http://localhost:8081/datas/');
	const { data, loading, isError, errorMessage } = useFetch('./datas.json');
	const listOfPlaces = data;
	const error = errorMessage;

	return (
		<div className="main">
			<div className="home_background">
				<p>Chez vous, partout et ailleurs</p>
			</div>
			<div className="home_content">
				{isError ? (
					<div className="error">
						Une erreur est survenue lors du chargement des données : <br /> {error && error}
					</div>
				) : loading ? (
					<Loader />
				) : (
					<div className="cards">
						{listOfPlaces.map((place) => (
							<Link to={`/details/${place.id}`} key={place.id}>
								<Card id={place.id} name={place.title} picture={place.cover} />
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
