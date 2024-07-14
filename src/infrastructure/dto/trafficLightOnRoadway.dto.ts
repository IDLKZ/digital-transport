import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class TrafficLightOnRoadwayCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  order: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  on_axis: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  have_controller: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  traffic_light_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  pedestrian_traffic_light_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  rotary_section_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  have_column: boolean;

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
  traffic_light_type_id: number;
}

export class TrafficLightOnRoadwayUpdateDto {
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
  on_axis: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  have_controller: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  traffic_light_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  pedestrian_traffic_light_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  rotary_section_qty: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  have_column: boolean;

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
  traffic_light_type_id: number;
}
