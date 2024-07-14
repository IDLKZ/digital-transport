import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { i18nValidationMessage } from 'nestjs-i18n';
export class RoleCreateDto {
  @ApiProperty({ required: true,maxLength:1000})
  @IsNotEmpty()
  @IsString()
  title: string;
}

export class RoleUpdateDto {
  @ApiProperty({ required: true})
  @IsNotEmpty({message:i18nValidationMessage('message.not_empty')})
  @IsNumber()
  id: number;
  @ApiProperty({ required: true,maxLength:1000})
  @IsNotEmpty({message:i18nValidationMessage('message.not_empty')})
  @IsString()
  title: string;
}