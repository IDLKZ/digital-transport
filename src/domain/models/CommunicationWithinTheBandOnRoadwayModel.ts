import { CommunicationTypeModel } from "./CommunicationTypeModel";
import { StreetModel } from "./StreetModel";

export type CommunicationWithinTheBandOnRoadwayModel = {
  id: number;
  order: number;
  location_start_km: number;
  location_start_m: number;
  location_end_km: number;
  location_end_m: number;
  distance_edge_left_m: number;
  distance_edge_right_m: number;
  place_of_intersection_km: number;
  place_of_itersection_m: number;
  street_id: number;
  street?: StreetModel | null;
  communication_type_id: number;
  communication_type?: CommunicationTypeModel | null;
  created_at: Date;
  updated_at: Date;
};