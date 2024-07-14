import { CommunicationWithinTheBandOnRoadwayModel } from "./CommunicationWithinTheBandOnRoadwayModel";

export type CommunicationTypeModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  communicationWithinTheBandOnRoadways?: CommunicationWithinTheBandOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};