import { RoadMarkingMaterialModel } from "../models/RoadMarkingMaterialModel";
import { RoadMarkingMaterial } from "@prisma/client";

export interface RoadMarkingMaterialRepository{
  create(RoadMarkingMaterial:RoadMarkingMaterialModel):Promise<RoadMarkingMaterial>;
  findAll():Promise<RoadMarkingMaterial[]>;
  findById(id:number):Promise<RoadMarkingMaterial>;
  update(RoadMarkingMaterial:RoadMarkingMaterialModel):Promise<RoadMarkingMaterial>
  delete(id:number):Promise<RoadMarkingMaterial>
}