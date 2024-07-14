import { PublicStopsOnTheHighwayCreateDto, PublicStopsOnTheHighwayUpdateDto } from "../dto/publicStopsOnTheHighway.dto";
import { PublicStopsOnTheHighwayModel } from "../../domain/models/PublicStopsOnTheHighwayModel";
import { Prisma } from "@prisma/client";

export class PublicStopsOnTheHighwayMapper {
  static toPersistence(publicStopsOnTheHighway: PublicStopsOnTheHighwayModel): Prisma.PublicStopsOnTheHighwayUncheckedCreateInput {
    return {
      id: publicStopsOnTheHighway.id,
      order: publicStopsOnTheHighway.order,
      start_m: publicStopsOnTheHighway.start_m,
      end_m: publicStopsOnTheHighway.end_m,
      bus_stop: publicStopsOnTheHighway.bus_stop,
      pavilion_qty: publicStopsOnTheHighway.pavilion_qty,
      distance_to_the_roadway_m: publicStopsOnTheHighway.distance_to_the_roadway_m,
      have_route: publicStopsOnTheHighway.have_route,
      boarding_square_m: publicStopsOnTheHighway.boarding_square_m,
      extension_square_m: publicStopsOnTheHighway.extension_square_m,
      street_id: publicStopsOnTheHighway.street_id,
      side_id: publicStopsOnTheHighway.side_id,
      created_at: publicStopsOnTheHighway.created_at,
      updated_at: publicStopsOnTheHighway.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: PublicStopsOnTheHighwayCreateDto): PublicStopsOnTheHighwayModel {
    return {
      id: null,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      bus_stop: dto.bus_stop,
      pavilion_qty: dto.pavilion_qty,
      distance_to_the_roadway_m: dto.distance_to_the_roadway_m,
      have_route: dto.have_route,
      boarding_square_m: dto.boarding_square_m,
      extension_square_m: dto.extension_square_m,
      street_id: dto.street_id,
      side_id: dto.side_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: PublicStopsOnTheHighwayUpdateDto): PublicStopsOnTheHighwayModel {
    return {
      id: dto.id,
      order: dto.order,
      start_m: dto.start_m,
      end_m: dto.end_m,
      bus_stop: dto.bus_stop,
      pavilion_qty: dto.pavilion_qty,
      distance_to_the_roadway_m: dto.distance_to_the_roadway_m,
      have_route: dto.have_route,
      boarding_square_m: dto.boarding_square_m,
      extension_square_m: dto.extension_square_m,
      street_id: dto.street_id,
      side_id: dto.side_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}