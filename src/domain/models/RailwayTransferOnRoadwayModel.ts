import { StreetModel } from "./StreetModel";
import { BarrierTypeModel } from "./BarrierTypeModel";
import { FlooringConditionModel } from "./FlooringConditionModel";

export type RailwayTransferOnRoadwayModel = {
  id: number;
  order: number;
  location_m: number;
  location_km: number;
  path_qty: number;
  has_barrier: boolean;
  has_road_sign: boolean;
  has_alarm_sign: boolean;
  has_fence: boolean;
  has_traffic_light: boolean;
  has_security: boolean;
  visible_distance_length: number;
  street_id: number;
  street?: StreetModel | null;
  barrier_type_id: number;
  barrier_type?: BarrierTypeModel | null;
  floor_condition_id: number;
  floor_condition?: FlooringConditionModel | null;
  created_at: Date;
  updated_at: Date;
};