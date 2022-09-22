import { RestaurantCreateNestedManyWithoutCuisinesInput } from "./RestaurantCreateNestedManyWithoutCuisinesInput";

export type CuisineCreateInput = {
  name: string;
  restaurants?: RestaurantCreateNestedManyWithoutCuisinesInput;
};
