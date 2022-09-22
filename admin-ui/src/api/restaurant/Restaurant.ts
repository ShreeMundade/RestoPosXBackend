import { Address } from "../address/Address";
import { Cuisine } from "../cuisine/Cuisine";
import { Review } from "../review/Review";

export type Restaurant = {
  address?: Address | null;
  createdAt: Date;
  cuisine?: Array<Cuisine>;
  id: string;
  name: string;
  reviews?: Array<Review>;
  updatedAt: Date;
};
