import { SideModel } from "../models/SideModel";
import { Side } from "@prisma/client";

export interface SideRepository{
  create(Side:SideModel):Promise<Side>;
  findAll():Promise<Side[]>;
  findById(id:number):Promise<Side>;
  update(Side:SideModel):Promise<Side>
  delete(id:number):Promise<Side>
}