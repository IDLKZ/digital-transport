import { Injectable, NotFoundException } from "@nestjs/common";
import { SideStoneTypeRepository } from "../../domain/repositories/sideStoneType.repository";
import { SideStoneTypeModel } from "../../domain/models/SideStoneTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { SideStoneTypeMapper } from "../mapper/sideStoneType.mapper";
import { Prisma, SideStoneType } from "@prisma/client";

@Injectable()
export class SideStoneTypeImplRepository implements SideStoneTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(SideStoneType: SideStoneTypeModel): Promise<SideStoneType> {
    return await this.prisma.sideStoneType.create({
      data:SideStoneTypeMapper.toPersistence(SideStoneType)
    });
  }

  async delete(id: number): Promise<SideStoneType> {
    try {
      return await this.prisma.sideStoneType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("SideStoneType Not Found")
    }
  }

  async findAll(): Promise<SideStoneType[]> {
    return await this.prisma.sideStoneType.findMany();
  }

  async findById(id: number): Promise<SideStoneType> {
    try {
      return await this.prisma.sideStoneType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("SideStoneType Not Found")
    }
  }

  async update(SideStoneType: SideStoneTypeModel): Promise<SideStoneType> {
    try {
      return await this.prisma.sideStoneType.update({
        where:{
          id:SideStoneType.id
        },
        data:SideStoneTypeMapper.toPersistence(SideStoneType)
      })
    }
    catch (e) {
      throw new NotFoundException("SideStoneType Not Found")
    }
  }
}