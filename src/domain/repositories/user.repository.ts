import { UserModel } from "../models/UserModel";
import { User } from "@prisma/client";

export interface UserRepository{
  create(User:UserModel):Promise<User>;
  findAll():Promise<User[]>;
  findById(id:number):Promise<User>;
  update(User:UserModel):Promise<User>
  delete(id:number):Promise<User>
}