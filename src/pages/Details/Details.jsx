import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../utils/hooks/hook';
import Loader from '../../components/Loader/Loader';

import './Details.css';

const Details = () => {
	const { id } = useParams();
	const { data, loading, isError, errorMessage } = useFetch('datas.json', id);
	const place = data;
	const error = errorMessage;

	return (
		console.log('id : ', id, '\nplace: ', place),
		(
			<div className="details">
				{isError ? (
					<div className="error">
						Une erreur est survenue lors du chargement des données : <br /> {error && error}
					</div>
				) : loading ? (
					<Loader />
				) : (
					<div className="details_content">
						<div className="details_picture">
							{console.log(place)}
							<img src={place.cover} alt={place.title} />
						</div>
						<div className="details_description">
							<h2>{place.title}</h2>
							<p>{place.description}</p>
						</div>
					</div>
				)}
			</div>
		)
	);
};

export default Details;
