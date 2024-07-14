import { StreetCreateDto, StreetUpdateDto } from "../dto/street.dto";
import { StreetModel } from "../../domain/models/StreetModel";
import { Prisma } from "@prisma/client";

export class StreetMapper {
  static toPersistence(model: StreetModel): Prisma.StreetUncheckedCreateInput {
    return {
      id: model.id,
      title_ru: model.title_ru,
      title_kk: model.title_kk,
      title_en: model.title_en,
      geo_position: model.geo_position,
      geo_color: model.geo_color,
      is_active: model.is_active,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: StreetCreateDto): StreetModel {
    return{
      id: null,
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      geo_position: JSON.parse(dto.geo_position),
      geo_color: dto.geo_color,
      is_active: dto.is_active ?? true,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: StreetUpdateDto): StreetModel {
    return {
      id: dto.id,
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      geo_position: JSON.parse(dto.geo_position),
      geo_color: dto.geo_color,
      is_active: dto.is_active,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}