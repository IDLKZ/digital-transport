import { LandingTypeOnRoadwayModel } from "./LandingTypeOnRoadwayModel";

export type LandingTypeModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  landingTypeOnRoadways?: LandingTypeOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};
