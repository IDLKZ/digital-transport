import { RoadSignMaterialModel } from "../models/RoadSignMaterialModel";
import { RoadSignMaterial } from "@prisma/client";

export interface RoadSignMaterialRepository{
  create(RoadSignMaterial:RoadSignMaterialModel):Promise<RoadSignMaterial>;
  findAll():Promise<RoadSignMaterial[]>;
  findById(id:number):Promise<RoadSignMaterial>;
  update(RoadSignMaterial:RoadSignMaterialModel):Promise<RoadSignMaterial>
  delete(id:number):Promise<RoadSignMaterial>
}