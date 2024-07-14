import { TrafficLightOnRoadwayModel } from "./TrafficLightOnRoadwayModel";

export type TypeTrafficLightModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  trafficLightOnRoadways?: TrafficLightOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};