import { RoadSingOnRoadwayModel } from "./RoadSingOnRoadwayModel";

export type RoadSignModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  normative_act: string;
  sign_number: string;
  is_active: boolean;
  roadSingOnRoadways?: RoadSingOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};