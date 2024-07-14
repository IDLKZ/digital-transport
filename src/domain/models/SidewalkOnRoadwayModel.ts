import { StreetModel } from "./StreetModel";
import { SideModel } from "./SideModel";
import { CoverageTypeModel } from "./CoverageTypeModel";
import { PositionModel } from "./PositionModel";

export type SidewalkOnRoadwayModel = {
  id: number;
  order: number;
  start_m: number;
  end_m: number;
  length_m: number;
  width_start_m: number;
  width_end_m: number;
  square_m: number;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  coverage_type_id: number;
  coverage_type?: CoverageTypeModel | null;
  position_id: number;
  position?: PositionModel | null;
  created_at: Date;
  updated_at: Date;
};