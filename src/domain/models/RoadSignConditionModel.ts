import { RoadSingOnRoadwayModel } from "./RoadSingOnRoadwayModel";

export type RoadSignConditionModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  roadSingOnRoadways?: RoadSingOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};
