import { SidewalkOnRoadwayModel } from "./SidewalkOnRoadwayModel";

export type PositionModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  sidewalkOnRoadways?: SidewalkOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};
