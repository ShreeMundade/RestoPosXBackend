import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CuisineListRelationFilter } from "../cuisine/CuisineListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type RestaurantWhereInput = {
  address?: AddressWhereUniqueInput;
  cuisine?: CuisineListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  reviews?: ReviewListRelationFilter;
};
