import { CategoryOfHighwaysModel } from "./CategoryOfHighwaysModel";
import { CoverageTypeModel } from "./CoverageTypeModel";
import { SideModel } from "./SideModel";
import { StreetModel } from "./StreetModel";

export type RoadwayModel = {
  id: number;
  order: number;
  start_m: number;
  end_m: number;
  square_m: number;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  coverage_type_id: number;
  coverage_type?: CoverageTypeModel | null;
  category_of_highway_id: number;
  category_of_highways?: CategoryOfHighwaysModel | null;
  created_at: Date;
  updated_at: Date;
};