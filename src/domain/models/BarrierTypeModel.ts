import { RailwayTransferOnRoadwayModel } from "./RailwayTransferOnRoadwayModel";

export type BarrierTypeModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  railwayTransferOnRoadways?: RailwayTransferOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};