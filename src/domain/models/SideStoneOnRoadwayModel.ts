import { StreetModel } from "./StreetModel";
import { SideModel } from "./SideModel";
import { SideStoneStampModel } from "./SideStoneStampModel";
import { SideStoneTypeModel } from "./SideStoneTypeModel";

export type SideStoneOnRoadwayModel = {
  id: number;
  order: number;
  start_m: number;
  end_m: number;
  length_m: number;
  street_id: number;
  street?: StreetModel | null;
  side_id: number;
  side?: SideModel | null;
  side_stone_stamp_id: number;
  side_stone_stamp?: SideStoneStampModel | null;
  side_stone_type_id: number;
  side_stone_type?: SideStoneTypeModel | null;
  created_at: Date;
  updated_at: Date;
};