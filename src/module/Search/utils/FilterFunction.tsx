import type { FilterValueType } from "../../../pages/_app";
import type { Hotel } from "../../HoTelContent/types/HotelsType";

const FilterFunction = (
  hotel: Hotel,
  filterOption: FilterValueType
): boolean => {
  if (
    filterOption.name != "" &&
    !hotel.name.toLowerCase().includes(String(filterOption.name).toLowerCase())
  ) {
    return false;
  } else if (
    filterOption.maxCost != 0 &&
    (hotel.sale_price ? hotel.sale_price : hotel.price) > filterOption.maxCost
  ) {
    return false;
  } else if (
    filterOption.property_type.length != 0 &&
    !filterOption.property_type.includes(hotel.property_type)
  ) {
    return false;
  } else if (
    filterOption.location != "location" &&
    filterOption.location != "ALL" &&
    !filterOption.location.includes(hotel.location)
  ) {
    return false;
  } else if (
    filterOption.star &&
    filterOption.star != 0 &&
    !(filterOption.star == hotel.star)
  ) {
    return false;
  } else if (
    filterOption.benefits.length != 0 &&
    // all hotel shoul in clude all filterOption.benefits
    !filterOption.benefits.every((x) => hotel.benefits?.includes(x))
    // all hotel have some benefits in filterOption.benefits
    // !hotel.benefits?.some((benefit) => filterOption.benefits.includes(benefit))
  ) {
    return false;
  }
  return true;
};

export default FilterFunction;
