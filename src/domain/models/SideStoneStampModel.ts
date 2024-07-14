import { SideStoneOnRoadwayModel } from "./SideStoneOnRoadwayModel";

export type SideStoneStampModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  sideStoneOnRoadways?: SideStoneOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};