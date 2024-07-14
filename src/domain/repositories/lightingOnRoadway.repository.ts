import { LightingOnRoadwayModel } from "../models/LightingOnRoadwayModel";
import { LightingOnRoadway } from "@prisma/client";

export interface LightingOnRoadwayRepository{
  create(LightingOnRoadway:LightingOnRoadwayModel):Promise<LightingOnRoadway>;
  findAll():Promise<LightingOnRoadway[]>;
  findById(id:number):Promise<LightingOnRoadway>;
  update(LightingOnRoadway:LightingOnRoadwayModel):Promise<LightingOnRoadway>
  delete(id:number):Promise<LightingOnRoadway>
}