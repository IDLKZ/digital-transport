import { PedestrianCrossingTypeModel } from "../models/PedestrianCrossingTypeModel";
import { PedestrianCrossingType } from "@prisma/client";

export interface PedestrianCrossingTypeRepository{
  create(PedestrianCrossingType:PedestrianCrossingTypeModel):Promise<PedestrianCrossingType>;
  findAll():Promise<PedestrianCrossingType[]>;
  findById(id:number):Promise<PedestrianCrossingType>;
  update(PedestrianCrossingType:PedestrianCrossingTypeModel):Promise<PedestrianCrossingType>
  delete(id:number):Promise<PedestrianCrossingType>
}