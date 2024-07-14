import { Prisma } from "@prisma/client";
import { SpillwayInfrastructureCreateDto, SpillwayInfrastructureUpdateDto } from "../dto/spillwayInfrastructure.dto";
import { SpillwayInfrastructureModel } from "../../domain/models/SpillwayInfrastructureModel";

export class SpillwayInfrastructureMapper {
  static toPersistence(model: SpillwayInfrastructureModel): Prisma.SpillwayInfrastructureUncheckedCreateInput {
    return {
      id: model.id,
      order: model.order,
      on_axis_m: model.on_axis_m,
      from_axis_m: model.from_axis_m,
      is_on_the_roadway: model.is_on_the_roadway,
      is_on_the_sidewalk: model.is_on_the_sidewalk,
      is_on_the_lawn: model.is_on_the_lawn,
      note: model.note,
      street_id: model.street_id,
      side_id: model.side_id,
      well_type_id: model.well_type_id,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: SpillwayInfrastructureCreateDto): SpillwayInfrastructureModel {
    return {
      id: null,
      order: dto.order,
      on_axis_m: dto.on_axis_m,
      from_axis_m: dto.from_axis_m,
      is_on_the_roadway: dto.is_on_the_roadway,
      is_on_the_sidewalk: dto.is_on_the_sidewalk,
      is_on_the_lawn: dto.is_on_the_lawn,
      note: dto.note,
      street_id: dto.street_id,
      side_id: dto.side_id,
      well_type_id: dto.well_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: SpillwayInfrastructureUpdateDto): SpillwayInfrastructureModel {
    return {
      id: dto.id,
      order: dto.order,
      on_axis_m: dto.on_axis_m,
      from_axis_m: dto.from_axis_m,
      is_on_the_roadway: dto.is_on_the_roadway,
      is_on_the_sidewalk: dto.is_on_the_sidewalk,
      is_on_the_lawn: dto.is_on_the_lawn,
      note: dto.note,
      street_id: dto.street_id,
      side_id: dto.side_id,
      well_type_id: dto.well_type_id,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}
