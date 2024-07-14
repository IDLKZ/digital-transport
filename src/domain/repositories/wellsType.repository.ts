import { WellsTypeModel } from "../models/WellsTypeModel";
import { WellsType } from "@prisma/client";

export interface WellsTypeRepository{
  create(WellsType:WellsTypeModel):Promise<WellsType>;
  findAll():Promise<WellsType[]>;
  findById(id:number):Promise<WellsType>;
  update(WellsType:WellsTypeModel):Promise<WellsType>
  delete(id:number):Promise<WellsType>
}