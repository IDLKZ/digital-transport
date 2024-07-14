import { IntersectionAndJunctionOnRoadwayModel } from "./IntersectionAndJunctionOnRoadwayModel";
import { SidewalkOnRoadwayModel } from "./SidewalkOnRoadwayModel";
import { RoadwayModel } from "./RoadwayModel";
import { LengthOfTheRoadSurfaceModel } from "./LengthOfTheRoadSurfaceModel";

export type CoverageTypeModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  lengthOfTheRoadSurfaces?: LengthOfTheRoadSurfaceModel[] | null;
  roadways?: RoadwayModel[] | null;
  sidewalkOnRoadways?: SidewalkOnRoadwayModel[] | null;
  intersectionAndJunctionOnRoadways?: IntersectionAndJunctionOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};