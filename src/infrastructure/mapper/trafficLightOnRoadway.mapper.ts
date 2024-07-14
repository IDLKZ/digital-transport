import { TrafficLightOnRoadwayModel } from "../../domain/models/TrafficLightOnRoadwayModel";
import { TrafficLightOnRoadwayCreateDto, TrafficLightOnRoadwayUpdateDto } from "../dto/trafficLightOnRoadway.dto";
import { Prisma } from "@prisma/client";

export class TrafficLightOnRoadwayMapper {
  static toPersistence(trafficLightOnRoadway: TrafficLightOnRoadwayModel): Prisma.TrafficLightOnRoadwayUncheckedCreateInput {
    return {
      id: trafficLightOnRoadway.id,
      order: trafficLightOnRoadway.order,
      on_axis: trafficLightOnRoadway.on_axis,
      have_controller: trafficLightOnRoadway.have_controller,
      traffic_light_qty: trafficLightOnRoadway.traffic_light_qty,
      pedestrian_traffic_light_qty: trafficLightOnRoadway.pedestrian_traffic_light_qty,
      rotary_section_qty: trafficLightOnRoadway.rotary_section_qty,
      have_column: trafficLightOnRoadway.have_column,
      street_id: trafficLightOnRoadway.street_id,
      side_id: trafficLightOnRoadway.side_id,
      traffic_light_type_id: trafficLightOnRoadway.traffic_light_type_id,
      created_at: trafficLightOnRoadway.created_at,
      updated_at: trafficLightOnRoadway.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: TrafficLightOnRoadwayCreateDto): TrafficLightOnRoadwayModel {
    return {
      id: null,
      order: dto.order,
      on_axis: dto.on_axis,
      have_controller: dto.have_controller,
      traffic_light_qty: dto.traffic_light_qty,
      pedestrian_traffic_light_qty: dto.pedestrian_traffic_light_qty,
      rotary_section_qty: dto.rotary_section_qty,
      have_column: dto.have_column,
      street_id: dto.street_id,
      side_id: dto.side_id,
      traffic_light_type_id: dto.traffic_light_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: TrafficLightOnRoadwayUpdateDto): TrafficLightOnRoadwayModel {
    return {
      id: dto.id,
      order: dto.order,
      on_axis: dto.on_axis,
      have_controller: dto.have_controller,
      traffic_light_qty: dto.traffic_light_qty,
      pedestrian_traffic_light_qty: dto.pedestrian_traffic_light_qty,
      rotary_section_qty: dto.rotary_section_qty,
      have_column: dto.have_column,
      street_id: dto.street_id,
      side_id: dto.side_id,
      traffic_light_type_id: dto.traffic_light_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}