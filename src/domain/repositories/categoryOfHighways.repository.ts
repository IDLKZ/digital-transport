import { CategoryOfHighwaysModel } from "../models/CategoryOfHighwaysModel";
import { CategoryOfHighways } from "@prisma/client";

export interface CategoryOfHighwaysRepository{
  create(CategoryOfHighways:CategoryOfHighwaysModel):Promise<CategoryOfHighways>;
  findAll():Promise<CategoryOfHighways[]>;
  findById(id:number):Promise<CategoryOfHighways>;
  update(CategoryOfHighways:CategoryOfHighwaysModel):Promise<CategoryOfHighways>
  delete(id:number):Promise<CategoryOfHighways>
}