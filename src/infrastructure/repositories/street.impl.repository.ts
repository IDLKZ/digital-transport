import { Injectable, NotFoundException } from "@nestjs/common";
import { StreetRepository } from "../../domain/repositories/street.repository";
import { StreetModel } from "../../domain/models/StreetModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { StreetMapper } from "../mapper/street.mapper";
import { Prisma, Street } from "@prisma/client";

@Injectable()
export class StreetImplRepository implements StreetRepository{

  constructor(private prisma: PrismaService) {}

  async  create(Street: StreetModel): Promise<Street> {
    return await this.prisma.street.create({
      data:StreetMapper.toPersistence(Street)
    });
  }

  async delete(id: number): Promise<Street> {
    try {
      return await this.prisma.street.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Street Not Found")
    }
  }

  async findAll(): Promise<Street[]> {
    return await this.prisma.street.findMany();
  }

  async findById(id: number): Promise<Street> {
    try {
      return await this.prisma.street.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Street Not Found")
    }
  }

  async update(Street: StreetModel): Promise<Street> {
    try {
      return await this.prisma.street.update({
        where:{
          id:Street.id
        },
        data:StreetMapper.toPersistence(Street)
      })
    }
    catch (e) {
      throw new NotFoundException("Street Not Found")
    }

  }





}