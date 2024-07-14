import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ArchitecturalFormOnRoadwayCreateDto {
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
  square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  perim_m: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  feature?: string;

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
  architectural_form_id: number;
}

export class ArchitecturalFormOnRoadwayUpdateDto {
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
  square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  perim_m: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  feature?: string;

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
  architectural_form_id: number;
}
