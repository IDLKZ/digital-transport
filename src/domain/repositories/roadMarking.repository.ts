import { RoadMarkingModel } from "../models/RoadMarkingModel";
import { RoadMarking } from "@prisma/client";

export interface RoadMarkingRepository{
  create(RoadMarking:RoadMarkingModel):Promise<RoadMarking>;
  findAll():Promise<RoadMarking[]>;
  findById(id:number):Promise<RoadMarking>;
  update(RoadMarking:RoadMarkingModel):Promise<RoadMarking>
  delete(id:number):Promise<RoadMarking>
}