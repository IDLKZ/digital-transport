import { Injectable, NotFoundException } from "@nestjs/common";
import { TrafficLightOnRoadwayRepository } from "../../domain/repositories/trafficLightOnRoadway.repository";
import { TrafficLightOnRoadwayModel } from "../../domain/models/TrafficLightOnRoadwayModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { TrafficLightOnRoadwayMapper } from "../mapper/trafficLightOnRoadway.mapper";
import { Prisma, TrafficLightOnRoadway } from "@prisma/client";

@Injectable()
export class TrafficLightOnRoadwayImplRepository implements TrafficLightOnRoadwayRepository{

  constructor(private prisma: PrismaService) {}

  async  create(TrafficLightOnRoadway: TrafficLightOnRoadwayModel): Promise<TrafficLightOnRoadway> {
    return await this.prisma.trafficLightOnRoadway.create({
      data:TrafficLightOnRoadwayMapper.toPersistence(TrafficLightOnRoadway)
    });
  }

  async delete(id: number): Promise<TrafficLightOnRoadway> {
    try {
      return await this.prisma.trafficLightOnRoadway.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("TrafficLightOnRoadway Not Found")
    }
  }

  async findAll(): Promise<TrafficLightOnRoadway[]> {
    return await this.prisma.trafficLightOnRoadway.findMany();
  }

  async findById(id: number): Promise<TrafficLightOnRoadway> {
    try {
      return await this.prisma.trafficLightOnRoadway.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("TrafficLightOnRoadway Not Found")
    }
  }

  async update(TrafficLightOnRoadway: TrafficLightOnRoadwayModel): Promise<TrafficLightOnRoadway> {
    try {
      return await this.prisma.trafficLightOnRoadway.update({
        where:{
          id:TrafficLightOnRoadway.id
        },
        data:TrafficLightOnRoadwayMapper.toPersistence(TrafficLightOnRoadway)
      })
    }
    catch (e) {
      throw new NotFoundException("TrafficLightOnRoadway Not Found")
    }

  }





}