import { Injectable, NotFoundException } from "@nestjs/common";
import { SideRepository } from "../../domain/repositories/side.repository";
import { SideModel } from "../../domain/models/SideModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { SideMapper } from "../mapper/Side.mapper";
import { Prisma, Side } from "@prisma/client";

@Injectable()
export class SideImplRepository implements SideRepository{

  constructor(private prisma: PrismaService) {}

  async  create(Side: SideModel): Promise<Side> {
    return await this.prisma.side.create({
      data:SideMapper.toPersistence(Side)
    });
  }

  async delete(id: number): Promise<Side> {
    try {
      return await this.prisma.side.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Side Not Found")
    }
  }

  async findAll(): Promise<Side[]> {
    return await this.prisma.side.findMany();
  }

  async findById(id: number): Promise<Side> {
    try {
      return await this.prisma.side.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Side Not Found")
    }
  }

  async update(Side: SideModel): Promise<Side> {
    try {
      return await this.prisma.side.update({
        where:{
          id:Side.id
        },
        data:SideMapper.toPersistence(Side)
      })
    }
    catch (e) {
      throw new NotFoundException("Side Not Found")
    }

  }





}