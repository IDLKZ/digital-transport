import { InformationOfRoadMarking, Prisma } from "@prisma/client";
import {
  InformationOfRoadMarkingCreateDto,
  InformationOfRoadMarkingUpdateDto
} from "../dto/informationOfRoadMarking.dto";
import { InformationOfRoadMarkingModel } from "../../domain/models/InformationOfRoadMarkingModel";

export class InformationOfRoadMarkingMapper {
  static toPersistence(model: InformationOfRoadMarkingModel): Prisma.InformationOfRoadMarkingUncheckedCreateInput {
    return {
      id: model.id,
      road_width_sm: model.road_width_sm,
      road_length_m: model.road_length_m,
      road_square_m: model.road_square_m,
      street_id: model.street_id,
      road_marking_id: model.road_marking_id,
      road_marking_material_id: model.road_marking_material_id,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: InformationOfRoadMarkingCreateDto): InformationOfRoadMarkingModel {
    return{
      id: null,
      road_width_sm: dto.road_width_sm,
      road_length_m: dto.road_length_m,
      road_square_m: dto.road_square_m,
      street_id: dto.street_id,
      road_marking_id: dto.road_marking_id,
      road_marking_material_id: dto.road_marking_material_id ?? null,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: InformationOfRoadMarkingUpdateDto): InformationOfRoadMarkingModel {
    return{
      id: dto.id,
      road_width_sm: dto.road_width_sm,
      road_length_m: dto.road_length_m,
      road_square_m: dto.road_square_m,
      street_id: dto.street_id,
      road_marking_id: dto.road_marking_id,
      road_marking_material_id: dto.road_marking_material_id ?? null,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}
