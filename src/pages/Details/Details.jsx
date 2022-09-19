import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../utils/hooks/hook';
import Loader from '../../components/Loader/Loader';
import Carousel from '../../components/Carousel/Carousel';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import DropdownDetails from '../../components/DropdownDetails/DropdownInfos';

import './Details.css';

const Details = () => {
	const { id } = useParams();
	const { data, loading, isError, errorMessage } = useFetch('../datas.json', id);
	const place = data;
	const error = errorMessage;

	return (
		// console.log('id : ', id, '\nplace: ', place),
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
						<Carousel datas={place.pictures} />
					</div>
					<div className="details_description">
						<div className="details_place">
							<h2>{place.title}</h2>
							<h3>{place.location}</h3>
							<div className="tags">
								{place.tags.map((tag) => (
									<Tag key={tag} name={tag} />
								))}
							</div>
						</div>
						<div className="details_owner">
							<div className="details_owner_datas">
								<p className="owner_name">{place.host.name}</p>
								<img src={place.host.picture} alt={place.host.name} />
							</div>
							{/* {console.log('place.host.rating : ', place.rating)} */}
							<Rating value={place.rating} />
						</div>
					</div>
					<DropdownDetails infos={place.description} options={place.equipments} />
				</div>
			)}
		</div>
	);
};

export default Details;
