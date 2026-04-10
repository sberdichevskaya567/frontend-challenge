import { useEffect, useRef } from 'react';
import { LIMIT } from '../../const';

interface IUseInfiniteScrollProps {
  hasNextPage: boolean;
  fetchNextPage(): void;
}

interface IInfiniteQueryResponse<T, P> {
  pageParams: P[];
  pages: T[][];
}

const selectPagedData = <T>(data: IInfiniteQueryResponse<T, number>): T[] => {
  return data.pages.flat();
};

const getNextPageParam = <T>(lastPage: T[], allPages: T[][]): number | undefined => {
  if (lastPage.length < LIMIT) return undefined;
  return allPages.length;
};

const useInfiniteScroll = ({ hasNextPage, fetchNextPage }: IUseInfiniteScrollProps) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && hasNextPage) {
        void fetchNextPage();
      }
    });

    observer.observe(loaderRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  return loaderRef;
};

export { getNextPageParam, selectPagedData, useInfiniteScroll };
