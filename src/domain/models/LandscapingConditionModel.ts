import { LandscapingOnRoadwayModel } from "./LandscapingOnRoadwayModel";

export type LandscapingConditionModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  landscapingOnRoadways?: LandscapingOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};