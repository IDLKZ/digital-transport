import { Injectable, NotFoundException } from "@nestjs/common";
import { InformationOfRoadMarkingRepository } from "../../domain/repositories/informationOfRoadMarking.repository";
import { InformationOfRoadMarkingModel } from "../../domain/models/InformationOfRoadMarkingModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { InformationOfRoadMarkingMapper } from "../mapper/informationOfRoadMarking.mapper";
import { Prisma, InformationOfRoadMarking } from "@prisma/client";

@Injectable()
export class InformationOfRoadMarkingImplRepository implements InformationOfRoadMarkingRepository{

  constructor(private prisma: PrismaService) {}

  async  create(InformationOfRoadMarking: InformationOfRoadMarkingModel): Promise<InformationOfRoadMarking> {
    return await this.prisma.informationOfRoadMarking.create({
      data:InformationOfRoadMarkingMapper.toPersistence(InformationOfRoadMarking)
    });
  }

  async delete(id: number): Promise<InformationOfRoadMarking> {
    try {
      return await this.prisma.informationOfRoadMarking.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("InformationOfRoadMarking Not Found")
    }
  }

  async findAll(): Promise<InformationOfRoadMarking[]> {
    return await this.prisma.informationOfRoadMarking.findMany();
  }

  async findById(id: number): Promise<InformationOfRoadMarking> {
    try {
      return await this.prisma.informationOfRoadMarking.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("InformationOfRoadMarking Not Found")
    }
  }

  async update(InformationOfRoadMarking: InformationOfRoadMarkingModel): Promise<InformationOfRoadMarking> {
    try {
      return await this.prisma.informationOfRoadMarking.update({
        where:{
          id:InformationOfRoadMarking.id
        },
        data:InformationOfRoadMarkingMapper.toPersistence(InformationOfRoadMarking)
      })
    }
    catch (e) {
      throw new NotFoundException("InformationOfRoadMarking Not Found")
    }

  }





}