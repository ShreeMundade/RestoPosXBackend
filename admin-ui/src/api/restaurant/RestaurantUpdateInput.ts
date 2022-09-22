import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CuisineUpdateManyWithoutRestaurantsInput } from "./CuisineUpdateManyWithoutRestaurantsInput";
import { ReviewUpdateManyWithoutRestaurantsInput } from "./ReviewUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  cuisine?: CuisineUpdateManyWithoutRestaurantsInput;
  name?: string;
  reviews?: ReviewUpdateManyWithoutRestaurantsInput;
};
