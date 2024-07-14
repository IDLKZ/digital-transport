import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UseFilters } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PermissionService } from "./permission.service";
import { I18n, I18nContext, I18nValidationExceptionFilter } from "nestjs-i18n";
import { Permission } from "@prisma/client";
import { PermissionCreateDto, PermissionUpdateDto } from "../../infrastructure/dto/Permission.dto";
@ApiTags('permissions')
@Controller('permission')
export class PermissionController {
  constructor(private  readonly  service:PermissionService) {}

  @Get("all")
  async findAll():Promise<Permission[]>{
    return await this.service.findAll();
  }

  @Post("create")
  @ApiOperation({ summary: 'Создать новое разрешение' })
  @ApiResponse({ status: 201, description: 'Разрешение успешно создано.' })
  @ApiResponse({ status: 400, description: 'Неверные данные.' })
  async create(@Body() Permission:PermissionCreateDto):Promise<Permission>{
    return await this.service.create(Permission);
  }

  @Put("update")
  @ApiOperation({ summary: 'Обновить разрешение' })
  @ApiResponse({ status: 200, description: 'Обновлено разрешение.' })
  @ApiResponse({ status: 400, description: 'Неверные данные.' })
  @UseFilters(new I18nValidationExceptionFilter())
  async update(@Body() Permission:PermissionUpdateDto):Promise<Permission>{
    return await this.service.update(Permission);
  }

  @Get(":id")
  @ApiOperation({ summary: 'Получить разрешение по идентификатору' })
  @ApiResponse({ status: 200, description: 'Получение разрешения по идентификатору.' })
  @ApiResponse({ status: 404, description: 'Разрешение не найдено.' })
  @HttpCode(200)
  async findById(@Param('id',ParseIntPipe) id: number):Promise<Permission>{
    return await this.service.findById(id);
  }
  @Delete(":id")
  @ApiOperation({ summary: 'Удалить разрешение по идентификатору' })
  @ApiResponse({ status: 200, description: 'Удаление разрешение по идентификатору.' })
  @ApiResponse({ status: 404, description: 'Разрешение не найдено.' })
  @HttpCode(200)
  async delete(@Param('id',ParseIntPipe) id: number):Promise<Permission>{
    return await this.service.delete(id);
  }
  
}
