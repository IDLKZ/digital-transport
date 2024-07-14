import { BarrierTypeModel } from "../models/BarrierTypeModel";
import { BarrierType } from "@prisma/client";

export interface BarrierTypeRepository{
  create(BarrierType:BarrierTypeModel):Promise<BarrierType>;
  findAll():Promise<BarrierType[]>;
  findById(id:number):Promise<BarrierType>;
  update(BarrierType:BarrierTypeModel):Promise<BarrierType>
  delete(id:number):Promise<BarrierType>
}