import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UseFilters } from "@nestjs/common";
import { Role } from "@prisma/client";
import { RoleService } from "./role.service";
import { RoleCreateDto, RoleUpdateDto } from "../../infrastructure/dto/role.dto";
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { I18n, I18nContext, I18nValidationExceptionFilter } from "nestjs-i18n";

@ApiTags('roles')
@Controller('role')
export class RoleController {
  constructor(private  readonly  service:RoleService) {}


  @Get("test")
  async test(@I18n() i18n: I18nContext):Promise<string>{
    return i18n.t("message.title");
  }
  @Get("all")
  async findAll():Promise<Role[]>{
    return await this.service.findAll();
  }

  @Post("create")
  @ApiOperation({ summary: 'Создать новую роль' })
  @ApiResponse({ status: 201, description: 'Роль успешно создана.' })
  @ApiResponse({ status: 400, description: 'Неверные данные.' })
  async create(@Body() role:RoleCreateDto):Promise<Role>{
    return await this.service.create(role);
  }

  @Put("update")
  @ApiOperation({ summary: 'Обновить роль' })
  @ApiResponse({ status: 200, description: 'Обновлена роль.' })
  @ApiResponse({ status: 400, description: 'Неверные данные.' })
  @UseFilters(new I18nValidationExceptionFilter())
  async update(@Body() role:RoleUpdateDto):Promise<Role>{
    return await this.service.update(role);
  }

  @Get(":id")
  @ApiOperation({ summary: 'Получить роль по идентификатору' })
  @ApiResponse({ status: 200, description: 'Получение роли по идентификатору.' })
  @ApiResponse({ status: 404, description: 'Роль не найдена.' })
  @HttpCode(200)
  async findById(@Param('id',ParseIntPipe) id: number):Promise<Role>{
    return await this.service.findById(id);
  }
  @Delete(":id")
  @ApiOperation({ summary: 'Удалить роль по идентификатору' })
  @ApiResponse({ status: 200, description: 'Удаление роли по идентификатору.' })
  @ApiResponse({ status: 404, description: 'Роль не найдена.' })
  @HttpCode(200)
  async delete(@Param('id',ParseIntPipe) id: number):Promise<Role>{
    return await this.service.delete(id);
  }


}
