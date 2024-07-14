import { InformationOfRoadMarkingModel } from "./InformationOfRoadMarkingModel";

export type RoadMarkingMaterialModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  informationOfRoadMarkings?: InformationOfRoadMarkingModel[] | null;
  created_at: Date;
  updated_at: Date;
};
