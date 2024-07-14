import { Role } from "@prisma/client";
import { RoleModel } from "../models/RoleModel";

export interface RoleRepository{
  create(role:RoleModel):Promise<Role>;
  findAll():Promise<Role[]>;
  findById(id:number):Promise<Role>;
  update(role:RoleModel):Promise<Role>
  delete(id:number):Promise<Role>
}