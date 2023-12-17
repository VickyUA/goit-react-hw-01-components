import css from 'components/friendsItem/FriendsItem.module.css';

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={css.statusTrue}>*</span>
      ) : (
        <span className={css.statusFalse}>$</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

export default FriendsItem;
