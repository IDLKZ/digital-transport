import { Injectable, NotFoundException } from "@nestjs/common";
import { UnitRepository } from "../../domain/repositories/unit.repository";
import { UnitModel } from "../../domain/models/UnitModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { UnitMapper } from "../mapper/unit.mapper";
import { Prisma, Unit } from "@prisma/client";

@Injectable()
export class UnitImplRepository implements UnitRepository{

  constructor(private prisma: PrismaService) {}

  async  create(Unit: UnitModel): Promise<Unit> {
    return await this.prisma.unit.create({
      data:UnitMapper.toPersistence(Unit)
    });
  }

  async delete(id: number): Promise<Unit> {
    try {
      return await this.prisma.unit.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Unit Not Found")
    }
  }

  async findAll(): Promise<Unit[]> {
    return await this.prisma.unit.findMany();
  }

  async findById(id: number): Promise<Unit> {
    try {
      return await this.prisma.unit.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Unit Not Found")
    }
  }

  async update(Unit: UnitModel): Promise<Unit> {
    try {
      return await this.prisma.unit.update({
        where:{
          id:Unit.id
        },
        data:UnitMapper.toPersistence(Unit)
      })
    }
    catch (e) {
      throw new NotFoundException("Unit Not Found")
    }

  }





}