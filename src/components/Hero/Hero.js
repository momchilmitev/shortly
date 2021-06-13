import './Hero.scss';
import image from '../../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src={image}
        alt="illustration working on computer"
      />
      <section className="hero__cta">
        <h1 className="hero__title">More than just shorter links</h1>
        <p className="hero__description">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn btn--primary">Get Started</button>
      </section>
    </section>
  );
};

export default Hero;
