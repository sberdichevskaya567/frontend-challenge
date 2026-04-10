import { useInfiniteScroll } from '../../shared/utils/infinity-scroll';
import type { JSX } from 'react';

interface IInfiniteScrollProps {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage(): void;
}

const InfiniteScroll = ({
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: IInfiniteScrollProps): JSX.Element => {
  const loaderRef = useInfiniteScroll({ hasNextPage, fetchNextPage });
  return (
    <>
      <div ref={loaderRef} style={{ height: '20px' }} />
      {isFetchingNextPage && (
        <p style={{ display: 'flex', justifyContent: 'center' }}>... загружаем еще котиков ...</p>
      )}
    </>
  );
};

export default InfiniteScroll;
