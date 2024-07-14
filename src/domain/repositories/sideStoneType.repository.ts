import { SideStoneTypeModel } from "../models/SideStoneTypeModel";
import { SideStoneType } from "@prisma/client";

export interface SideStoneTypeRepository{
  create(SideStoneType:SideStoneTypeModel):Promise<SideStoneType>;
  findAll():Promise<SideStoneType[]>;
  findById(id:number):Promise<SideStoneType>;
  update(SideStoneType:SideStoneTypeModel):Promise<SideStoneType>
  delete(id:number):Promise<SideStoneType>
}