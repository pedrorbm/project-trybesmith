export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrderProductIds = {
  id: number;
  userId: number;
  productIds?: number[];
};

export type OrderPost = {
  productIds: number[];
  userId: number;
};

export type OrderPostResult = {
  productIds: number[];
  userId: number;
};
