import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UserCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  password_hash: string;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  email_verified: boolean;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  is_active: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  role_id: number;
}

export class UserUpdateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  password_hash: string;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  email_verified: boolean;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  is_active: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  role_id: number;
}
