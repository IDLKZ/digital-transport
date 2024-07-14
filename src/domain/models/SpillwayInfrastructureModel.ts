import { WellsTypeModel } from "./WellsTypeModel";
import { StreetModel } from "./StreetModel";
import { SideModel } from "./SideModel";

export type SpillwayInfrastructureModel = {
  id: number;
  order: number;
  on_axis_m: number;
  from_axis_m: number;
  is_on_the_roadway: boolean;
  is_on_the_sidewalk: boolean;
  is_on_the_lawn: boolean;
  note?: string | null;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  well_type_id: number;
  well_type?: WellsTypeModel | null;
  created_at: Date;
  updated_at: Date;
};