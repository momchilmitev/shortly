import './UrlInput.scss';
import { useState } from 'react';
import ShortenUrlList from '../ShortenUrlList/ShortenUrlList';

const UrlInput = () => {
	const [url, setUrl] = useState('');
	const [urls, setUrls] = useState([]);
	const [loading, setLoading] = useState(false);

	const btnClass = loading ? 'shorten__btn loading' : 'shorten__btn';

	const getShortUrl = (e) => {
		e.preventDefault();
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
					onChange={(e) => setUrl(e.target.value)}
				/>
				<button className={btnClass}>
					{loading ? 'Shortening...' : 'Shorten It!'}
				</button>
			</form>
			<ShortenUrlList urls={urls} />
		</section>
	);
};

export default UrlInput;
