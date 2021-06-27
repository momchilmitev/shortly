import './ShortenUrlList.scss';
import ShortenUrl from "../ShortenUrl/ShortenUrl";

const ShortenUrlList = ({urls}) => {
    return(
        <ul className="url__list">
            <ShortenUrl />
        </ul>
    )
}

export default  ShortenUrlList;