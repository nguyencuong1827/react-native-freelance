export interface MapColorSizeAmount {
  color: string;
  size: 'S' | 'M' | 'L' | 'XL' | '2XL';
  amount: number;
}
export interface ProductDetail {
  name: string;
  price: number;
  discount: number;
  rate: number;
  isLike: boolean;
  mapColorSizeAmount: Array<MapColorSizeAmount>;
}
