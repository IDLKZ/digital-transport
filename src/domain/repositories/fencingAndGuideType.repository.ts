import { FencingAndGuideTypeModel } from "../models/FencingAndGuideTypeModel";
import { FencingAndGuideType } from "@prisma/client";

export interface FencingAndGuideTypeRepository{
  create(FencingAndGuideType:FencingAndGuideTypeModel):Promise<FencingAndGuideType>;
  findAll():Promise<FencingAndGuideType[]>;
  findById(id:number):Promise<FencingAndGuideType>;
  update(FencingAndGuideType:FencingAndGuideTypeModel):Promise<FencingAndGuideType>
  delete(id:number):Promise<FencingAndGuideType>
}