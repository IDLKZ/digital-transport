import { LandscapingConditionModel } from "../../domain/models/LandscapingConditionModel";
import { Prisma,LandscapingCondition } from "@prisma/client";
import { LandscapingConditionCreateDto, LandscapingConditionUpdateDto } from "../dto/landscapingCondition.dto";

export class LandscapingConditionMapper {
  static fromCreateDtoToModel(dto: LandscapingConditionCreateDto): LandscapingConditionModel {
    return {
      id: 0, // ID will be auto-generated by the database
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: LandscapingConditionUpdateDto): LandscapingConditionModel {
    return {
      id: dto.id,
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }


  static toPersistence(model: LandscapingConditionModel): Prisma.LandscapingConditionCreateInput {
    return {
      title_ru: model.title_ru,
      title_kk: model.title_kk,
      title_en: model.title_en,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }
}