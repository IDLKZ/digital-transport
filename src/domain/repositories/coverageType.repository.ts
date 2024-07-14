import { CoverageTypeModel } from "../models/CoverageTypeModel";
import { CoverageType } from "@prisma/client";

export interface CoverageTypeRepository{
  create(CoverageType:CoverageTypeModel):Promise<CoverageType>;
  findAll():Promise<CoverageType[]>;
  findById(id:number):Promise<CoverageType>;
  update(CoverageType:CoverageTypeModel):Promise<CoverageType>
  delete(id:number):Promise<CoverageType>
}