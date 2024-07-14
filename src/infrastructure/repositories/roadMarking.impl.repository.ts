import { Injectable, NotFoundException } from "@nestjs/common";
import { RoadMarkingRepository } from "../../domain/repositories/roadMarking.repository";
import { RoadMarkingModel } from "../../domain/models/RoadMarkingModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RoadMarkingMapper } from "../mapper/roadMarking.mapper";
import { Prisma, RoadMarking } from "@prisma/client";

@Injectable()
export class RoadMarkingImplRepository implements RoadMarkingRepository{

  constructor(private prisma: PrismaService) {}

  async  create(RoadMarking: RoadMarkingModel): Promise<RoadMarking> {
    return await this.prisma.roadMarking.create({
      data:RoadMarkingMapper.toPersistence(RoadMarking)
    });
  }

  async delete(id: number): Promise<RoadMarking> {
    try {
      return await this.prisma.roadMarking.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadMarking Not Found")
    }
  }

  async findAll(): Promise<RoadMarking[]> {
    return await this.prisma.roadMarking.findMany();
  }

  async findById(id: number): Promise<RoadMarking> {
    try {
      return await this.prisma.roadMarking.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadMarking Not Found")
    }
  }

  async update(RoadMarking: RoadMarkingModel): Promise<RoadMarking> {
    try {
      return await this.prisma.roadMarking.update({
        where:{
          id:RoadMarking.id
        },
        data:RoadMarkingMapper.toPersistence(RoadMarking)
      })
    }
    catch (e) {
      throw new NotFoundException("RoadMarking Not Found")
    }

  }





}