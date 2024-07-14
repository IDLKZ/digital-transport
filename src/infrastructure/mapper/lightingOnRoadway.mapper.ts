import { LightingOnRoadwayCreateDto, LightingOnRoadwayUpdateDto } from "../dto/lightingOnRoadway.dto";
import { LightingOnRoadwayModel } from "../../domain/models/LightingOnRoadwayModel";
import { Prisma } from "@prisma/client";

export class LightingOnRoadwayMapper {
  static toPersistence(lightingOnRoadway: LightingOnRoadwayModel): Prisma.LightingOnRoadwayUncheckedCreateInput {
    return {
      id: lightingOnRoadway.id,
      order: lightingOnRoadway.order,
      on_axis_m: lightingOnRoadway.on_axis_m,
      lighting_target: lightingOnRoadway.lighting_target,
      street_id: lightingOnRoadway.street_id,
      side_id: lightingOnRoadway.side_id,
      created_at: lightingOnRoadway.created_at,
      updated_at: lightingOnRoadway.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: LightingOnRoadwayCreateDto): LightingOnRoadwayModel {
    return {
      id: null,
      order: dto.order,
      on_axis_m: dto.on_axis_m,
      lighting_target: dto.lighting_target,
      street_id: dto.street_id,
      side_id: dto.side_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: LightingOnRoadwayUpdateDto): LightingOnRoadwayModel {
    return {
      id: dto.id,
      order: dto.order,
      on_axis_m: dto.on_axis_m,
      lighting_target: dto.lighting_target,
      street_id: dto.street_id,
      side_id: dto.side_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}