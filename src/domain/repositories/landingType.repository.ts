import { LandingTypeModel } from "../models/LandingTypeModel";
import { LandingType } from "@prisma/client";

export interface LandingTypeRepository{
  create(LandingType:LandingTypeModel):Promise<LandingType>;
  findAll():Promise<LandingType[]>;
  findById(id:number):Promise<LandingType>;
  update(LandingType:LandingTypeModel):Promise<LandingType>
  delete(id:number):Promise<LandingType>
}