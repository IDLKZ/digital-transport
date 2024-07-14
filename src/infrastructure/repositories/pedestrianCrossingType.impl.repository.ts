import { Injectable, NotFoundException } from "@nestjs/common";
import { PedestrianCrossingTypeRepository } from "../../domain/repositories/pedestrianCrossingType.repository";
import { PedestrianCrossingTypeModel } from "../../domain/models/PedestrianCrossingTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { PedestrianCrossingTypeMapper } from "../mapper/pedestrianCrossingType.mapper";
import { Prisma, PedestrianCrossingType } from "@prisma/client";

@Injectable()
export class PedestrianCrossingTypeImplRepository implements PedestrianCrossingTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(PedestrianCrossingType: PedestrianCrossingTypeModel): Promise<PedestrianCrossingType> {
    return await this.prisma.pedestrianCrossingType.create({
      data:PedestrianCrossingTypeMapper.toPersistence(PedestrianCrossingType)
    });
  }

  async delete(id: number): Promise<PedestrianCrossingType> {
    try {
      return await this.prisma.pedestrianCrossingType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("PedestrianCrossingType Not Found")
    }
  }

  async findAll(): Promise<PedestrianCrossingType[]> {
    return await this.prisma.pedestrianCrossingType.findMany();
  }

  async findById(id: number): Promise<PedestrianCrossingType> {
    try {
      return await this.prisma.pedestrianCrossingType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("PedestrianCrossingType Not Found")
    }
  }

  async update(PedestrianCrossingType: PedestrianCrossingTypeModel): Promise<PedestrianCrossingType> {
    try {
      return await this.prisma.pedestrianCrossingType.update({
        where:{
          id:PedestrianCrossingType.id
        },
        data:PedestrianCrossingTypeMapper.toPersistence(PedestrianCrossingType)
      })
    }
    catch (e) {
      throw new NotFoundException("PedestrianCrossingType Not Found")
    }

  }





}