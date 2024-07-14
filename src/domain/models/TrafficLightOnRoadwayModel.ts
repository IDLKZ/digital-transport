import { StreetModel } from "./StreetModel";
import { SideModel } from "./SideModel";
import { TypeTrafficLightModel } from "./TypeTrafficLightModel";

export type TrafficLightOnRoadwayModel = {
  id: number;
  order: number;
  on_axis: number;
  have_controller: boolean;
  traffic_light_qty: number;
  pedestrian_traffic_light_qty: number;
  rotary_section_qty: number;
  have_column: boolean;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  traffic_light_type_id: number;
  traffic_light_type?: TypeTrafficLightModel | null;
  created_at: Date;
  updated_at: Date;
};
