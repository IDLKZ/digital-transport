import { StreetModel } from "./StreetModel";
import { CoverageTypeModel } from "./CoverageTypeModel";

export type LengthOfTheRoadSurfaceModel = {
  id: number;
  order: number;
  start: number;
  end: number;
  total_length: number;
  street_id: number;
  street?: StreetModel | null;
  coverage_type_id: number;
  coverage_type?: CoverageTypeModel | null;
  created_at: Date;
  updated_at: Date;
};