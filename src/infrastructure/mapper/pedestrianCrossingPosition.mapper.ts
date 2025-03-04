import { PedestrianCrossingPositionModel } from "../../domain/models/PedestrianCrossingPositionModel";
import { Prisma,PedestrianCrossingPosition } from "@prisma/client";
import { PedestrianCrossingPositionCreateDto, PedestrianCrossingPositionUpdateDto } from "../dto/pedestrianCrossingPosition.dto";

export class PedestrianCrossingPositionMapper {
  static fromCreateDtoToModel(dto: PedestrianCrossingPositionCreateDto): PedestrianCrossingPositionModel {
    return {
      id: 0, // ID will be auto-generated by the database
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: PedestrianCrossingPositionUpdateDto): PedestrianCrossingPositionModel {
    return {
      id: dto.id,
      title_ru: dto.title_ru,
      title_kk: dto.title_kk,
      title_en: dto.title_en,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }


  static toPersistence(model: PedestrianCrossingPositionModel): Prisma.PedestrianCrossingPositionCreateInput {
    return {
      title_ru: model.title_ru,
      title_kk: model.title_kk,
      title_en: model.title_en,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }
}