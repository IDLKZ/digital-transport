import { ArchitecturalFormOnRoadwayModel } from "./ArchitecturalFormOnRoadwayModel";

export type ArchitecturalFormModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  architecturalFormOnRoadways?: ArchitecturalFormOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};