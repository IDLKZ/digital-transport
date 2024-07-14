import { LengthOfTheRoadSurfaceModel } from "../models/LengthOfTheRoadSurfaceModel";
import { LengthOfTheRoadSurface } from "@prisma/client";

export interface LengthOfTheRoadSurfaceRepository{
  create(LengthOfTheRoadSurface:LengthOfTheRoadSurfaceModel):Promise<LengthOfTheRoadSurface>;
  findAll():Promise<LengthOfTheRoadSurface[]>;
  findById(id:number):Promise<LengthOfTheRoadSurface>;
  update(LengthOfTheRoadSurface:LengthOfTheRoadSurfaceModel):Promise<LengthOfTheRoadSurface>
  delete(id:number):Promise<LengthOfTheRoadSurface>
}