import { Injectable, NotFoundException } from "@nestjs/common";
import { LandingTypeRepository } from "../../domain/repositories/landingType.repository";
import { LandingTypeModel } from "../../domain/models/LandingTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { LandingTypeMapper } from "../mapper/landingType.mapper";
import { Prisma, LandingType } from "@prisma/client";

@Injectable()
export class LandingTypeImplRepository implements LandingTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(LandingType: LandingTypeModel): Promise<LandingType> {
    return await this.prisma.landingType.create({
      data:LandingTypeMapper.toPersistence(LandingType)
    });
  }

  async delete(id: number): Promise<LandingType> {
    try {
      return await this.prisma.landingType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LandingType Not Found")
    }
  }

  async findAll(): Promise<LandingType[]> {
    return await this.prisma.landingType.findMany();
  }

  async findById(id: number): Promise<LandingType> {
    try {
      return await this.prisma.landingType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LandingType Not Found")
    }
  }

  async update(LandingType: LandingTypeModel): Promise<LandingType> {
    try {
      return await this.prisma.landingType.update({
        where:{
          id:LandingType.id
        },
        data:LandingTypeMapper.toPersistence(LandingType)
      })
    }
    catch (e) {
      throw new NotFoundException("LandingType Not Found")
    }

  }





}