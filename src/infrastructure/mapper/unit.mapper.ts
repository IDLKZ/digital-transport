import { UnitModel } from "../../domain/models/UnitModel";
import { UnitCreateDto, UnitUpdateDto } from "../dto/unit.dto";
import { Prisma } from "@prisma/client";

export class UnitMapper {
  static toPersistence(unit: UnitModel): Prisma.UnitUncheckedCreateInput {
    return {
      id: unit.id,
      name: unit.name,
      symbol: unit.symbol,
      created_at: unit.created_at,
      updated_at: unit.updated_at,
    };
  }

  static fromCreateDtoToModel(dto: UnitCreateDto): UnitModel {
    return {
      id: null,
      name: dto.name,
      symbol: dto.symbol,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static fromUpdateDtoToModel(dto: UnitUpdateDto): UnitModel {
    return {
      id: dto.id,
      name: dto.name,
      symbol: dto.symbol,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}