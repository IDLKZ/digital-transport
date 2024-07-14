import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class LightingOnRoadwayCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  on_axis_m: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  lighting_target?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  side_id: number;
}

export class LightingOnRoadwayUpdateDto {
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

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  lighting_target?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  side_id: number;
}
