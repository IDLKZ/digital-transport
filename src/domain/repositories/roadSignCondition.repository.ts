import { RoadSignConditionModel } from "../models/RoadSignConditionModel";
import { RoadSignCondition } from "@prisma/client";

export interface RoadSignConditionRepository{
  create(RoadSignCondition:RoadSignConditionModel):Promise<RoadSignCondition>;
  findAll():Promise<RoadSignCondition[]>;
  findById(id:number):Promise<RoadSignCondition>;
  update(RoadSignCondition:RoadSignConditionModel):Promise<RoadSignCondition>
  delete(id:number):Promise<RoadSignCondition>
}