import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";

export class WellsTypeCreateDto{
  @ApiProperty({ required: true,maxLength:1000})
  @IsNotEmpty()
  @IsString()
  title_ru: string;
  @ApiProperty({ required: true,maxLength:1000})
  @IsNotEmpty()
  @IsString()
  title_kk: string;
  @ApiProperty({ required: false,maxLength:1000})
  @IsString()
  title_en: string;
}

export class WellsTypeUpdateDto{
  @ApiProperty({ required: true})
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @ApiProperty({ required: true,maxLength:1000})
  @IsNotEmpty()
  @IsString()
  title_ru: string;
  @ApiProperty({ required: true,maxLength:1000})
  @IsNotEmpty()
  @IsString()
  title_kk: string;
  @ApiProperty({ required: false,maxLength:1000})
  @IsString()
  title_en: string;
}