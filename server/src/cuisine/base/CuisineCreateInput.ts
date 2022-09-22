/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { RestaurantCreateNestedManyWithoutCuisinesInput } from "./RestaurantCreateNestedManyWithoutCuisinesInput";
import { Type } from "class-transformer";
@InputType()
class CuisineCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => RestaurantCreateNestedManyWithoutCuisinesInput,
  })
  @ValidateNested()
  @Type(() => RestaurantCreateNestedManyWithoutCuisinesInput)
  @IsOptional()
  @Field(() => RestaurantCreateNestedManyWithoutCuisinesInput, {
    nullable: true,
  })
  restaurants?: RestaurantCreateNestedManyWithoutCuisinesInput;
}
export { CuisineCreateInput };
