import { useEffect, useState } from 'react';
import type { IGetAllCardDto } from '../../../entities/cards/interface/dto';

interface IUseFavoritesReturn {
  favoriteCard: IGetAllCardDto[];
  removingCard: string | null;
  isLiked(id: string): boolean;
  handleClickLike(card: IGetAllCardDto): void;
  handleRemove(card: IGetAllCardDto): void;
}

const useFavorites = (): IUseFavoritesReturn => {
  const [favoriteCard, setFavoriteCard] = useState<IGetAllCardDto[]>([]);
  const [removingCard, setRemovingCard] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('favorite');
    if (stored) {
      setFavoriteCard(JSON.parse(stored));
    }
  }, []);

  const handleClickLike = (card: IGetAllCardDto) => {
    setFavoriteCard((prev) => {
      const exists = prev.some((item) => item.id === card.id);
      const updated = exists ? prev.filter((item) => item.id !== card.id) : [...prev, card];

      localStorage.setItem('favorite', JSON.stringify(updated));

      return updated;
    });
  };

  const handleRemove = (card: IGetAllCardDto) => {
    setRemovingCard(card.id);

    setTimeout(() => {
      handleClickLike(card);
      setRemovingCard(null);
    }, 300);
  };

  const isLiked = (id: string) => favoriteCard.some((item) => item.id === id);

  return {
    favoriteCard,
    removingCard,
    isLiked,
    handleClickLike,
    handleRemove,
  };
};

export { useFavorites };
