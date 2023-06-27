type ProductIds = {
  id: number,
};

export type Order = {
  id: number;
  userId: number;
  productIds?: ProductIds[];
};

export type NewOrder = {
  id: number,
  userId: number,
  productIds: number[] | undefined
};