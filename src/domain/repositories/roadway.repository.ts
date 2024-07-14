import { RoadwayModel } from "../models/RoadwayModel";
import { Roadway } from "@prisma/client";

export interface RoadwayRepository{
  create(Roadway:RoadwayModel):Promise<Roadway>;
  findAll():Promise<Roadway[]>;
  findById(id:number):Promise<Roadway>;
  update(Roadway:RoadwayModel):Promise<Roadway>
  delete(id:number):Promise<Roadway>
}