import { StreetModel } from "../models/StreetModel";
import { Street } from "@prisma/client";

export interface StreetRepository{
  create(Street:StreetModel):Promise<Street>;
  findAll():Promise<Street[]>;
  findById(id:number):Promise<Street>;
  update(Street:StreetModel):Promise<Street>
  delete(id:number):Promise<Street>
}