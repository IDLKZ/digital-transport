import { Injectable, NotFoundException } from "@nestjs/common";
import { CategoryOfHighwaysRepository } from "../../domain/repositories/categoryOfHighways.repository";
import { CategoryOfHighwaysModel } from "../../domain/models/CategoryOfHighwaysModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { CategoryOfHighwaysMapper } from "../mapper/categoryOfHighways.mapper";
import { Prisma, CategoryOfHighways } from "@prisma/client";

@Injectable()
export class CategoryOfHighwaysImplRepository implements CategoryOfHighwaysRepository{

  constructor(private prisma: PrismaService) {}

  async  create(CategoryOfHighways: CategoryOfHighwaysModel): Promise<CategoryOfHighways> {
    return await this.prisma.categoryOfHighways.create({
      data:CategoryOfHighwaysMapper.toPersistence(CategoryOfHighways)
    });
  }

  async delete(id: number): Promise<CategoryOfHighways> {
    try {
      return await this.prisma.categoryOfHighways.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("CategoryOfHighways Not Found")
    }
  }

  async findAll(): Promise<CategoryOfHighways[]> {
    return await this.prisma.categoryOfHighways.findMany();
  }

  async findById(id: number): Promise<CategoryOfHighways> {
    try {
      return await this.prisma.categoryOfHighways.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("CategoryOfHighways Not Found")
    }
  }

  async update(CategoryOfHighways: CategoryOfHighwaysModel): Promise<CategoryOfHighways> {
    try {
      return await this.prisma.categoryOfHighways.update({
        where:{
          id:CategoryOfHighways.id
        },
        data:CategoryOfHighwaysMapper.toPersistence(CategoryOfHighways)
      })
    }
    catch (e) {
      throw new NotFoundException("CategoryOfHighways Not Found")
    }

  }





}