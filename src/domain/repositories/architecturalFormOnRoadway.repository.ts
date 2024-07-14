import { ArchitecturalFormOnRoadwayModel } from "../models/ArchitecturalFormOnRoadwayModel";
import { ArchitecturalFormOnRoadway } from "@prisma/client";

export interface ArchitecturalFormOnRoadwayRepository{
  create(ArchitecturalFormOnRoadway:ArchitecturalFormOnRoadwayModel):Promise<ArchitecturalFormOnRoadway>;
  findAll():Promise<ArchitecturalFormOnRoadway[]>;
  findById(id:number):Promise<ArchitecturalFormOnRoadway>;
  update(ArchitecturalFormOnRoadway:ArchitecturalFormOnRoadwayModel):Promise<ArchitecturalFormOnRoadway>
  delete(id:number):Promise<ArchitecturalFormOnRoadway>
}