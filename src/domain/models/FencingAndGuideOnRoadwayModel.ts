import { FencingAndGuideTypeModel } from "./FencingAndGuideTypeModel";
import { UnitModel } from "./UnitModel";
import { SideModel } from "./SideModel";
import { StreetModel } from "./StreetModel";

export type FencingAndGuideOnRoadwayModel = {
  id: number;
  order: number;
  start_m: number;
  end_m: number;
  qty: number;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  fencing_guide_type_id: number;
  fencing_guide_type?: FencingAndGuideTypeModel | null;
  unit_id: number;
  unit?: UnitModel | null;
  created_at: Date;
  updated_at: Date;
};