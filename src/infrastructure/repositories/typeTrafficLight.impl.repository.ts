import { Injectable, NotFoundException } from "@nestjs/common";
import { TypeTrafficLightRepository } from "../../domain/repositories/typeTrafficLight.repository";
import { TypeTrafficLightModel } from "../../domain/models/TypeTrafficLightModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { TypeTrafficLightMapper } from "../mapper/typeTrafficLight.mapper";
import { Prisma, TypeTrafficLight } from "@prisma/client";

@Injectable()
export class TypeTrafficLightImplRepository implements TypeTrafficLightRepository{

  constructor(private prisma: PrismaService) {}

  async  create(TypeTrafficLight: TypeTrafficLightModel): Promise<TypeTrafficLight> {
    return await this.prisma.typeTrafficLight.create({
      data:TypeTrafficLightMapper.toPersistence(TypeTrafficLight)
    });
  }

  async delete(id: number): Promise<TypeTrafficLight> {
    try {
      return await this.prisma.typeTrafficLight.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("TypeTrafficLight Not Found")
    }
  }

  async findAll(): Promise<TypeTrafficLight[]> {
    return await this.prisma.typeTrafficLight.findMany();
  }

  async findById(id: number): Promise<TypeTrafficLight> {
    try {
      return await this.prisma.typeTrafficLight.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("TypeTrafficLight Not Found")
    }
  }

  async update(TypeTrafficLight: TypeTrafficLightModel): Promise<TypeTrafficLight> {
    try {
      return await this.prisma.typeTrafficLight.update({
        where:{
          id:TypeTrafficLight.id
        },
        data:TypeTrafficLightMapper.toPersistence(TypeTrafficLight)
      })
    }
    catch (e) {
      throw new NotFoundException("TypeTrafficLight Not Found")
    }

  }





}