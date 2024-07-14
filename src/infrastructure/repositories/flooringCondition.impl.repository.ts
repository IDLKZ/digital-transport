import { Injectable, NotFoundException } from "@nestjs/common";
import { FlooringConditionRepository } from "../../domain/repositories/flooringCondition.repository";
import { FlooringConditionModel } from "../../domain/models/FlooringConditionModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { FlooringConditionMapper } from "../mapper/flooringCondition.mapper";
import { Prisma, FlooringCondition } from "@prisma/client";

@Injectable()
export class FlooringConditionImplRepository implements FlooringConditionRepository{

  constructor(private prisma: PrismaService) {}

  async  create(FlooringCondition: FlooringConditionModel): Promise<FlooringCondition> {
    return await this.prisma.flooringCondition.create({
      data:FlooringConditionMapper.toPersistence(FlooringCondition)
    });
  }

  async delete(id: number): Promise<FlooringCondition> {
    try {
      return await this.prisma.flooringCondition.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("FlooringCondition Not Found")
    }
  }

  async findAll(): Promise<FlooringCondition[]> {
    return await this.prisma.flooringCondition.findMany();
  }

  async findById(id: number): Promise<FlooringCondition> {
    try {
      return await this.prisma.flooringCondition.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("FlooringCondition Not Found")
    }
  }

  async update(FlooringCondition: FlooringConditionModel): Promise<FlooringCondition> {
    try {
      return await this.prisma.flooringCondition.update({
        where:{
          id:FlooringCondition.id
        },
        data:FlooringConditionMapper.toPersistence(FlooringCondition)
      })
    }
    catch (e) {
      throw new NotFoundException("FlooringCondition Not Found")
    }

  }





}