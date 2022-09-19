import { useState, useEffect } from 'react';

const useFetch = (url, id) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [{ isError, errorMessage }, setError] = useState({ isError: false, errorMessage: '' });

	useEffect(() => {
		if (!url) return;

		setLoading(true);
		if (!id) {
			const fetchData = async () => {
				try {
					const response = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
					});
					const data = await response.json();
					setData(data);
				} catch (error) {
					setError({ isError: true, errorMessage: error.message });
				} finally {
					setLoading(false);
				}
			};
			fetchData();
		} else {
			const fetchData = async () => {
				try {
					const response = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
					});
					const data = await response.json();
					const place = data.find((place) => place.id === id);
					setData(place);
				} catch (error) {
					setError({ isError: true, errorMessage: error.message });
				} finally {
					setLoading(false);
				}
			};
			fetchData();
		}
	}, [url, id]);

	return { data, loading, isError, errorMessage };
};

export default useFetch;
