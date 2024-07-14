import { Injectable } from '@nestjs/common';
import { PermissionImplRepository } from "../../infrastructure/repositories/permission.impl.repository";
import { Permission } from "@prisma/client";
import { PermissionCreateDto, PermissionUpdateDto } from "../../infrastructure/dto/Permission.dto";
import { PermissionModel } from "../../domain/models/PermissionModel";
import { PermissionMapper } from "../../infrastructure/mapper/Permission.mapper";

@Injectable()
export class PermissionService {
  constructor(private readonly repository:PermissionImplRepository) {}

  async findAll():Promise<Permission[]>{
    return await this.repository.findAll();
  }

  async create(Permission:PermissionCreateDto):Promise<Permission>{
    const PermissionModel:PermissionModel = PermissionMapper.fromCreateDtoToModel(Permission);
    return await this.repository.create(PermissionModel);
  }

  async update(Permission:PermissionUpdateDto):Promise<Permission>{
    const PermissionModel:PermissionModel = PermissionMapper.fromUpdateDtoToModel(Permission);
    return await this.repository.update(PermissionModel);
  }

  async findById(id:number):Promise<Permission>{
    return await this.repository.findById(id);
  }

  async delete(id:number):Promise<Permission>{
    return await this.repository.delete(id);
  }


}
