export type Hotel = {
  name: string;
  rating: number;
  price: number;
  property_type: string;
  location: string;
  sale_price?: number;
  benefits?: string[];
  comments?: string[];
  star: number;
  pictureLink?: string;
};

export type HotelList = {
  hotels: Hotel[];
};
