import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PublicStopsOnTheHighwayCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  start_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  end_m: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  bus_stop?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  pavilion_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  distance_to_the_roadway_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  have_route: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  boarding_square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  extension_square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  side_id: number;
}

export class PublicStopsOnTheHighwayUpdateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  start_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  end_m: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  bus_stop?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  pavilion_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  distance_to_the_roadway_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  have_route: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  boarding_square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  extension_square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  side_id: number;
}
