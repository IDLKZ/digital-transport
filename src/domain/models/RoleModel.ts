import { RolePermissionModel } from "./RolePermissionModel";
import { UserModel } from "./UserModel";

export type RoleModel = {
  id: number;
  title: string;
  permissions?: RolePermissionModel[] | null;
  users?: UserModel[] | null;
  created_at: Date;
  updated_at: Date;
};