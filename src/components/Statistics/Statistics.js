import './Statistics.scss';
import StatisticCard from '../StatisticCard/StatisticCard';

import brandRecognitionIcon from '../../assets/icons/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/icons/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../assets/icons/icon-fully-customizable.svg';

const state = [
  {
    icon: brandRecognitionIcon,
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    icon: detailedRecordsIcon,
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: fullyCustomizableIcon,
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics__container">
        <h3 className="statistics__title">Advanced Statistics</h3>
        <p className="statistics__description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <section className="statistics__cards">
          {state.map(({ icon, title, description }) => (
            <StatisticCard
              icon={icon}
              title={title}
              description={description}
            />
          ))}
          <p className="line"></p>
        </section>
      </div>
    </section>
  );
};

export default Statistics;
