import { Customer } from "../customer/Customer";
import { Restaurant } from "../restaurant/Restaurant";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  restaurants?: Array<Restaurant>;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
