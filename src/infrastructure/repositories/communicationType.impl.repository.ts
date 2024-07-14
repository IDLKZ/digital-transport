import { Injectable, NotFoundException } from "@nestjs/common";
import { CommunicationTypeRepository } from "../../domain/repositories/communicationType.repository";
import { CommunicationTypeModel } from "../../domain/models/CommunicationTypeModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { CommunicationTypeMapper } from "../mapper/communicationType.mapper";
import { Prisma, CommunicationType } from "@prisma/client";

@Injectable()
export class CommunicationTypeImplRepository implements CommunicationTypeRepository{

  constructor(private prisma: PrismaService) {}

  async  create(CommunicationType: CommunicationTypeModel): Promise<CommunicationType> {
    return await this.prisma.communicationType.create({
      data:CommunicationTypeMapper.toPersistence(CommunicationType)
    });
  }

  async delete(id: number): Promise<CommunicationType> {
    try {
      return await this.prisma.communicationType.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("CommunicationType Not Found")
    }
  }

  async findAll(): Promise<CommunicationType[]> {
    return await this.prisma.communicationType.findMany();
  }

  async findById(id: number): Promise<CommunicationType> {
    try {
      return await this.prisma.communicationType.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("CommunicationType Not Found")
    }
  }

  async update(CommunicationType: CommunicationTypeModel): Promise<CommunicationType> {
    try {
      return await this.prisma.communicationType.update({
        where:{
          id:CommunicationType.id
        },
        data:CommunicationTypeMapper.toPersistence(CommunicationType)
      })
    }
    catch (e) {
      throw new NotFoundException("CommunicationType Not Found")
    }

  }





}