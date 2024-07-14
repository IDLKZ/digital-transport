import { PermissionModel } from "../models/PermissionModel";
import { Permission } from "@prisma/client";

export interface PermissionRepository{
  create(permission:PermissionModel):Promise<Permission>;
  findAll():Promise<Permission[]>;
  findById(id:number):Promise<Permission>;
  update(permission:PermissionModel):Promise<Permission>
  delete(id:number):Promise<Permission>
}