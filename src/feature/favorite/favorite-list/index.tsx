import { LikeIcon } from '../../../assets/icon';
import { useFavorites } from '../../../shared/utils/toggle-card-like';
import Loader from '../../../shared/components/loader';

const FavoriteList = () => {
  const { favoriteCard, removingCard, handleRemove } = useFavorites();
  return (
    <>
      {favoriteCard ? (
        <div className="grid">
          {favoriteCard?.map((item) => {
            return (
              <div className={`card ${removingCard === item.id ? 'removing' : ''}`} key={item.id}>
                <img src={item.url} />
                <div
                  className="like"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(item);
                  }}
                >
                  <LikeIcon />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default FavoriteList;
