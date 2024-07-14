import { Injectable, NotFoundException } from "@nestjs/common";
import { BarrierTypeRepository } from "../../domain/repositories/barrierType.repository";
import { BarrierTypeModel } from "../../domain/models/BarrierTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { BarrierTypeMapper } from "../mapper/barrierType.mapper";
import { Prisma, BarrierType } from "@prisma/client";

@Injectable()
export class BarrierTypeImplRepository implements BarrierTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(BarrierType: BarrierTypeModel): Promise<BarrierType> {
    return await this.prisma.barrierType.create({
      data:BarrierTypeMapper.toPersistence(BarrierType)
    });
  }

  async delete(id: number): Promise<BarrierType> {
    try {
      return await this.prisma.barrierType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("BarrierType Not Found")
    }
  }

  async findAll(): Promise<BarrierType[]> {
    return await this.prisma.barrierType.findMany();
  }

  async findById(id: number): Promise<BarrierType> {
    try {
      return await this.prisma.barrierType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("BarrierType Not Found")
    }
  }

  async update(BarrierType: BarrierTypeModel): Promise<BarrierType> {
    try {
      return await this.prisma.barrierType.update({
        where:{
          id:BarrierType.id
        },
        data:BarrierTypeMapper.toPersistence(BarrierType)
      })
    }
    catch (e) {
      throw new NotFoundException("BarrierType Not Found")
    }

  }





}