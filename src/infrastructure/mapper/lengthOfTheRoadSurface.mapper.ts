import { LengthOfTheRoadSurfaceModel } from "../../domain/models/LengthOfTheRoadSurfaceModel";
import { LengthOfTheRoadSurfaceCreateDto, LengthOfTheRoadSurfaceUpdateDto } from "../dto/lengthOfTheRoadSurface.dto";
import { Prisma } from "@prisma/client";

export class LengthOfTheRoadSurfaceMapper {
  static toPersistence(model: LengthOfTheRoadSurfaceModel): Prisma.LengthOfTheRoadSurfaceUncheckedCreateInput {
    return {
      id: model.id,
      order: model.order,
      start: model.start,
      end: model.end,
      total_length: model.total_length,
      street_id: model.street_id,
      coverage_type_id: model.coverage_type_id,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: LengthOfTheRoadSurfaceCreateDto): LengthOfTheRoadSurfaceModel {
    return {
      id: null,
      order: dto.order,
      start: dto.start,
      end: dto.end,
      total_length: dto.total_length,
      street_id: dto.street_id,
      coverage_type_id: dto.coverage_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: LengthOfTheRoadSurfaceUpdateDto): LengthOfTheRoadSurfaceModel {
    return {
      id: dto.id,
      order: dto.order,
      start: dto.start,
      end: dto.end,
      total_length: dto.total_length,
      street_id: dto.street_id,
      coverage_type_id: dto.coverage_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}