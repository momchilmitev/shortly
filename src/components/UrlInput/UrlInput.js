import './UrlInput.scss';
import ShortenUrlList from "../ShortenUrlList/ShortenUrlList";

const UrlInput = () => {
    return (
        <section className="shorten__form">
            <form>
                <input className="shorten__input" type="text" placeholder="Shorten a link here..."/>
                <button className="shorten__btn">Shorten It!</button>
            </form>
            <ShortenUrlList />
        </section>
    )
}

export default UrlInput;