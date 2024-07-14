import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "../../domain/repositories/user.repository";
import { UserModel } from "../../domain/models/UserModel";
import { PrismaService } from "../../core/services/prisma/prisma.service";
import { UserMapper } from "../mapper/user.mapper";
import { Prisma, User } from "@prisma/client";

@Injectable()
export class UserImplRepository implements UserRepository{

  constructor(private prisma: PrismaService) {}

  async  create(User: UserModel): Promise<User> {
    return await this.prisma.user.create({
      data:UserMapper.toPersistence(User)
    });
  }

  async delete(id: number): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("User Not Found")
    }
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User> {
    try {
      return await this.prisma.user.findFirstOrThrow({
        where:{
          id:id
        }
      });
    }
    catch (e) {
      throw new NotFoundException("User Not Found")
    }
  }

  async update(User: UserModel): Promise<User> {
    try {
      return await this.prisma.user.update({
        where:{
          id:User.id
        },
        data:UserMapper.toPersistence(User)
      })
    }
    catch (e) {
      throw new NotFoundException("User Not Found")
    }

  }





}