import { Injectable, NotFoundException } from "@nestjs/common";
import { LightingOnRoadwayRepository } from "../../domain/repositories/lightingOnRoadway.repository";
import { LightingOnRoadwayModel } from "../../domain/models/LightingOnRoadwayModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { LightingOnRoadwayMapper } from "../mapper/lightingOnRoadway.mapper";
import { Prisma, LightingOnRoadway } from "@prisma/client";

@Injectable()
export class LightingOnRoadwayImplRepository implements LightingOnRoadwayRepository{

  constructor(private prisma: PrismaService) {}

  async  create(LightingOnRoadway: LightingOnRoadwayModel): Promise<LightingOnRoadway> {
    return await this.prisma.lightingOnRoadway.create({
      data:LightingOnRoadwayMapper.toPersistence(LightingOnRoadway)
    });
  }

  async delete(id: number): Promise<LightingOnRoadway> {
    try {
      return await this.prisma.lightingOnRoadway.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LightingOnRoadway Not Found")
    }
  }

  async findAll(): Promise<LightingOnRoadway[]> {
    return await this.prisma.lightingOnRoadway.findMany();
  }

  async findById(id: number): Promise<LightingOnRoadway> {
    try {
      return await this.prisma.lightingOnRoadway.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LightingOnRoadway Not Found")
    }
  }

  async update(LightingOnRoadway: LightingOnRoadwayModel): Promise<LightingOnRoadway> {
    try {
      return await this.prisma.lightingOnRoadway.update({
        where:{
          id:LightingOnRoadway.id
        },
        data:LightingOnRoadwayMapper.toPersistence(LightingOnRoadway)
      })
    }
    catch (e) {
      throw new NotFoundException("LightingOnRoadway Not Found")
    }

  }





}