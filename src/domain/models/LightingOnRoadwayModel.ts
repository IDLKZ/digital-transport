import { SideModel } from "./SideModel";
import { StreetModel } from "./StreetModel";

export type LightingOnRoadwayModel = {
  id: number;
  order: number;
  on_axis_m: number;
  lighting_target?: string | null;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  created_at: Date;
  updated_at: Date;
};