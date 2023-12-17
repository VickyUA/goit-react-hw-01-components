import css from 'components/friendsList/FriendsList.module.css';
import FriendsItem from 'components/friendsItem/FriendsItem';
import friends from 'data/friends.json';

const FriendsList = ({ id }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friends => (
        <li key={id} className={css.item}>
          <FriendsItem
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
