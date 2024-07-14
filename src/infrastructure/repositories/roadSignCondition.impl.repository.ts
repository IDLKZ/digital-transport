import { Injectable, NotFoundException } from "@nestjs/common";
import { RoadSignConditionRepository } from "../../domain/repositories/roadSignCondition.repository";
import { RoadSignConditionModel } from "../../domain/models/RoadSignConditionModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RoadSignConditionMapper } from "../mapper/roadSignCondition.mapper";
import { Prisma, RoadSignCondition } from "@prisma/client";

@Injectable()
export class RoadSignConditionImplRepository implements RoadSignConditionRepository{

  constructor(private prisma: PrismaService) {}

  async  create(RoadSignCondition: RoadSignConditionModel): Promise<RoadSignCondition> {
    return await this.prisma.roadSignCondition.create({
      data:RoadSignConditionMapper.toPersistence(RoadSignCondition)
    });
  }

  async delete(id: number): Promise<RoadSignCondition> {
    try {
      return await this.prisma.roadSignCondition.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadSignCondition Not Found")
    }
  }

  async findAll(): Promise<RoadSignCondition[]> {
    return await this.prisma.roadSignCondition.findMany();
  }

  async findById(id: number): Promise<RoadSignCondition> {
    try {
      return await this.prisma.roadSignCondition.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadSignCondition Not Found")
    }
  }

  async update(RoadSignCondition: RoadSignConditionModel): Promise<RoadSignCondition> {
    try {
      return await this.prisma.roadSignCondition.update({
        where:{
          id:RoadSignCondition.id
        },
        data:RoadSignConditionMapper.toPersistence(RoadSignCondition)
      })
    }
    catch (e) {
      throw new NotFoundException("RoadSignCondition Not Found")
    }

  }





}