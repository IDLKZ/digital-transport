import { ArchitecturalFormOnRoadwayModel } from "../../domain/models/ArchitecturalFormOnRoadwayModel";
import {
  ArchitecturalFormOnRoadwayCreateDto,
  ArchitecturalFormOnRoadwayUpdateDto
} from "../dto/architecturalFormOnRoadway.dto";
import { Prisma } from "@prisma/client";

export class ArchitecturalFormOnRoadwayMapper {
  static toPersistence(model: ArchitecturalFormOnRoadwayModel): Prisma.ArchitecturalFormOnRoadwayUncheckedCreateInput {
    return {
      id: model.id,
      order: model.order,
      start_m: model.start_m,
      end_m: model.end_m,
      square_m: model.square_m,
      perim_m: model.perim_m,
      feature: model.feature,
      street_id: model.street_id,
      side_id: model.side_id,
      architectural_form_id: model.architectural_form_id,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: ArchitecturalFormOnRoadwayCreateDto): ArchitecturalFormOnRoadwayModel {
    return {
      id: null,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      square_m: dto.square_m,
      perim_m: dto.perim_m,
      feature: dto.feature,
      street_id: dto.street_id,
      side_id: dto.side_id,
      architectural_form_id: dto.architectural_form_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: ArchitecturalFormOnRoadwayUpdateDto): ArchitecturalFormOnRoadwayModel {
    return {
      id: dto.id,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      square_m: dto.square_m,
      perim_m: dto.perim_m,
      feature: dto.feature,
      street_id: dto.street_id,
      side_id: dto.side_id,
      architectural_form_id: dto.architectural_form_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}