import css from 'components/friendsList/FriendsList.module.css';
import FriendsItem from 'components/friendsItem/FriendsItem';

const FriendsList = ({ items }) => {
  return (
    <ul className={css.friendList}>
      {items.map(item => (
        <li key={item.id} className={css.item}>
          <FriendsItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
