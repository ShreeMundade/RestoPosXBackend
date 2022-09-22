import { StringFilter } from "../../util/StringFilter";
import { RestaurantListRelationFilter } from "../restaurant/RestaurantListRelationFilter";

export type CuisineWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  restaurants?: RestaurantListRelationFilter;
};
