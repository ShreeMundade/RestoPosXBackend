import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CuisineCreateNestedManyWithoutRestaurantsInput } from "./CuisineCreateNestedManyWithoutRestaurantsInput";
import { ReviewCreateNestedManyWithoutRestaurantsInput } from "./ReviewCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: AddressWhereUniqueInput | null;
  cuisine?: CuisineCreateNestedManyWithoutRestaurantsInput;
  name: string;
  reviews?: ReviewCreateNestedManyWithoutRestaurantsInput;
};
