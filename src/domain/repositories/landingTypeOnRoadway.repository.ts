import { LandingTypeOnRoadwayModel } from "../models/LandingTypeOnRoadwayModel";
import { LandingTypeOnRoadway } from "@prisma/client";

export interface LandingTypeOnRoadwayRepository{
  create(LandingTypeOnRoadway:LandingTypeOnRoadwayModel):Promise<LandingTypeOnRoadway>;
  findAll():Promise<LandingTypeOnRoadway[]>;
  findById(id:number):Promise<LandingTypeOnRoadway>;
  update(LandingTypeOnRoadway:LandingTypeOnRoadwayModel):Promise<LandingTypeOnRoadway>
  delete(id:number):Promise<LandingTypeOnRoadway>
}