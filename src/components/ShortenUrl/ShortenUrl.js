import './ShortenUrl.scss';
import { useState } from 'react';

const ShortenUrl = ({ url }) => {
	const [text, setText] = useState('Copy');
	console.log(url);
	return (
		<li className="url__container">
			<p className="url__long">{url.shortUrl}</p>
			<p className="url__short">{url.originalUrl}</p>
			<button className="url__btn">{text}</button>
		</li>
	);
};

export default ShortenUrl;
