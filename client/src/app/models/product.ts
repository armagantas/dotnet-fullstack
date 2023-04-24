export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  PictureUrl: string;
  type?: string;
  brand: string;
  quantityInStock?: number;
}
