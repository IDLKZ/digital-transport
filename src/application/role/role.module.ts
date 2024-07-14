import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RepositoryModule } from "../../infrastructure/repositories/repository.module";
import { PrismaModule } from "../../core/services/prisma/prisma.module";

@Module({
  imports:[RepositoryModule],
  providers: [RoleService],
  controllers: [RoleController]
})
export class RoleModule {}
