import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";
import { RestaurantCreateNestedManyWithoutAddressesInput } from "./RestaurantCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  restaurants?: RestaurantCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
