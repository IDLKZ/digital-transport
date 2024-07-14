import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './core/services/prisma/prisma.module';
import { RoleModule } from './application/role/role.module';
import { RepositoryModule } from './infrastructure/repositories/repository.module';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from "nestjs-i18n";
import { PermissionModule } from './application/permission/permission.module';
import * as path from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    RepositoryModule,
    PrismaModule,
    RoleModule,
    I18nModule.forRoot({
      fallbackLanguage: 'ru',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
