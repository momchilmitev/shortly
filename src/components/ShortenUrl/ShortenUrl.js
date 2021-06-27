import './ShortenUrl.scss';
import {useState} from 'react';

const ShortenUrl = ({url, shortUrl}) => {
    const [text, setText] = useState('Copy');
    return (
        <li className="url__container">
            <p className="url__basic">https://www.frontendmentor.io</p>
            <p className="url__short">https://rel.ink/k4lKyk</p>
            <button className="url__btn">{text}</button>
        </li>
    )
}

export default ShortenUrl;