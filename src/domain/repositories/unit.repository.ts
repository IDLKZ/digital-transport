import { UnitModel } from "../models/UnitModel";
import { Unit } from "@prisma/client";

export interface UnitRepository{
  create(Unit:UnitModel):Promise<Unit>;
  findAll():Promise<Unit[]>;
  findById(id:number):Promise<Unit>;
  update(Unit:UnitModel):Promise<Unit>
  delete(id:number):Promise<Unit>
}