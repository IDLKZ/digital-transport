import { StreetModel } from "./StreetModel";
import { RoadSignModel } from "./RoadSignModel";
import { RoadSignConditionModel } from "./RoadSignConditionModel";

export type RoadSingOnRoadwayModel = {
  id: number;
  order: number;
  location_km: number;
  location_m: number;
  has_left_adjunctions_location: boolean;
  has_left_direct_location: boolean;
  has_left_reverse_location: boolean;
  has_right_adjunctions_location: boolean;
  has_right_direct_location: boolean;
  has_right_reverse_location: boolean;
  has_berm: boolean;
  street_id: number;
  street?: StreetModel | null;
  road_sign_id: number;
  road_sign?: RoadSignModel | null;
  road_sign_condition_id: number;
  road_sign_condition?: RoadSignConditionModel | null;
  created_at: Date;
  updated_at: Date;
};