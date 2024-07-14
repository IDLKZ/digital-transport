import { StreetModel } from "./StreetModel";

export type WidthRoadwayOnHighwayModel = {
  id: number;
  order: number;
  start_of_region_km: number;
  start_of_region_m: number;
  end_of_region_km: number;
  end_of_region_m: number;
  reverse_width_m: number;
  both_width_m: number;
  straight_width_m: number;
  street_id: number;
  street?: StreetModel | null;
  created_at: Date;
  updated_at: Date;
};