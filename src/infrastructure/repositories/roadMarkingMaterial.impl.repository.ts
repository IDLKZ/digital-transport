import { Injectable, NotFoundException } from "@nestjs/common";
import { RoadMarkingMaterialRepository } from "../../domain/repositories/roadMarkingMaterial.repository";
import { RoadMarkingMaterialModel } from "../../domain/models/RoadMarkingMaterialModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RoadMarkingMaterialMapper } from "../mapper/roadMarkingMaterial.mapper";
import { Prisma, RoadMarkingMaterial } from "@prisma/client";

@Injectable()
export class RoadMarkingMaterialImplRepository implements RoadMarkingMaterialRepository{

  constructor(private prisma: PrismaService) {}

  async  create(RoadMarkingMaterial: RoadMarkingMaterialModel): Promise<RoadMarkingMaterial> {
    return await this.prisma.roadMarkingMaterial.create({
      data:RoadMarkingMaterialMapper.toPersistence(RoadMarkingMaterial)
    });
  }

  async delete(id: number): Promise<RoadMarkingMaterial> {
    try {
      return await this.prisma.roadMarkingMaterial.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadMarkingMaterial Not Found")
    }
  }

  async findAll(): Promise<RoadMarkingMaterial[]> {
    return await this.prisma.roadMarkingMaterial.findMany();
  }

  async findById(id: number): Promise<RoadMarkingMaterial> {
    try {
      return await this.prisma.roadMarkingMaterial.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RoadMarkingMaterial Not Found")
    }
  }

  async update(RoadMarkingMaterial: RoadMarkingMaterialModel): Promise<RoadMarkingMaterial> {
    try {
      return await this.prisma.roadMarkingMaterial.update({
        where:{
          id:RoadMarkingMaterial.id
        },
        data:RoadMarkingMaterialMapper.toPersistence(RoadMarkingMaterial)
      })
    }
    catch (e) {
      throw new NotFoundException("RoadMarkingMaterial Not Found")
    }

  }





}