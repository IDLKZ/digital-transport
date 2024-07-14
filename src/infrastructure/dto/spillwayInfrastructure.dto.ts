import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SpillwayInfrastructureCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  on_axis_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  from_axis_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  is_on_the_roadway: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  is_on_the_sidewalk: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  is_on_the_lawn: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  note?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  side_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  well_type_id: number;
}

export class SpillwayInfrastructureUpdateDto {
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
  on_axis_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  from_axis_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  is_on_the_roadway: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  is_on_the_sidewalk: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  is_on_the_lawn: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  note?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  side_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  well_type_id: number;
}
