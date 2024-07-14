import { CommunicationTypeModel } from "../models/CommunicationTypeModel";
import { CommunicationType } from "@prisma/client";

export interface CommunicationTypeRepository{
  create(CommunicationType:CommunicationTypeModel):Promise<CommunicationType>;
  findAll():Promise<CommunicationType[]>;
  findById(id:number):Promise<CommunicationType>;
  update(CommunicationType:CommunicationTypeModel):Promise<CommunicationType>
  delete(id:number):Promise<CommunicationType>
}