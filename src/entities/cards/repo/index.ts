import { BACKEND_HTTPS_SERVICES } from '../../../shared/api';
import type { IGetAllCardDto } from '../interface/dto';
import type { IGetAllCardsPort } from '../interface/port';

const getAllCards = async (params: IGetAllCardsPort): Promise<IGetAllCardDto[]> => {
  return BACKEND_HTTPS_SERVICES.get('/images/search', { params }).then((res) => res.data);
};

export { getAllCards };
