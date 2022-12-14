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
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CuisineCreateNestedManyWithoutRestaurantsInput } from "./CuisineCreateNestedManyWithoutRestaurantsInput";
import { ReviewCreateNestedManyWithoutRestaurantsInput } from "./ReviewCreateNestedManyWithoutRestaurantsInput";
@InputType()
class RestaurantCreateInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CuisineCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => CuisineCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => CuisineCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  cuisine?: CuisineCreateNestedManyWithoutRestaurantsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutRestaurantsInput;
}
export { RestaurantCreateInput };
