import { Injectable, NotFoundException } from "@nestjs/common";
import { SideStoneStampRepository } from "../../domain/repositories/sideStoneStamp.repository";
import { SideStoneStampModel } from "../../domain/models/SideStoneStampModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { SideStoneStampMapper } from "../mapper/sideStoneStamp.mapper";
import { Prisma, SideStoneStamp } from "@prisma/client";

@Injectable()
export class SideStoneStampImplRepository implements SideStoneStampRepository{

  constructor(private prisma: PrismaService) {}

  async  create(SideStoneStamp: SideStoneStampModel): Promise<SideStoneStamp> {
    return await this.prisma.sideStoneStamp.create({
      data:SideStoneStampMapper.toPersistence(SideStoneStamp)
    });
  }

  async delete(id: number): Promise<SideStoneStamp> {
    try {
      return await this.prisma.sideStoneStamp.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("SideStoneStamp Not Found")
    }
  }

  async findAll(): Promise<SideStoneStamp[]> {
    return await this.prisma.sideStoneStamp.findMany();
  }

  async findById(id: number): Promise<SideStoneStamp> {
    try {
      return await this.prisma.sideStoneStamp.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("SideStoneStamp Not Found")
    }
  }

  async update(SideStoneStamp: SideStoneStampModel): Promise<SideStoneStamp> {
    try {
      return await this.prisma.sideStoneStamp.update({
        where:{
          id:SideStoneStamp.id
        },
        data:SideStoneStampMapper.toPersistence(SideStoneStamp)
      })
    }
    catch (e) {
      throw new NotFoundException("SideStoneStamp Not Found")
    }

  }





}