import { StreetModel } from "./StreetModel";
import { PedestrianCrossingTypeModel } from "./PedestrianCrossingTypeModel";
import { PedestrianCrossingPositionModel } from "./PedestrianCrossingPositionModel";

export type PedestrianCrossingOnRoadwayModel = {
  id: number;
  order: number;
  adress_length_m: number;
  bus_stop_has_pedestrian: boolean;
  street_id: number;
  street?: StreetModel | null;
  pedestrian_crossing_type_id: number;
  pedestrian_crossing_type?: PedestrianCrossingTypeModel | null;
  pedestrian_crossing_position_id: number;
  pedestrian_crossing_position?: PedestrianCrossingPositionModel | null;
  created_at: Date;
  updated_at: Date;
};