import { PublicStopsOnTheHighwayModel } from "../models/PublicStopsOnTheHighwayModel";
import { PublicStopsOnTheHighway } from "@prisma/client";

export interface PublicStopsOnTheHighwayRepository{
  create(PublicStopsOnTheHighway:PublicStopsOnTheHighwayModel):Promise<PublicStopsOnTheHighway>;
  findAll():Promise<PublicStopsOnTheHighway[]>;
  findById(id:number):Promise<PublicStopsOnTheHighway>;
  update(PublicStopsOnTheHighway:PublicStopsOnTheHighwayModel):Promise<PublicStopsOnTheHighway>
  delete(id:number):Promise<PublicStopsOnTheHighway>
}