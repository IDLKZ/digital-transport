import { LightingSupportTypeModel } from "../models/LightingSupportTypeModel";
import { LightingSupportType } from "@prisma/client";

export interface LightingSupportTypeRepository{
  create(LightingSupportType:LightingSupportTypeModel):Promise<LightingSupportType>;
  findAll():Promise<LightingSupportType[]>;
  findById(id:number):Promise<LightingSupportType>;
  update(LightingSupportType:LightingSupportTypeModel):Promise<LightingSupportType>
  delete(id:number):Promise<LightingSupportType>
}