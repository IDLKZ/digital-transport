import { PedestrianCrossingOnRoadwayModel } from "./PedestrianCrossingOnRoadwayModel";

export type PedestrianCrossingTypeModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  pedestrianCrossingOnRoadways?: PedestrianCrossingOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};
