import './StatisticCard.scss';

const StatisticCard = ({ icon, title, description }) => {
  return (
    <article className="card">
      <img className="card__icon" src={icon} alt="card icon" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
    </article>
  );
};

export default StatisticCard;
