import './StatisticCard.scss';

const StatisticCard = ({ icon, title, description }) => {
  return (
    <article className="card">
      <span className="card__icon">
        <img src={icon} alt="card icon" />
      </span>
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
    </article>
  );
};

export default StatisticCard;
