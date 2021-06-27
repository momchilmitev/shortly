import './UrlInput.scss';

const UrlInput = () => {
    return (
        <section className="shorten__form">
            <form>
                <input className="shorten__input" type="text" placeholder="Shorten a link here..."/>
                <button className="btn shorten__btn">Shorten It!</button>
            </form>
        </section>
    )
}

export default UrlInput;