import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";

export class RolePermissionCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  role_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  permission_id: number;
}

export class RolePermissionUpdateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  role_id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  permission_id: number;
}