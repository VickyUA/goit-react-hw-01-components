import css from './StatisticsList.module.css';
import StatisticsItem from 'components/statisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

const StatisticsList = ({ data }) => {
  return (
    // <section className={css.statistics}>
    //   {title && <h2 className={css.title}>Upload stats</h2>}
    <ul className={css.statList}>
      {data.map(data => (
        <li key={data.id}>
          <StatisticsItem label={data.label} percentage={data.percentage} />
        </li>
      ))}
    </ul>
  );
  // </section>
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
