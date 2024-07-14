import { StreetModel } from "./StreetModel";
import { CoverageTypeModel } from "./CoverageTypeModel";

export type IntersectionAndJunctionOnRoadwayModel = {
  id: number;
  order: number;
  location_right_km: number;
  location_right_m: number;
  location_left_km: number;
  location_left_m: number;
  has_transiotional_high_speed_lanes: boolean;
  has_road_sign: boolean;
  has_tube: boolean;
  has_signal_pole: boolean;
  has_safety_island: boolean;
  street_id: number;
  street?: StreetModel | null;
  coverage_type_id: number;
  coverage_type?: CoverageTypeModel | null;
  created_at: Date;
  updated_at: Date;
};