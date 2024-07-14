import { PermissionModel } from "./PermissionModel";
import { RoleModel } from "./RoleModel";

export type RolePermissionModel = {
  id: number;
  role_id: number;
  permission_id: number;
  role?: RoleModel | null;
  permission?: PermissionModel | null;
  created_at: Date;
  updated_at: Date;
};
