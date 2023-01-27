import type { Hotel } from "../../HoTelContent/types/HotelsType";

export const SortFunction = (a: Hotel, b: Hotel, sort: string) => {
  switch (sort) {
    case "Lowest price first":
      return (
        (a.sale_price ? a.sale_price : a.price) -
        (b.sale_price ? b.sale_price : b.price)
      );
    case "Top review":
      return b.rating - a.rating;
    default:
      return 0;
  }
};
