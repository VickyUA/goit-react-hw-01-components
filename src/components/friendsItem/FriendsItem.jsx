import css from 'components/friendsItem/FriendsItem.module.css';

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <div className={css.statusTrue}></div>
      ) : (
        <div className={css.statusFalse}></div>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

export default FriendsItem;
