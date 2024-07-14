import { TrafficLightOnRoadwayModel } from "../models/TrafficLightOnRoadwayModel";
import { TrafficLightOnRoadway } from "@prisma/client";

export interface TrafficLightOnRoadwayRepository{
  create(TrafficLightOnRoadway:TrafficLightOnRoadwayModel):Promise<TrafficLightOnRoadway>;
  findAll():Promise<TrafficLightOnRoadway[]>;
  findById(id:number):Promise<TrafficLightOnRoadway>;
  update(TrafficLightOnRoadway:TrafficLightOnRoadwayModel):Promise<TrafficLightOnRoadway>
  delete(id:number):Promise<TrafficLightOnRoadway>
}