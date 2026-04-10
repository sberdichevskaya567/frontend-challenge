import { useGetAllCardsCase } from '../use-case';
import { useFavorites } from '../../../shared/utils/toggle-card-like';
import type { IGetAllCardDto } from '../interface/dto';

interface IGetAllCardsPresenterReturn {
  data?: IGetAllCardDto[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  favoriteCard: IGetAllCardDto[];
  isLoading: boolean;
  handleClickLike(card: IGetAllCardDto): void;
  fetchNextPage(): void;
  isLiked(id: string): boolean;
}

const GetAllCardsPresenter = (): IGetAllCardsPresenterReturn => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetAllCardsCase();

  const { favoriteCard, handleClickLike, isLiked } = useFavorites();

  return {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    favoriteCard,
    handleClickLike,
    isLiked,
  };
};

export { GetAllCardsPresenter };
