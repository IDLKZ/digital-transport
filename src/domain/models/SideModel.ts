import { RoadwayModel } from "./RoadwayModel";
import { SpillwayInfrastructureModel } from "./SpillwayInfrastructureModel";
import { ArchitecturalFormOnRoadwayModel } from "./ArchitecturalFormOnRoadwayModel";
import { TrafficLightOnRoadwayModel } from "./TrafficLightOnRoadwayModel";
import { LandingTypeOnRoadwayModel } from "./LandingTypeOnRoadwayModel";
import { PublicStopsOnTheHighwayModel } from "./PublicStopsOnTheHighwayModel";
import { LightingOnRoadwayModel } from "./LightingOnRoadwayModel";
import { FencingAndGuideOnRoadwayModel } from "./FencingAndGuideOnRoadwayModel";
import { SideStoneOnRoadwayModel } from "./SideStoneOnRoadwayModel";
import { SidewalkOnRoadwayModel } from "./SidewalkOnRoadwayModel";

export type SideModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  roadways?: RoadwayModel[] | null;
  spillwayInfrastructures?: SpillwayInfrastructureModel[] | null;
  architecturalFormOnRoadways?: ArchitecturalFormOnRoadwayModel[] | null;
  trafficLightOnRoadways?: TrafficLightOnRoadwayModel[] | null;
  landingTypeOnRoadways?: LandingTypeOnRoadwayModel[] | null;
  publicStopsOnTheHighways?: PublicStopsOnTheHighwayModel[] | null;
  lightingOnRoadways?: LightingOnRoadwayModel[] | null;
  fencingAndGuideOnRoadways?: FencingAndGuideOnRoadwayModel[] | null;
  sideStoneOnRoadways?: SideStoneOnRoadwayModel[] | null;
  sidewalkOnRoadways?: SidewalkOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};
