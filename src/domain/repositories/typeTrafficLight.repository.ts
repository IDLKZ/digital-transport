import { TypeTrafficLightModel } from "../models/TypeTrafficLightModel";
import { TypeTrafficLight } from "@prisma/client";

export interface TypeTrafficLightRepository{
  create(TypeTrafficLight:TypeTrafficLightModel):Promise<TypeTrafficLight>;
  findAll():Promise<TypeTrafficLight[]>;
  findById(id:number):Promise<TypeTrafficLight>;
  update(TypeTrafficLight:TypeTrafficLightModel):Promise<TypeTrafficLight>
  delete(id:number):Promise<TypeTrafficLight>
}