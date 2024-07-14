import { SpillwayInfrastructureModel } from "./SpillwayInfrastructureModel";

export type WellsTypeModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  spillwayInfrastructures?: SpillwayInfrastructureModel[] | null;
  created_at: Date;
  updated_at: Date;
};