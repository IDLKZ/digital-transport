import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class RoadMarkingCreateDto {
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
  @IsString()
  line_of_number: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  normative_document?: string;
}

export class RoadMarkingUpdateDto {
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
  @IsString()
  line_of_number: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  normative_document?: string;
}
