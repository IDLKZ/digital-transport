import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class LandingTypeOnRoadwayCreateDto {
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

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  width_start_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  width_end_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  square_m: number;

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
  landing_type_id: number;
}

export class LandingTypeOnRoadwayUpdateDto {
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

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  width_start_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  width_end_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  square_m: number;

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
  landing_type_id: number;
}
