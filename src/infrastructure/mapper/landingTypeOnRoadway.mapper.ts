import { LandingTypeOnRoadwayModel } from "../../domain/models/LandingTypeOnRoadwayModel";
import { LandingTypeOnRoadwayCreateDto, LandingTypeOnRoadwayUpdateDto } from "../dto/landingTypeOnRoadway.dto";
import { Prisma } from "@prisma/client";

export class LandingTypeOnRoadwayMapper {
  static toPersistence(landingTypeOnRoadway: LandingTypeOnRoadwayModel): Prisma.LandingTypeOnRoadwayUncheckedCreateInput {
    return {
      id: landingTypeOnRoadway.id,
      order: landingTypeOnRoadway.order,
      start_m: landingTypeOnRoadway.start_m,
      end_m: landingTypeOnRoadway.end_m,
      width_start_m: landingTypeOnRoadway.width_start_m,
      width_end_m: landingTypeOnRoadway.width_end_m,
      square_m: landingTypeOnRoadway.square_m,
      street_id: landingTypeOnRoadway.street_id,
      side_id: landingTypeOnRoadway.side_id,
      landing_type_id: landingTypeOnRoadway.landing_type_id,
      created_at: landingTypeOnRoadway.created_at,
      updated_at: landingTypeOnRoadway.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: LandingTypeOnRoadwayCreateDto): LandingTypeOnRoadwayModel {
    return{
      id: null,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      width_start_m: dto.width_start_m,
      width_end_m: dto.width_end_m,
      square_m: dto.square_m,
      street_id: dto.street_id,
      side_id: dto.side_id,
      landing_type_id: dto.landing_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: LandingTypeOnRoadwayUpdateDto): LandingTypeOnRoadwayModel {
    return {
      id: dto.id,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      width_start_m: dto.width_start_m,
      width_end_m: dto.width_end_m,
      square_m: dto.square_m,
      street_id: dto.street_id,
      side_id: dto.side_id,
      landing_type_id: dto.landing_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}