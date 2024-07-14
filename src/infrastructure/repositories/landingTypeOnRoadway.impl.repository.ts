import { Injectable, NotFoundException } from "@nestjs/common";
import { LandingTypeOnRoadwayRepository } from "../../domain/repositories/landingTypeOnRoadway.repository";
import { LandingTypeOnRoadwayModel } from "../../domain/models/LandingTypeOnRoadwayModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { LandingTypeOnRoadwayMapper } from "../mapper/landingTypeOnRoadway.mapper";
import { Prisma, LandingTypeOnRoadway } from "@prisma/client";

@Injectable()
export class LandingTypeOnRoadwayImplRepository implements LandingTypeOnRoadwayRepository{

  constructor(private prisma: PrismaService) {}

  async  create(LandingTypeOnRoadway: LandingTypeOnRoadwayModel): Promise<LandingTypeOnRoadway> {
    return await this.prisma.landingTypeOnRoadway.create({
      data:LandingTypeOnRoadwayMapper.toPersistence(LandingTypeOnRoadway)
    });
  }

  async delete(id: number): Promise<LandingTypeOnRoadway> {
    try {
      return await this.prisma.landingTypeOnRoadway.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LandingTypeOnRoadway Not Found")
    }
  }

  async findAll(): Promise<LandingTypeOnRoadway[]> {
    return await this.prisma.landingTypeOnRoadway.findMany();
  }

  async findById(id: number): Promise<LandingTypeOnRoadway> {
    try {
      return await this.prisma.landingTypeOnRoadway.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LandingTypeOnRoadway Not Found")
    }
  }

  async update(LandingTypeOnRoadway: LandingTypeOnRoadwayModel): Promise<LandingTypeOnRoadway> {
    try {
      return await this.prisma.landingTypeOnRoadway.update({
        where:{
          id:LandingTypeOnRoadway.id
        },
        data:LandingTypeOnRoadwayMapper.toPersistence(LandingTypeOnRoadway)
      })
    }
    catch (e) {
      throw new NotFoundException("LandingTypeOnRoadway Not Found")
    }

  }





}