import css from './StatisticsList.module.css';
import StatisticsItem from 'components/statisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

const StatisticsList = ({ data }) => {
  return (
    <ul className={css.statList}>
      {data.map(data => (
        <li className={css.listItem} key={data.id}>
          <StatisticsItem label={data.label} percentage={data.percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
