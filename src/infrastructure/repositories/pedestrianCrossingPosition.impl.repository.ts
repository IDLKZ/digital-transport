import { Injectable, NotFoundException } from "@nestjs/common";
import { PedestrianCrossingPositionRepository } from "../../domain/repositories/pedestrianCrossingPosition.repository";
import { PedestrianCrossingPositionModel } from "../../domain/models/PedestrianCrossingPositionModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { PedestrianCrossingPositionMapper } from "../mapper/pedestrianCrossingPosition.mapper";
import { Prisma, PedestrianCrossingPosition } from "@prisma/client";

@Injectable()
export class PedestrianCrossingPositionImplRepository implements PedestrianCrossingPositionRepository{

  constructor(private prisma: PrismaService) {}

  async  create(PedestrianCrossingPosition: PedestrianCrossingPositionModel): Promise<PedestrianCrossingPosition> {
    return await this.prisma.pedestrianCrossingPosition.create({
      data:PedestrianCrossingPositionMapper.toPersistence(PedestrianCrossingPosition)
    });
  }

  async delete(id: number): Promise<PedestrianCrossingPosition> {
    try {
      return await this.prisma.pedestrianCrossingPosition.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("PedestrianCrossingPosition Not Found")
    }
  }

  async findAll(): Promise<PedestrianCrossingPosition[]> {
    return await this.prisma.pedestrianCrossingPosition.findMany();
  }

  async findById(id: number): Promise<PedestrianCrossingPosition> {
    try {
      return await this.prisma.pedestrianCrossingPosition.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("PedestrianCrossingPosition Not Found")
    }
  }

  async update(PedestrianCrossingPosition: PedestrianCrossingPositionModel): Promise<PedestrianCrossingPosition> {
    try {
      return await this.prisma.pedestrianCrossingPosition.update({
        where:{
          id:PedestrianCrossingPosition.id
        },
        data:PedestrianCrossingPositionMapper.toPersistence(PedestrianCrossingPosition)
      })
    }
    catch (e) {
      throw new NotFoundException("PedestrianCrossingPosition Not Found")
    }

  }





}