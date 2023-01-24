import { type FilterProps } from "../Search/types/FilterType";
import { z } from "zod";
export const FilterList: FilterProps[] = [
  {
    nameOfFilter: "rating",
    choices: ["1", "2", "3", "4", "5"],
  },
  {
    nameOfFilter: "Property_type",
    choices: ["Entire apartment", "Serviced apartment", "Hotel", "Resort"],
  },
  {
    nameOfFilter: "Sustainability",
    choices: ["Green", "Sustainable", "Eco-friendly"],
  },
  {
    nameOfFilter: "Distance_to_center",
    choices: [
      "Inside city center",
      "<2 km to center",
      "2-5 km to center",
      "4km",
      "5km",
    ],
  },
];
export const FilterValueSchema = z.object({
  name: z.string(),
  maxCost: z.number().min(0),
  rating: z.array(z.number().min(0).max(5)),
  Property_type: z.array(z.string()),
  Sustainability: z.array(z.string()),
  Distance_to_center: z.array(z.string()),
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
