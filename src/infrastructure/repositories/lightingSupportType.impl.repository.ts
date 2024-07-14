import { Injectable, NotFoundException } from "@nestjs/common";
import { LightingSupportTypeRepository } from "../../domain/repositories/lightingSupportType.repository";
import { LightingSupportTypeModel } from "../../domain/models/LightingSupportTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { LightingSupportTypeMapper } from "../mapper/lightingSupportType.mapper";
import { Prisma, LightingSupportType } from "@prisma/client";

@Injectable()
export class LightingSupportTypeImplRepository implements LightingSupportTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(LightingSupportType: LightingSupportTypeModel): Promise<LightingSupportType> {
    return await this.prisma.lightingSupportType.create({
      data:LightingSupportTypeMapper.toPersistence(LightingSupportType)
    });
  }

  async delete(id: number): Promise<LightingSupportType> {
    try {
      return await this.prisma.lightingSupportType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LightingSupportType Not Found")
    }
  }

  async findAll(): Promise<LightingSupportType[]> {
    return await this.prisma.lightingSupportType.findMany();
  }

  async findById(id: number): Promise<LightingSupportType> {
    try {
      return await this.prisma.lightingSupportType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LightingSupportType Not Found")
    }
  }

  async update(LightingSupportType: LightingSupportTypeModel): Promise<LightingSupportType> {
    try {
      return await this.prisma.lightingSupportType.update({
        where:{
          id:LightingSupportType.id
        },
        data:LightingSupportTypeMapper.toPersistence(LightingSupportType)
      })
    }
    catch (e) {
      throw new NotFoundException("LightingSupportType Not Found")
    }

  }





}