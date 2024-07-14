import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class LengthOfTheRoadSurfaceCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  start: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  end: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  total_length: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  coverage_type_id: number;
}

export class LengthOfTheRoadSurfaceUpdateDto {
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
  start: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  end: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  total_length: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  coverage_type_id: number;
}
