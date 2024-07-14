import { StreetModel } from "./StreetModel";
import { SideModel } from "./SideModel";
import { LandingTypeModel } from "./LandingTypeModel";

export type LandingTypeOnRoadwayModel = {
  id: number;
  order: number;
  start_m: number;
  end_m: number;
  width_start_m: number;
  width_end_m: number;
  square_m: number;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  landing_type_id: number;
  landing_type?: LandingTypeModel | null;
  created_at: Date;
  updated_at: Date;
};