import { Prisma, Roadway as RoadwayModel } from "@prisma/client";
import { RoadwayCreateDto, RoadwayUpdateDto } from "../dto/roadway.dto";

export class RoadwayMapper {
  static toPersistence(model: RoadwayModel): Prisma.RoadwayUncheckedCreateInput {
    return {
      id: model.id,
      order: model.order,
      start_m: model.start_m,
      end_m: model.end_m,
      square_m: model.square_m,
      street_id: model.street_id,
      side_id: model.side_id,
      coverage_type_id: model.coverage_type_id,
      category_of_highway_id: model.category_of_highway_id,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: RoadwayCreateDto): RoadwayModel {
    return{
      id: null,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      square_m: dto.square_m,
      street_id: dto.street_id,
      side_id: dto.side_id,
      coverage_type_id: dto.coverage_type_id,
      category_of_highway_id: dto.category_of_highway_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: RoadwayUpdateDto): RoadwayModel {
    return{
      id: dto.id,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      square_m: dto.square_m,
      street_id: dto.street_id,
      side_id: dto.side_id,
      coverage_type_id: dto.coverage_type_id,
      category_of_highway_id: dto.category_of_highway_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}
