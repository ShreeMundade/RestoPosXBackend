import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  content?: string | null;
  like?: boolean;
  restaurant?: RestaurantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
