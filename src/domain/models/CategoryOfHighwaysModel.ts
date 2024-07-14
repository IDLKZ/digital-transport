import { RoadwayModel } from "./RoadwayModel";

export type CategoryOfHighwaysModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  roadways?: RoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};