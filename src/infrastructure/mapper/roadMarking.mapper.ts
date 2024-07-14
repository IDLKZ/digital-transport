import { RoadMarkingCreateDto, RoadMarkingUpdateDto } from "../dto/roadMarking.dto";
import { RoadMarkingModel } from "../../domain/models/RoadMarkingModel";
import { Prisma } from "@prisma/client";

export class RoadMarkingMapper {
  static toPersistence(model: RoadMarkingModel): Prisma.RoadMarkingUncheckedCreateInput {
    return {
      id: model.id,
      title_ru: model.title_ru,
      title_kk: model.title_kk,
      title_en: model.title_en,
      line_of_number: model.line_of_number,
      normative_document: model.normative_document,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: RoadMarkingCreateDto): RoadMarkingModel {
    return{
      id: null,
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      line_of_number: dto.line_of_number,
      normative_document: dto.normative_document,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: RoadMarkingUpdateDto): RoadMarkingModel {
    return {
      id: dto.id,
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      line_of_number: dto.line_of_number,
      normative_document: dto.normative_document,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}