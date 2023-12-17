import user from 'data/user.json';
import Profile from './profile/Profile';
import data from 'data/data.json';
import StatisticsList from './statisticsList/StatisticsList';
import StatisticsSection from './statisticsSection/StatisticsSection';
import friends from 'data/friends.json';
import FriendsList from './friendsList/FriendsList';
import transactions from 'data/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        backgroundColor: 'lightGrey',
        padding: '40px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsSection title="Upload stats">
        <StatisticsList data={data} />
      </StatisticsSection>
      <StatisticsSection />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
