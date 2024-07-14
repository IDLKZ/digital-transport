import { Injectable, NotFoundException } from "@nestjs/common";
import { RolePermissionRepository } from "../../domain/repositories/rolePermission.repository";
import { RolePermissionModel } from "../../domain/models/RolePermissionModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RolePermissionMapper } from "../mapper/rolePermission.mapper";
import { Prisma, RolePermission } from "@prisma/client";

@Injectable()
export class RolePermissionImplRepository implements RolePermissionRepository{

  constructor(private prisma: PrismaService) {}

  async  create(RolePermission: RolePermissionModel): Promise<RolePermission> {
    return await this.prisma.rolePermission.create({
      data:RolePermissionMapper.toPersistence(RolePermission)
    });
  }

  async delete(id: number): Promise<RolePermission> {
    try {
      return await this.prisma.rolePermission.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RolePermission Not Found")
    }
  }

  async findAll(): Promise<RolePermission[]> {
    return await this.prisma.rolePermission.findMany();
  }

  async findById(id: number): Promise<RolePermission> {
    try {
      return await this.prisma.rolePermission.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("RolePermission Not Found")
    }
  }

  async update(RolePermission: RolePermissionModel): Promise<RolePermission> {
    try {
      return await this.prisma.rolePermission.update({
        where:{
          id:RolePermission.id
        },
        data:RolePermissionMapper.toPersistence(RolePermission)
      })
    }
    catch (e) {
      throw new NotFoundException("RolePermission Not Found")
    }

  }





}