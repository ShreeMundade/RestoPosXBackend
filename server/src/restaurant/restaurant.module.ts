import { Module } from "@nestjs/common";
import { RestaurantModuleBase } from "./base/restaurant.module.base";
import { RestaurantService } from "./restaurant.service";
import { RestaurantController } from "./restaurant.controller";

@Module({
  imports: [RestaurantModuleBase],
  controllers: [RestaurantController],
  providers: [RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
