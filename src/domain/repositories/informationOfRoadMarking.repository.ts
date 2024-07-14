import { InformationOfRoadMarkingModel } from "../models/InformationOfRoadMarkingModel";
import { InformationOfRoadMarking } from "@prisma/client";

export interface InformationOfRoadMarkingRepository{
  create(InformationOfRoadMarking:InformationOfRoadMarkingModel):Promise<InformationOfRoadMarking>;
  findAll():Promise<InformationOfRoadMarking[]>;
  findById(id:number):Promise<InformationOfRoadMarking>;
  update(InformationOfRoadMarking:InformationOfRoadMarkingModel):Promise<InformationOfRoadMarking>
  delete(id:number):Promise<InformationOfRoadMarking>
}