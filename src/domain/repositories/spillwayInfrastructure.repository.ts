import { SpillwayInfrastructureModel } from "../models/SpillwayInfrastructureModel";
import { SpillwayInfrastructure } from "@prisma/client";

export interface SpillwayInfrastructureRepository{
  create(SpillwayInfrastructure:SpillwayInfrastructureModel):Promise<SpillwayInfrastructure>;
  findAll():Promise<SpillwayInfrastructure[]>;
  findById(id:number):Promise<SpillwayInfrastructure>;
  update(SpillwayInfrastructure:SpillwayInfrastructureModel):Promise<SpillwayInfrastructure>
  delete(id:number):Promise<SpillwayInfrastructure>
}