import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { RestaurantUpdateManyWithoutAddressesInput } from "./RestaurantUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  restaurants?: RestaurantUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
