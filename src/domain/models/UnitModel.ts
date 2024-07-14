import { FencingAndGuideOnRoadwayModel } from "./FencingAndGuideOnRoadwayModel";

export type UnitModel = {
  id: number;
  name: string;
  symbol: string;
  fencingAndGuideOnRoadways?: FencingAndGuideOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};