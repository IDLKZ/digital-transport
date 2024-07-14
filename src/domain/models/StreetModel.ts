import { LengthOfTheRoadSurfaceModel } from "./LengthOfTheRoadSurfaceModel";
import { RoadwayModel } from "./RoadwayModel";
import { SpillwayInfrastructureModel } from "./SpillwayInfrastructureModel";
import { InformationOfRoadMarkingModel } from "./InformationOfRoadMarkingModel";
import { ArchitecturalFormOnRoadwayModel } from "./ArchitecturalFormOnRoadwayModel";
import { TrafficLightOnRoadwayModel } from "./TrafficLightOnRoadwayModel";
import { LandingTypeOnRoadwayModel } from "./LandingTypeOnRoadwayModel";
import { PublicStopsOnTheHighwayModel } from "./PublicStopsOnTheHighwayModel";
import { LightingOnRoadwayModel } from "./LightingOnRoadwayModel";
import { FencingAndGuideOnRoadwayModel } from "./FencingAndGuideOnRoadwayModel";
import { SideStoneOnRoadwayModel } from "./SideStoneOnRoadwayModel";
import { SidewalkOnRoadwayModel } from "./SidewalkOnRoadwayModel";
import { PedestrianCrossingOnRoadwayModel } from "./PedestrianCrossingOnRoadwayModel";
import { RailwayTransferOnRoadwayModel } from "./RailwayTransferOnRoadwayModel";
import { WidthRoadwayOnHighwayModel } from "./WidthRoadwayOnHighwayModel";
import { LongitudinalProfileOfTheRoadModel } from "./LongitudinalProfileOfTheRoadModel";
import { LandscapingOnRoadwayModel } from "./LandscapingOnRoadwayModel";
import { IntersectionAndJunctionOnRoadwayModel } from "./IntersectionAndJunctionOnRoadwayModel";
import { CommunicationWithinTheBandOnRoadwayModel } from "./CommunicationWithinTheBandOnRoadwayModel";
import { RoadSingOnRoadwayModel } from "./RoadSingOnRoadwayModel";

export type StreetModel = {
  id: number;
  title_ru: string;
  title_kk: string;
  title_en?: string | null;
  geo_position: any; // Assuming JSON type
  geo_color?: string | null;
  is_active: boolean;
  lengthOfTheRoadSurfaces?: LengthOfTheRoadSurfaceModel[] | null;
  roadways?: RoadwayModel[] | null;
  spillwayInfrastructures?: SpillwayInfrastructureModel[] | null;
  informationOfRoadMarkings?: InformationOfRoadMarkingModel[] | null;
  architecturalFormOnRoadways?: ArchitecturalFormOnRoadwayModel[] | null;
  trafficLightOnRoadways?: TrafficLightOnRoadwayModel[] | null;
  landingTypeOnRoadways?: LandingTypeOnRoadwayModel[] | null;
  publicStopsOnTheHighways?: PublicStopsOnTheHighwayModel[] | null;
  lightingOnRoadways?: LightingOnRoadwayModel[] | null;
  fencingAndGuideOnRoadways?: FencingAndGuideOnRoadwayModel[] | null;
  sideStoneOnRoadways?: SideStoneOnRoadwayModel[] | null;
  sidewalkOnRoadways?: SidewalkOnRoadwayModel[] | null;
  pedestrianCrossingOnRoadways?: PedestrianCrossingOnRoadwayModel[] | null;
  railwayTransferOnRoadways?: RailwayTransferOnRoadwayModel[] | null;
  widthRoadwayOnHighways?: WidthRoadwayOnHighwayModel[] | null;
  longitudinalProfileOfTheRoads?: LongitudinalProfileOfTheRoadModel[] | null;
  landscapingOnRoadways?: LandscapingOnRoadwayModel[] | null;
  intersectionAndJunctionOnRoadways?: IntersectionAndJunctionOnRoadwayModel[] | null;
  communicationWithinTheBandOnRoadways?: CommunicationWithinTheBandOnRoadwayModel[] | null;
  roadSingOnRoadways?: RoadSingOnRoadwayModel[] | null;
  created_at: Date;
  updated_at: Date;
};