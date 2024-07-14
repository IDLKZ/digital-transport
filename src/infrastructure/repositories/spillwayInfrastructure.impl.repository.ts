import { Injectable, NotFoundException } from "@nestjs/common";
import { SpillwayInfrastructureRepository } from "../../domain/repositories/spillwayInfrastructure.repository";
import { SpillwayInfrastructureModel } from "../../domain/models/SpillwayInfrastructureModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { SpillwayInfrastructureMapper } from "../mapper/spillwayInfrastructure.mapper";
import { Prisma, SpillwayInfrastructure } from "@prisma/client";

@Injectable()
export class SpillwayInfrastructureImplRepository implements SpillwayInfrastructureRepository{

  constructor(private prisma: PrismaService) {}

  async  create(data: SpillwayInfrastructureModel): Promise<SpillwayInfrastructure> {
    return await this.prisma.spillwayInfrastructure.create({
      data:SpillwayInfrastructureMapper.toPersistence(data)
    });
  }

  async delete(id: number): Promise<SpillwayInfrastructure> {
    try {
      return await this.prisma.spillwayInfrastructure.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("SpillwayInfrastructure Not Found")
    }
  }

  async findAll(): Promise<SpillwayInfrastructure[]> {
    return await this.prisma.spillwayInfrastructure.findMany();
  }

  async findById(id: number): Promise<SpillwayInfrastructure> {
    try {
      return await this.prisma.spillwayInfrastructure.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("SpillwayInfrastructure Not Found")
    }
  }

  async update(data: SpillwayInfrastructureModel): Promise<SpillwayInfrastructure> {
    try {
      return await this.prisma.spillwayInfrastructure.update({
        where:{
          id:data.id
        },
        data:SpillwayInfrastructureMapper.toPersistence(data)
      })
    }
    catch (e) {
      throw new NotFoundException("SpillwayInfrastructure Not Found")
    }

  }





}