import { Injectable, NotFoundException } from "@nestjs/common";
import { ArchitecturalFormOnRoadwayRepository } from "../../domain/repositories/architecturalFormOnRoadway.repository";
import { ArchitecturalFormOnRoadwayModel } from "../../domain/models/ArchitecturalFormOnRoadwayModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { ArchitecturalFormOnRoadwayMapper } from "../mapper/architecturalFormOnRoadway.mapper";
import { Prisma, ArchitecturalFormOnRoadway } from "@prisma/client";

@Injectable()
export class ArchitecturalFormOnRoadwayImplRepository implements ArchitecturalFormOnRoadwayRepository{

  constructor(private prisma: PrismaService) {}

  async  create(ArchitecturalFormOnRoadway: ArchitecturalFormOnRoadwayModel): Promise<ArchitecturalFormOnRoadway> {
    return await this.prisma.architecturalFormOnRoadway.create({
      data:ArchitecturalFormOnRoadwayMapper.toPersistence(ArchitecturalFormOnRoadway)
    });
  }

  async delete(id: number): Promise<ArchitecturalFormOnRoadway> {
    try {
      return await this.prisma.architecturalFormOnRoadway.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("ArchitecturalFormOnRoadway Not Found")
    }
  }

  async findAll(): Promise<ArchitecturalFormOnRoadway[]> {
    return await this.prisma.architecturalFormOnRoadway.findMany();
  }

  async findById(id: number): Promise<ArchitecturalFormOnRoadway> {
    try {
      return await this.prisma.architecturalFormOnRoadway.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("ArchitecturalFormOnRoadway Not Found")
    }
  }

  async update(ArchitecturalFormOnRoadway: ArchitecturalFormOnRoadwayModel): Promise<ArchitecturalFormOnRoadway> {
    try {
      return await this.prisma.architecturalFormOnRoadway.update({
        where:{
          id:ArchitecturalFormOnRoadway.id
        },
        data:ArchitecturalFormOnRoadwayMapper.toPersistence(ArchitecturalFormOnRoadway)
      })
    }
    catch (e) {
      throw new NotFoundException("ArchitecturalFormOnRoadway Not Found")
    }

  }





}