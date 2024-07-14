import { FencingAndGuideOnRoadwayModel } from "./FencingAndGuideOnRoadwayModel";

export type FencingAndGuideTypeModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  fencingAndGuideOnRoadways?: FencingAndGuideOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};