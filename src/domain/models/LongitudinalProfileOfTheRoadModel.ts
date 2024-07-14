import { StreetModel } from "./StreetModel";

export type LongitudinalProfileOfTheRoadModel = {
  id: number;
  order: number;
  start_of_region_km: number;
  start_of_region_m: number;
  end_of_region_km: number;
  end_of_region_m: number;
  length_m: number;
  slope: number;
  street_id: number;
  street?: StreetModel | null;
  created_at: Date;
  updated_at: Date;
};