import { Injectable, NotFoundException } from "@nestjs/common";
import { CoverageTypeRepository } from "../../domain/repositories/coverageType.repository";
import { CoverageTypeModel } from "../../domain/models/CoverageTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { CoverageTypeMapper } from "../mapper/coverageType.mapper";
import { Prisma, CoverageType } from "@prisma/client";

@Injectable()
export class CoverageTypeImplRepository implements CoverageTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(CoverageType: CoverageTypeModel): Promise<CoverageType> {
    return await this.prisma.coverageType.create({
      data:CoverageTypeMapper.toPersistence(CoverageType)
    });
  }

  async delete(id: number): Promise<CoverageType> {
    try {
      return await this.prisma.coverageType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("CoverageType Not Found")
    }
  }

  async findAll(): Promise<CoverageType[]> {
    return await this.prisma.coverageType.findMany();
  }

  async findById(id: number): Promise<CoverageType> {
    try {
      return await this.prisma.coverageType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("CoverageType Not Found")
    }
  }

  async update(CoverageType: CoverageTypeModel): Promise<CoverageType> {
    try {
      return await this.prisma.coverageType.update({
        where:{
          id:CoverageType.id
        },
        data:CoverageTypeMapper.toPersistence(CoverageType)
      })
    }
    catch (e) {
      throw new NotFoundException("CoverageType Not Found")
    }

  }
}