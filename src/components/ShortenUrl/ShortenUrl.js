import './ShortenUrl.scss';
import { useState } from 'react';

const ShortenUrl = ({ url }) => {
	const [text, setText] = useState('Copy');
	const btnClass = text === 'Copy' ? 'url__btn' : 'url__btn url__btn--copied';

	function copyShortUrlToClipboard() {
		navigator.clipboard.writeText(url.shortUrl).then(() => setText('Copied!'));
		setTimeout(() => setText('Copy'), 5000);
	}

	return (
		<li className="url__container">
			<p className="url__long">{url.shortUrl}</p>
			<p className="url__short">{url.originalUrl}</p>
			<button onClick={copyShortUrlToClipboard} className={btnClass}>
				{text}
			</button>
		</li>
	);
};

export default ShortenUrl;
