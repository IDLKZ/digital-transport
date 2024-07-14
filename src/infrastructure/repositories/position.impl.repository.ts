import { Injectable, NotFoundException } from "@nestjs/common";
import { PositionRepository } from "../../domain/repositories/position.repository";
import { PositionModel } from "../../domain/models/PositionModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { PositionMapper } from "../mapper/position.mapper";
import { Prisma, Position } from "@prisma/client";

@Injectable()
export class PositionImplRepository implements PositionRepository{

  constructor(private prisma: PrismaService) {}

  async  create(Position: PositionModel): Promise<Position> {
    return await this.prisma.position.create({
      data:PositionMapper.toPersistence(Position)
    });
  }

  async delete(id: number): Promise<Position> {
    try {
      return await this.prisma.position.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Position Not Found")
    }
  }

  async findAll(): Promise<Position[]> {
    return await this.prisma.position.findMany();
  }

  async findById(id: number): Promise<Position> {
    try {
      return await this.prisma.position.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Position Not Found")
    }
  }

  async update(Position: PositionModel): Promise<Position> {
    try {
      return await this.prisma.position.update({
        where:{
          id:Position.id
        },
        data:PositionMapper.toPersistence(Position)
      })
    }
    catch (e) {
      throw new NotFoundException("Position Not Found")
    }

  }





}