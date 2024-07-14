import { RoleModel } from "./RoleModel";

export type UserModel = {
  id: number;
  name: string;
  email: string;
  phone: string;
  password_hash: string;
  email_verified: boolean;
  is_active: boolean;
  role_id: number;
  role?: RoleModel | null;
  created_at: Date;
  updated_at: Date;
};