import { RolePermissionModel } from "../models/RolePermissionModel";
import { RolePermission } from "@prisma/client";

export interface RolePermissionRepository{
  create(RolePermission:RolePermissionModel):Promise<RolePermission>;
  findAll():Promise<RolePermission[]>;
  findById(id:number):Promise<RolePermission>;
  update(RolePermission:RolePermissionModel):Promise<RolePermission>
  delete(id:number):Promise<RolePermission>
}