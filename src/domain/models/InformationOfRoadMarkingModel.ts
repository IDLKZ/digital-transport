import { StreetModel } from "./StreetModel";
import { RoadMarkingModel } from "./RoadMarkingModel";
import { RoadMarkingMaterialModel } from "./RoadMarkingMaterialModel";

export type InformationOfRoadMarkingModel = {
  id: number;
  road_width_sm: number;
  road_length_m: number;
  road_square_m: number;
  street_id: number;
  street?: StreetModel | null;
  road_marking_id: number;
  road_marking?: RoadMarkingModel | null;
  road_marking_material_id?: number | null;
  road_marking_material?: RoadMarkingMaterialModel | null;
  created_at: Date;
  updated_at: Date;
};