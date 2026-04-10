interface IGetAllCardDto {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: unknown[];
  favourite: object;
}

export type { IGetAllCardDto };
