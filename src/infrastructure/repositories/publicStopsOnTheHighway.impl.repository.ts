import { Injectable, NotFoundException } from "@nestjs/common";
import { PublicStopsOnTheHighwayRepository } from "../../domain/repositories/publicStopsOnTheHighway.repository";
import { PublicStopsOnTheHighwayModel } from "../../domain/models/PublicStopsOnTheHighwayModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { PublicStopsOnTheHighwayMapper } from "../mapper/publicStopsOnTheHighway.mapper";
import { Prisma, PublicStopsOnTheHighway } from "@prisma/client";

@Injectable()
export class PublicStopsOnTheHighwayImplRepository implements PublicStopsOnTheHighwayRepository{

  constructor(private prisma: PrismaService) {}

  async  create(PublicStopsOnTheHighway: PublicStopsOnTheHighwayModel): Promise<PublicStopsOnTheHighway> {
    return await this.prisma.publicStopsOnTheHighway.create({
      data:PublicStopsOnTheHighwayMapper.toPersistence(PublicStopsOnTheHighway)
    });
  }

  async delete(id: number): Promise<PublicStopsOnTheHighway> {
    try {
      return await this.prisma.publicStopsOnTheHighway.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("PublicStopsOnTheHighway Not Found")
    }
  }

  async findAll(): Promise<PublicStopsOnTheHighway[]> {
    return await this.prisma.publicStopsOnTheHighway.findMany();
  }

  async findById(id: number): Promise<PublicStopsOnTheHighway> {
    try {
      return await this.prisma.publicStopsOnTheHighway.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("PublicStopsOnTheHighway Not Found")
    }
  }

  async update(PublicStopsOnTheHighway: PublicStopsOnTheHighwayModel): Promise<PublicStopsOnTheHighway> {
    try {
      return await this.prisma.publicStopsOnTheHighway.update({
        where:{
          id:PublicStopsOnTheHighway.id
        },
        data:PublicStopsOnTheHighwayMapper.toPersistence(PublicStopsOnTheHighway)
      })
    }
    catch (e) {
      throw new NotFoundException("PublicStopsOnTheHighway Not Found")
    }

  }





}