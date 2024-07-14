import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class InformationOfRoadMarkingCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_width_sm: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_length_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_marking_id: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  road_marking_material_id?: number;
}

export class InformationOfRoadMarkingUpdateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_width_sm: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_length_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_square_m: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  street_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  road_marking_id: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  road_marking_material_id?: number;
}
