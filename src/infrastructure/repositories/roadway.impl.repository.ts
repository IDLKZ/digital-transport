import { Injectable, NotFoundException } from "@nestjs/common";
import { RoadwayRepository } from "../../domain/repositories/roadway.repository";
import { RoadwayModel } from "../../domain/models/RoadwayModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RoadwayMapper } from "../mapper/roadway.mapper";
import { Prisma, Roadway } from "@prisma/client";

@Injectable()
export class RoadwayImplRepository implements RoadwayRepository{

  constructor(private prisma: PrismaService) {}

  async  create(Roadway: RoadwayModel): Promise<Roadway> {
    return await this.prisma.roadway.create({
      data:RoadwayMapper.toPersistence(Roadway)
    });
  }

  async delete(id: number): Promise<Roadway> {
    try {
      return await this.prisma.roadway.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Roadway Not Found")
    }
  }

  async findAll(): Promise<Roadway[]> {
    return await this.prisma.roadway.findMany();
  }

  async findById(id: number): Promise<Roadway> {
    try {
      return await this.prisma.roadway.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Roadway Not Found")
    }
  }

  async update(Roadway: RoadwayModel): Promise<Roadway> {
    try {
      return await this.prisma.roadway.update({
        where:{
          id:Roadway.id
        },
        data:RoadwayMapper.toPersistence(Roadway)
      })
    }
    catch (e) {
      throw new NotFoundException("Roadway Not Found")
    }

  }





}