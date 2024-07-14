import { Injectable, NotFoundException } from "@nestjs/common";
import { WellsTypeRepository } from "../../domain/repositories/wellsType.repository";
import { WellsTypeModel } from "../../domain/models/WellsTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { WellsTypeMapper } from "../mapper/wellsType.mapper";
import { Prisma, WellsType } from "@prisma/client";

@Injectable()
export class WellsTypeImplRepository implements WellsTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(WellsType: WellsTypeModel): Promise<WellsType> {
    return await this.prisma.wellsType.create({
      data:WellsTypeMapper.toPersistence(WellsType)
    });
  }

  async delete(id: number): Promise<WellsType> {
    try {
      return await this.prisma.wellsType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("WellsType Not Found")
    }
  }

  async findAll(): Promise<WellsType[]> {
    return await this.prisma.wellsType.findMany();
  }

  async findById(id: number): Promise<WellsType> {
    try {
      return await this.prisma.wellsType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("WellsType Not Found")
    }
  }

  async update(WellsType: WellsTypeModel): Promise<WellsType> {
    try {
      return await this.prisma.wellsType.update({
        where:{
          id:WellsType.id
        },
        data:WellsTypeMapper.toPersistence(WellsType)
      })
    }
    catch (e) {
      throw new NotFoundException("WellsType Not Found")
    }

  }





}