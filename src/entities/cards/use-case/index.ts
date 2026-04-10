import { getAllCards } from '../repo';
import { useInfiniteQuery } from '@tanstack/react-query';
import { EQueryKeys } from '../../../shared/enum/query-keys';
import { getNextPageParam, selectPagedData } from '../../../shared/utils/infinity-scroll';
import type { IGetAllCardDto } from '../interface/dto';
import type { UseInfiniteQueryResult, QueryFunctionContext, QueryKey } from '@tanstack/react-query';
import { LIMIT } from '../../../shared/const';

export const useGetAllCardsCase = (): UseInfiniteQueryResult<IGetAllCardDto[]> => {
  const execute = ({ pageParam }: QueryFunctionContext<QueryKey, number>) => {
    return getAllCards({ limit: LIMIT, page: pageParam });
  };

  return useInfiniteQuery({
    queryFn: execute,
    queryKey: [EQueryKeys.GET_ALL_CARDS],
    select: selectPagedData,
    initialPageParam: 0,
    getNextPageParam: getNextPageParam,
  });
};
