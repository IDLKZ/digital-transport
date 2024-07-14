import { LandscapingConditionModel } from "../models/LandscapingConditionModel";
import { LandscapingCondition } from "@prisma/client";

export interface LandscapingConditionRepository{
  create(LandscapingCondition:LandscapingConditionModel):Promise<LandscapingCondition>;
  findAll():Promise<LandscapingCondition[]>;
  findById(id:number):Promise<LandscapingCondition>;
  update(LandscapingCondition:LandscapingConditionModel):Promise<LandscapingCondition>
  delete(id:number):Promise<LandscapingCondition>
}