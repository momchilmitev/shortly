import './ShortenUrlList.scss';
import ShortenUrl from '../ShortenUrl/ShortenUrl';

const ShortenUrlList = ({ urls }) => {
	return (
		<ul className="url__list">
			{urls.map((url) => (
				<ShortenUrl key={url.shortUrl} url={url} />
			))}
		</ul>
	);
};

export default ShortenUrlList;
