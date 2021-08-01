import './UrlInput.scss';
import { useState } from 'react';
import ShortenUrlList from '../ShortenUrlList/ShortenUrlList';

const UrlInput = () => {
	const [url, setUrl] = useState('');
	const [urls, setUrls] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const btnClass = loading ? 'shorten__btn loading' : 'shorten__btn';

	const onInputChange = (e) => {
		setUrl(e.target.value);
		setError('');
	};

	const getShortUrl = (e) => {
		e.preventDefault();
		if (!url.trim()) {
			setError('Please add link!');
			return;
		}
		setLoading(true);
		const apiUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => {
				const readyUrl = {
					shortUrl: data.result.full_short_link,
					originalUrl: data.result.original_link,
				};

				setUrls([...urls, readyUrl]);
				setLoading(false);
			});
	};

	return (
		<section className="shorten__container">
			<form className="shorten__form" onSubmit={(e) => getShortUrl(e)}>
				<input
					className="shorten__input"
					type="text"
					placeholder="Shorten a link here..."
					onChange={(e) => onInputChange(e)}
				/>
				{error && <span className="error-msg">{error}</span>}
				<button className={btnClass}>
					{loading ? 'Shortening...' : 'Shorten It!'}
				</button>
			</form>
			<ShortenUrlList urls={urls} />
		</section>
	);
};

export default UrlInput;
