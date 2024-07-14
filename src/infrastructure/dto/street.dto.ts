import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class StreetCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  title_ru: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  title_kk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title_en?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsJSON()
  geo_position: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  geo_color?: string;

  @ApiProperty({ required: false, default: true })
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

export class StreetUpdateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  title_ru: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  title_kk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title_en?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsJSON()
  geo_position: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  geo_color?: string;

  @ApiProperty({ required: false, default: true })
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
