import { RolePermissionModel } from "./RolePermissionModel";

export type PermissionModel = {
  id: number;
  title: string;
  roles?: RolePermissionModel[] | null;
  created_at: Date;
  updated_at: Date;
};