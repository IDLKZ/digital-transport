import { Injectable, NotFoundException } from "@nestjs/common";
import { FencingAndGuideTypeRepository } from "../../domain/repositories/fencingAndGuideType.repository";
import { FencingAndGuideTypeModel } from "../../domain/models/FencingAndGuideTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { FencingAndGuideTypeMapper } from "../mapper/fencingAndGuideType.mapper";
import { Prisma, FencingAndGuideType } from "@prisma/client";

@Injectable()
export class FencingAndGuideTypeImplRepository implements FencingAndGuideTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(FencingAndGuideType: FencingAndGuideTypeModel): Promise<FencingAndGuideType> {
    return await this.prisma.fencingAndGuideType.create({
      data:FencingAndGuideTypeMapper.toPersistence(FencingAndGuideType)
    });
  }

  async delete(id: number): Promise<FencingAndGuideType> {
    try {
      return await this.prisma.fencingAndGuideType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("FencingAndGuideType Not Found")
    }
  }

  async findAll(): Promise<FencingAndGuideType[]> {
    return await this.prisma.fencingAndGuideType.findMany();
  }

  async findById(id: number): Promise<FencingAndGuideType> {
    try {
      return await this.prisma.fencingAndGuideType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("FencingAndGuideType Not Found")
    }
  }

  async update(FencingAndGuideType: FencingAndGuideTypeModel): Promise<FencingAndGuideType> {
    try {
      return await this.prisma.fencingAndGuideType.update({
        where:{
          id:FencingAndGuideType.id
        },
        data:FencingAndGuideTypeMapper.toPersistence(FencingAndGuideType)
      })
    }
    catch (e) {
      throw new NotFoundException("FencingAndGuideType Not Found")
    }

  }





}