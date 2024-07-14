import { SideModel } from "./SideModel";
import { StreetModel } from "./StreetModel";

export type PublicStopsOnTheHighwayModel = {
  id: number;
  order: number;
  start_m: number;
  end_m: number;
  bus_stop?: string | null;
  pavilion_qty: number;
  distance_to_the_roadway_m: number;
  have_route: boolean;
  boarding_square_m: number;
  extension_square_m: number;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  created_at: Date;
  updated_at: Date;
};