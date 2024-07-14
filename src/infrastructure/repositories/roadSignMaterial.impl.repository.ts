import { Injectable, NotFoundException } from "@nestjs/common";
import { RoadSignMaterialRepository } from "../../domain/repositories/roadSignMaterial.repository";
import { RoadSignMaterialModel } from "../../domain/models/RoadSignMaterialModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RoadSignMaterialMapper } from "../mapper/roadSignMaterial.mapper";
import { Prisma, RoadSignMaterial } from "@prisma/client";

@Injectable()
export class RoadSignMaterialImplRepository implements RoadSignMaterialRepository{

  constructor(private prisma: PrismaService) {}

  async  create(RoadSignMaterial: RoadSignMaterialModel): Promise<RoadSignMaterial> {
    return await this.prisma.roadSignMaterial.create({
      data:RoadSignMaterialMapper.toPersistence(RoadSignMaterial)
    });
  }

  async delete(id: number): Promise<RoadSignMaterial> {
    try {
      return await this.prisma.roadSignMaterial.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadSignMaterial Not Found")
    }
  }

  async findAll(): Promise<RoadSignMaterial[]> {
    return await this.prisma.roadSignMaterial.findMany();
  }

  async findById(id: number): Promise<RoadSignMaterial> {
    try {
      return await this.prisma.roadSignMaterial.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadSignMaterial Not Found")
    }
  }

  async update(RoadSignMaterial: RoadSignMaterialModel): Promise<RoadSignMaterial> {
    try {
      return await this.prisma.roadSignMaterial.update({
        where:{
          id:RoadSignMaterial.id
        },
        data:RoadSignMaterialMapper.toPersistence(RoadSignMaterial)
      })
    }
    catch (e) {
      throw new NotFoundException("RoadSignMaterial Not Found")
    }

  }





}