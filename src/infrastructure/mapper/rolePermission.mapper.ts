import { RolePermissionModel } from "../../domain/models/RolePermissionModel";
import { Prisma, RolePermission } from "@prisma/client";
import { RolePermissionCreateDto, RolePermissionUpdateDto } from "../dto/rolePermission.dto";

export class RolePermissionMapper {
  static toPersistence(model: RolePermissionModel):Prisma.RolePermissionUncheckedCreateInput  {
    return {
      role_id: model.role_id,
      permission_id: model.permission_id,
      created_at: new Date(),
      updated_at: new Date()
    };
  }

  static fromCreateDtoToModel(dto: RolePermissionCreateDto): RolePermission {
    return {
      id: null,
      role_id: dto.role_id,
      permission_id: dto.permission_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: RolePermissionUpdateDto): RolePermission {
    return {
      id: dto.id,
      role_id: dto.role_id,
      permission_id: dto.permission_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}