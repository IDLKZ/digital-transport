import { Module } from '@nestjs/common';
import { RoleImplRepository } from "./role.impl.repository";
import { PrismaModule } from "../../core/services/prisma/prisma.module";
import { PermissionImplRepository } from "./permission.impl.repository";
import { SideImplRepository } from "./side.impl.repository";
import { PositionImplRepository } from "./position.impl.repository";
import { CategoryOfHighwaysImplRepository } from "./categoryOfHighways.impl.repository";
import { WellsTypeImplRepository } from "./wellsType.impl.repository";
import { RoadMarkingMaterialImplRepository } from "./roadMarkingMaterial.impl.repository";
import { TypeTrafficLightImplRepository } from "./typeTrafficLight.impl.repository";
import { LandingTypeImplRepository } from "./landingType.impl.repository";
import { LightingSupportTypeImplRepository } from "./lightingSupportType.impl.repository";
import { FencingAndGuideTypeImplRepository } from "./fencingAndGuideType.impl.repository";
import { SideStoneTypeImplRepository } from "./sideStoneType.impl.repository";
import { SideStoneStampImplRepository } from "./sideStoneStamp.impl.repository";
import { PedestrianCrossingTypeImplRepository } from "./pedestrianCrossingType.impl.repository";
import { PedestrianCrossingPositionImplRepository } from "./pedestrianCrossingPosition.impl.repository";
import { BarrierTypeImplRepository } from "./barrierType.impl.repository";
import { FlooringConditionImplRepository } from "./flooringCondition.impl.repository";
import { LandscapingConditionImplRepository } from "./landscapingCondition.impl.repository";
import { CoverageTypeImplRepository } from "./coverageType.impl.repository";
import { CommunicationTypeImplRepository } from "./communicationType.impl.repository";
import { RoadSignConditionImplRepository } from "./roadSignCondition.impl.repository";
import { RoadSignMaterialImplRepository } from "./roadSignMaterial.impl.repository";
import { RolePermissionImplRepository } from "./rolePermission.impl.repository";
import { UserImplRepository } from "./user.impl.repository";
import { StreetImplRepository } from "./street.impl.repository";
import { RoadwayImplRepository } from "./roadway.impl.repository";
import { SpillwayInfrastructureImplRepository } from "./spillwayInfrastructure.impl.repository";
import { RoadMarkingImplRepository } from "./roadMarking.impl.repository";
import { InformationOfRoadMarkingImplRepository } from "./informationOfRoadMarking.impl.repository";
import { ArchitecturalFormOnRoadwayImplRepository } from "./architecturalFormOnRoadway.impl.repository";
import { TrafficLightOnRoadwayImplRepository } from "./trafficLightOnRoadway.impl.repository";
import { LandingTypeOnRoadwayImplRepository } from "./landingTypeOnRoadway.impl.repository";
import { PublicStopsOnTheHighwayImplRepository } from "./publicStopsOnTheHighway.impl.repository";
import { LightingOnRoadwayImplRepository } from "./lightingOnRoadway.impl.repository";
import { UnitImplRepository } from "./unit.impl.repository";

@Module({
  imports: [PrismaModule],
  providers:[
    RoleImplRepository,
    PermissionImplRepository,
    SideImplRepository,
    CoverageTypeImplRepository,
    PositionImplRepository,
    CategoryOfHighwaysImplRepository,
    WellsTypeImplRepository,
    RoadMarkingMaterialImplRepository,
    TypeTrafficLightImplRepository,
    LandingTypeImplRepository,
    LightingSupportTypeImplRepository,
    FencingAndGuideTypeImplRepository,
    SideStoneTypeImplRepository,
    SideStoneStampImplRepository,
    PedestrianCrossingTypeImplRepository,
    PedestrianCrossingPositionImplRepository,
    BarrierTypeImplRepository,
    FlooringConditionImplRepository,
    LandscapingConditionImplRepository,
    CommunicationTypeImplRepository,
    RoadSignConditionImplRepository,
    RoadSignMaterialImplRepository,
    RolePermissionImplRepository,
    UserImplRepository,
    StreetImplRepository,
    RoadwayImplRepository,
    SpillwayInfrastructureImplRepository,
    RoadMarkingImplRepository,
    InformationOfRoadMarkingImplRepository,
    ArchitecturalFormOnRoadwayImplRepository,
    TrafficLightOnRoadwayImplRepository,
    LandingTypeOnRoadwayImplRepository,
    PublicStopsOnTheHighwayImplRepository,
    LightingOnRoadwayImplRepository,
    UnitImplRepository,

  ],
  exports: [
    RoleImplRepository,
    PermissionImplRepository,
    SideImplRepository,
    CoverageTypeImplRepository,
    PositionImplRepository,
    CategoryOfHighwaysImplRepository,
    WellsTypeImplRepository,
    RoadMarkingMaterialImplRepository,
    TypeTrafficLightImplRepository,
    LandingTypeImplRepository,
    LightingSupportTypeImplRepository,
    FencingAndGuideTypeImplRepository,
    SideStoneTypeImplRepository,
    SideStoneStampImplRepository,
    PedestrianCrossingTypeImplRepository,
    PedestrianCrossingPositionImplRepository,
    BarrierTypeImplRepository,
    FlooringConditionImplRepository,
    LandscapingConditionImplRepository,
    CommunicationTypeImplRepository,
    RoadSignConditionImplRepository,
    RoadSignMaterialImplRepository,
    RolePermissionImplRepository,
    UserImplRepository,
    StreetImplRepository,
    RoadwayImplRepository,
    SpillwayInfrastructureImplRepository,
    RoadMarkingImplRepository,
    InformationOfRoadMarkingImplRepository,
    ArchitecturalFormOnRoadwayImplRepository,
    TrafficLightOnRoadwayImplRepository,
    LandingTypeOnRoadwayImplRepository,
    PublicStopsOnTheHighwayImplRepository,
    LightingOnRoadwayImplRepository,
    UnitImplRepository,


  ],
})
export class RepositoryModule {}
