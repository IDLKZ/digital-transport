import { Injectable } from '@nestjs/common';
import { RoleRepository } from "../../domain/repositories/role.repository";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { RoleImplRepository } from "../../infrastructure/repositories/role.impl.repository";
import { RoleCreateDto, RoleUpdateDto } from "../../infrastructure/dto/role.dto";
import { RoleModel } from "../../domain/models/RoleModel";
import { RoleMapper } from "../../infrastructure/mapper/role.mapper";
import { Role } from "@prisma/client";

@Injectable()
export class RoleService {
  constructor(private readonly repository:RoleImplRepository) {}

  async findAll():Promise<Role[]>{
    return await this.repository.findAll();
  }

  async create(role:RoleCreateDto):Promise<Role>{
    const roleModel:RoleModel = RoleMapper.fromCreateDtoToModel(role);
    return await this.repository.create(roleModel);
  }

  async update(role:RoleUpdateDto):Promise<Role>{
    const roleModel:RoleModel = RoleMapper.fromUpdateDtoToModel(role);
    return await this.repository.update(roleModel);
  }

  async findById(id:number):Promise<Role>{
    return await this.repository.findById(id);
  }

  async delete(id:number):Promise<Role>{
    return await this.repository.delete(id);
  }

}
