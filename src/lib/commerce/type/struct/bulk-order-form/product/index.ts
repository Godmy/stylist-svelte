// Product type
export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  thumbnail?: string;
  minOrder?: number;
  available?: number;
};
