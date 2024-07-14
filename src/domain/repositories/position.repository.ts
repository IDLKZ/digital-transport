import { PositionModel } from "../models/PositionModel";
import { Position } from "@prisma/client";

export interface PositionRepository{
  create(Position:PositionModel):Promise<Position>;
  findAll():Promise<Position[]>;
  findById(id:number):Promise<Position>;
  update(Position:PositionModel):Promise<Position>
  delete(id:number):Promise<Position>
}