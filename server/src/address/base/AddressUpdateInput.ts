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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { Type } from "class-transformer";
import { RestaurantUpdateManyWithoutAddressesInput } from "./RestaurantUpdateManyWithoutAddressesInput";
@InputType()
class AddressUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address_1?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address_2?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: () => CustomerUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => CustomerUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => CustomerUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  customers?: CustomerUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: () => RestaurantUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => RestaurantUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => RestaurantUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  restaurants?: RestaurantUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  zip?: number | null;
}
export { AddressUpdateInput };
