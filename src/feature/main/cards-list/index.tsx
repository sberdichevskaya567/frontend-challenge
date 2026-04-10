import { LikeIcon } from '../../../assets/icon';
import InfiniteScroll from '../../../widgets/infinite-scroll';
import { GetAllCardsPresenter } from '../../../entities/cards/presenter';
import './index.css';
import Loader from '../../../shared/components/loader';

const CardsList = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    handleClickLike,
    isLiked,
  } = GetAllCardsPresenter();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="grid">
            {data?.map((item) => {
              const isLikedCard = isLiked(item.id);
              return (
                <div className="card">
                  <img src={item.url} />
                  <div
                    className={`like ${isLikedCard ? 'liked' : ''} `}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClickLike(item);
                    }}
                  >
                    <LikeIcon filled={isLikedCard} />
                  </div>
                </div>
              );
            })}
          </div>
          <InfiniteScroll
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      )}
    </>
  );
};

export default CardsList;
