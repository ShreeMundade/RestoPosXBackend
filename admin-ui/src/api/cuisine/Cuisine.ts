import { Restaurant } from "../restaurant/Restaurant";

export type Cuisine = {
  createdAt: Date;
  id: string;
  name: string;
  restaurants?: Array<Restaurant>;
  updatedAt: Date;
};
