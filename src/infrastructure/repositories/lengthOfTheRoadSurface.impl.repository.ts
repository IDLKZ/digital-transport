import { Injectable, NotFoundException } from "@nestjs/common";
import { LengthOfTheRoadSurfaceRepository } from "../../domain/repositories/lengthOfTheRoadSurface.repository";
import { LengthOfTheRoadSurfaceModel } from "../../domain/models/LengthOfTheRoadSurfaceModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { LengthOfTheRoadSurfaceMapper } from "../mapper/lengthOfTheRoadSurface.mapper";
import { Prisma, LengthOfTheRoadSurface } from "@prisma/client";

@Injectable()
export class LengthOfTheRoadSurfaceImplRepository implements LengthOfTheRoadSurfaceRepository{

  constructor(private prisma: PrismaService) {}

  async  create(LengthOfTheRoadSurface: LengthOfTheRoadSurfaceModel): Promise<LengthOfTheRoadSurface> {
    return await this.prisma.lengthOfTheRoadSurface.create({
      data:LengthOfTheRoadSurfaceMapper.toPersistence(LengthOfTheRoadSurface)
    });
  }

  async delete(id: number): Promise<LengthOfTheRoadSurface> {
    try {
      return await this.prisma.lengthOfTheRoadSurface.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LengthOfTheRoadSurface Not Found")
    }
  }

  async findAll(): Promise<LengthOfTheRoadSurface[]> {
    return await this.prisma.lengthOfTheRoadSurface.findMany();
  }

  async findById(id: number): Promise<LengthOfTheRoadSurface> {
    try {
      return await this.prisma.lengthOfTheRoadSurface.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LengthOfTheRoadSurface Not Found")
    }
  }

  async update(LengthOfTheRoadSurface: LengthOfTheRoadSurfaceModel): Promise<LengthOfTheRoadSurface> {
    try {
      return await this.prisma.lengthOfTheRoadSurface.update({
        where:{
          id:LengthOfTheRoadSurface.id
        },
        data:LengthOfTheRoadSurfaceMapper.toPersistence(LengthOfTheRoadSurface)
      })
    }
    catch (e) {
      throw new NotFoundException("LengthOfTheRoadSurface Not Found")
    }

  }





}