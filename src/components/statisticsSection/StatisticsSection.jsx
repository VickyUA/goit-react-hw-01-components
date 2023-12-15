import css from './StatisticsSection.module.css';
// import StatisticsItem from 'components/statisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

const StatisticsSection = ({ title, children }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

StatisticsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StatisticsSection;
