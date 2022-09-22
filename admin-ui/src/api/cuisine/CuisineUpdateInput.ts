import { RestaurantUpdateManyWithoutCuisinesInput } from "./RestaurantUpdateManyWithoutCuisinesInput";

export type CuisineUpdateInput = {
  name?: string;
  restaurants?: RestaurantUpdateManyWithoutCuisinesInput;
};
