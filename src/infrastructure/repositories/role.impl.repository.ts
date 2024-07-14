import { Injectable, NotFoundException } from "@nestjs/common";
import { RoleRepository } from "../../domain/repositories/role.repository";
import { RoleModel } from "../../domain/models/RoleModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RoleMapper } from "../mapper/role.mapper";
import { Prisma, Role } from "@prisma/client";

@Injectable()
export class RoleImplRepository implements RoleRepository{

  constructor(private prisma: PrismaService) {}

  async  create(role: RoleModel): Promise<Role> {
    return await this.prisma.role.create({
      data:RoleMapper.toPersistence(role)
    });
  }

  async delete(id: number): Promise<Role> {
    try {
      return await this.prisma.role.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Role Not Found")
    }
  }

  async findAll(): Promise<Role[]> {
    return await this.prisma.role.findMany();
  }

  async findById(id: number): Promise<Role> {
    try {
      return await this.prisma.role.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("Role Not Found")
    }
  }

  async update(role: RoleModel): Promise<Role> {
    try {
      return await this.prisma.role.update({
        where:{
          id:role.id
        },
        data:RoleMapper.toPersistence(role)
      })
    }
    catch (e) {
      throw new NotFoundException("Role Not Found")
    }

  }

  



}