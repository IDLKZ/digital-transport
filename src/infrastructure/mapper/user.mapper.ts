import { UserCreateDto, UserUpdateDto } from "../dto/user.dto";
import { UserModel } from "../../domain/models/UserModel";
import { Prisma, User } from "@prisma/client";

export class UserMapper {
  static toPersistence(model: UserModel): Prisma.UserUncheckedCreateInput {
    return {
      id: model.id,
      name: model.name,
      email: model.email,
      phone: model.phone,
      password_hash: model.password_hash,
      email_verified: model.email_verified,
      is_active: model.is_active,
      role_id: model.role_id,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: UserCreateDto): UserModel {
    return {
      id: null,
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      password_hash: dto.password_hash,
      email_verified: dto.email_verified ?? false,
      is_active: dto.is_active ?? false,
      role_id: dto.role_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: UserUpdateDto): UserModel {
    return {
      id: dto.id,
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      password_hash: dto.password_hash,
      email_verified: dto.email_verified,
      is_active: dto.is_active,
      role_id: dto.role_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}