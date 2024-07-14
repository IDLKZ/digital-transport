import { InformationOfRoadMarkingModel } from "./InformationOfRoadMarkingModel";

export type RoadMarkingModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  line_of_number: string;
  normative_document?: string | null;
  informationOfRoadMarkings?: InformationOfRoadMarkingModel[] | null;
  created_at: Date;
  updated_at: Date;
};