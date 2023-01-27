import { FilterRadioProps, type FilterProps } from "../Search/types/FilterType";
import { z } from "zod";
export const FilterList: FilterProps[] = [
  {
    nameOfFilter: "property_type",
    choices: [
      "Hotel",
      "Resort",
      "Inn",
      "Luxury Hotel",
      "Boutique Hotel",
      "Budget Hotel",
      "Family Hotel",
      "Business Hotel",
      "Beach Hotel",
      "Countryside Hotel",
      "Design Hotel",
    ],
  },
  {
    nameOfFilter: "benefits",
    choices: [
      "Free Wi-Fi",
      "Free Breakfast",
      "Fitness Center",
      "Pool",
      "Spa",
      "On-site restaurant",
      "Fitness center",
      "Business center",
      "Spa and fitness center",
      "Shuttle service to nearby attractions",
      "Continental breakfast",
      "Bicycles available for rent",
      "On-site spa and fitness center",
      "Room service",
      "Valet parking",
      "On-site bar and restaurant",
      "Pet-friendly",
      "24-hour front desk service",
      "On-site pool and playground",
      "Family-friendly activities and entertainment",
      "Babysitting service available",
      "Business center with meeting rooms",
      "On-site restaurant and bar",
      "Beach chairs and umbrellas available",
      "Water sports equipment rental",
      "Hiking trails nearby",
      "Bicycle rental",
      "On-site bar",
      "Eco-friendly practices",
      "Nature activities",
    ],
  },
];

export const FilterListRadio: FilterRadioProps[] = [
  {
    nameOfFilter: "star",
    choices: [1, 2, 3, 4, 5],
  },
];

export const FilterListChoseOne: FilterProps[] = [
  {
    nameOfFilter: "location",
    choices: [
      "New York",
      "Loas Angeles",
      "Chicago",
      "Miami",
      "Las Vegas",
      "Los Angeles",
      "San Francisco",
      "Seattle",
      "Boston",
      "ALL",
    ],
  },
];

export const FilterValueSchema = z.object({
  name: z.string(),
  maxCost: z.number().min(0),
  star: z.number().min(0).max(10),
  location: z.string(),
  property_type: z.array(z.string()),
  benefits: z.array(z.string()),
  sort: z.enum(["Lowest price first", "Top review", "Distance", "Best match"]),
});

export const menuList: string[] = [
  "Flight+Hotel",
  "Hotels&Home",
  "Flight",
  "Coupon&Deal",
  "Apartments",
  "Activities",
  "Airport Transfer",
  "Car Rental",
];

export const SortOption = ["Best Match", "Lowest price first", "Top review"];
export const hotelList: string[] = [];
