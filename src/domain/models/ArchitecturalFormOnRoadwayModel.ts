import { StreetModel } from "./StreetModel";
import { SideModel } from "./SideModel";
import { ArchitecturalFormModel } from "./ArchitecturalFormModel";

export type ArchitecturalFormOnRoadwayModel = {
  id: number;
  order: number;
  start_m: number;
  end_m: number;
  square_m: number;
  perim_m: number;
  feature?: string | null;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  architectural_form_id: number;
  architectural_form?: ArchitecturalFormModel | null;
  created_at: Date;
  updated_at: Date;
};