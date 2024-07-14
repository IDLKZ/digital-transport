import { FlooringConditionModel } from "../models/FlooringConditionModel";
import { FlooringCondition } from "@prisma/client";

export interface FlooringConditionRepository{
  create(FlooringCondition:FlooringConditionModel):Promise<FlooringCondition>;
  findAll():Promise<FlooringCondition[]>;
  findById(id:number):Promise<FlooringCondition>;
  update(FlooringCondition:FlooringConditionModel):Promise<FlooringCondition>
  delete(id:number):Promise<FlooringCondition>
}