import { PedestrianCrossingPositionModel } from "../models/PedestrianCrossingPositionModel";
import { PedestrianCrossingPosition } from "@prisma/client";

export interface PedestrianCrossingPositionRepository{
  create(PedestrianCrossingPosition:PedestrianCrossingPositionModel):Promise<PedestrianCrossingPosition>;
  findAll():Promise<PedestrianCrossingPosition[]>;
  findById(id:number):Promise<PedestrianCrossingPosition>;
  update(PedestrianCrossingPosition:PedestrianCrossingPositionModel):Promise<PedestrianCrossingPosition>
  delete(id:number):Promise<PedestrianCrossingPosition>
}