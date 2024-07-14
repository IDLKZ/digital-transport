import { SideStoneStampModel } from "../models/SideStoneStampModel";
import { SideStoneStamp } from "@prisma/client";

export interface SideStoneStampRepository{
  create(SideStoneStamp:SideStoneStampModel):Promise<SideStoneStamp>;
  findAll():Promise<SideStoneStamp[]>;
  findById(id:number):Promise<SideStoneStamp>;
  update(SideStoneStamp:SideStoneStampModel):Promise<SideStoneStamp>
  delete(id:number):Promise<SideStoneStamp>
}