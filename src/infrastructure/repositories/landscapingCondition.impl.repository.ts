import { Injectable, NotFoundException } from "@nestjs/common";
import { LandscapingConditionRepository } from "../../domain/repositories/landscapingCondition.repository";
import { LandscapingConditionModel } from "../../domain/models/LandscapingConditionModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { LandscapingConditionMapper } from "../mapper/landscapingCondition.mapper";
import { Prisma, LandscapingCondition } from "@prisma/client";

@Injectable()
export class LandscapingConditionImplRepository implements LandscapingConditionRepository{

  constructor(private prisma: PrismaService) {}

  async  create(LandscapingCondition: LandscapingConditionModel): Promise<LandscapingCondition> {
    return await this.prisma.landscapingCondition.create({
      data:LandscapingConditionMapper.toPersistence(LandscapingCondition)
    });
  }

  async delete(id: number): Promise<LandscapingCondition> {
    try {
      return await this.prisma.landscapingCondition.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LandscapingCondition Not Found")
    }
  }

  async findAll(): Promise<LandscapingCondition[]> {
    return await this.prisma.landscapingCondition.findMany();
  }

  async findById(id: number): Promise<LandscapingCondition> {
    try {
      return await this.prisma.landscapingCondition.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("LandscapingCondition Not Found")
    }
  }

  async update(LandscapingCondition: LandscapingConditionModel): Promise<LandscapingCondition> {
    try {
      return await this.prisma.landscapingCondition.update({
        where:{
          id:LandscapingCondition.id
        },
        data:LandscapingConditionMapper.toPersistence(LandscapingCondition)
      })
    }
    catch (e) {
      throw new NotFoundException("LandscapingCondition Not Found")
    }

  }





}