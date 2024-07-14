import { Injectable, NotFoundException } from "@nestjs/common";
import { PermissionRepository } from "../../domain/repositories/Permission.repository";
import { PermissionModel } from "../../domain/models/PermissionModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { PermissionMapper } from "../mapper/Permission.mapper";
import { Prisma, Permission } from "@prisma/client";

@Injectable()
export class PermissionImplRepository implements PermissionRepository{

  constructor(private prisma: PrismaService) {}

  async  create(Permission: PermissionModel): Promise<Permission> {
    return await this.prisma.permission.create({
      data:PermissionMapper.toPersistence(Permission)
    });
  }

  async delete(id: number): Promise<Permission> {
    try {
      return await this.prisma.permission.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Permission Not Found")
    }
  }

  async findAll(): Promise<Permission[]> {
    return await this.prisma.permission.findMany();
  }

  async findById(id: number): Promise<Permission> {
    try {
      return await this.prisma.permission.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Permission Not Found")
    }
  }

  async update(Permission: PermissionModel): Promise<Permission> {
    try {
      return await this.prisma.permission.update({
        where:{
          id:Permission.id
        },
        data:PermissionMapper.toPersistence(Permission)
      })
    }
    catch (e) {
      throw new NotFoundException("Permission Not Found")
    }

  }





}