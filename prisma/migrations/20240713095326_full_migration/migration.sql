-- CreateTable
CREATE TABLE `Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Roles_title_key`(`title`),
    INDEX `Roles_title_idx`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Permissions_title_key`(`title`),
    INDEX `Permissions_title_idx`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RolePermission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER NOT NULL,
    `permission_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `RolePermission_role_id_idx`(`role_id`),
    INDEX `RolePermission_permission_id_idx`(`permission_id`),
    UNIQUE INDEX `RolePermission_role_id_permission_id_key`(`role_id`, `permission_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password_hash` TEXT NOT NULL,
    `email_verified` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `role_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_phone_key`(`phone`),
    INDEX `Users_name_idx`(`name`),
    INDEX `Users_email_idx`(`email`),
    INDEX `Users_phone_idx`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Streets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `geo_position` JSON NOT NULL,
    `geo_color` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoverageTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sides` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Positions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LengthOfTheRoadSurfaces` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start` DOUBLE NOT NULL,
    `end` DOUBLE NOT NULL,
    `total_length` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `coverage_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `LengthOfTheRoadSurfaces_coverage_type_id_idx`(`coverage_type_id`),
    INDEX `LengthOfTheRoadSurfaces_street_id_idx`(`street_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryOfHighways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_m` DOUBLE NOT NULL,
    `end_m` DOUBLE NOT NULL,
    `square_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `coverage_type_id` INTEGER NOT NULL,
    `category_of_highway_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Roadways_side_id_idx`(`side_id`),
    INDEX `Roadways_coverage_type_id_idx`(`coverage_type_id`),
    INDEX `Roadways_category_of_highway_id_idx`(`category_of_highway_id`),
    INDEX `Roadways_street_id_idx`(`street_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WellsTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpillwayInfrastructures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `on_axis_m` DOUBLE NOT NULL,
    `from_axis_m` DOUBLE NOT NULL,
    `is_on_the_roadway` BOOLEAN NOT NULL,
    `is_on_the_sidewalk` BOOLEAN NOT NULL,
    `is_on_the_lawn` BOOLEAN NOT NULL,
    `note` TEXT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `well_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `SpillwayInfrastructures_side_id_idx`(`side_id`),
    INDEX `SpillwayInfrastructures_street_id_idx`(`street_id`),
    INDEX `SpillwayInfrastructures_well_type_id_idx`(`well_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoadMarkings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `line_of_number` TEXT NOT NULL,
    `normative_document` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoadMarkingMaterials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InformationOfRoadMarkings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `road_width_sm` DOUBLE NOT NULL,
    `road_length_m` DOUBLE NOT NULL,
    `road_square_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `road_marking_id` INTEGER NOT NULL,
    `road_marking_material_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `InformationOfRoadMarkings_street_id_idx`(`street_id`),
    INDEX `InformationOfRoadMarkings_road_marking_id_idx`(`road_marking_id`),
    INDEX `InformationOfRoadMarkings_road_marking_material_id_idx`(`road_marking_material_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArchitecturalForms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArchitecturalFormOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_m` DOUBLE NOT NULL,
    `end_m` DOUBLE NOT NULL,
    `square_m` DOUBLE NOT NULL,
    `perim_m` DOUBLE NOT NULL,
    `feature` TEXT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `architectural_form_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `ArchitecturalFormOnRoadways_side_id_idx`(`side_id`),
    INDEX `ArchitecturalFormOnRoadways_street_id_idx`(`street_id`),
    INDEX `ArchitecturalFormOnRoadways_architectural_form_id_idx`(`architectural_form_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeTrafficLights` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrafficLightOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `on_axis` DOUBLE NOT NULL,
    `have_controller` BOOLEAN NOT NULL,
    `traffic_light_qty` INTEGER NOT NULL,
    `pedestrian_traffic_light_qty` INTEGER NOT NULL,
    `rotary_section_qty` INTEGER NOT NULL,
    `have_column` BOOLEAN NOT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `traffic_light_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `TrafficLightOnRoadways_side_id_idx`(`side_id`),
    INDEX `TrafficLightOnRoadways_street_id_idx`(`street_id`),
    INDEX `TrafficLightOnRoadways_traffic_light_type_id_idx`(`traffic_light_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LandingTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LandingTypeOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_m` DOUBLE NOT NULL,
    `end_m` DOUBLE NOT NULL,
    `width_start_m` DOUBLE NOT NULL,
    `width_end_m` DOUBLE NOT NULL,
    `square_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `landing_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `LandingTypeOnRoadways_side_id_idx`(`side_id`),
    INDEX `LandingTypeOnRoadways_street_id_idx`(`street_id`),
    INDEX `LandingTypeOnRoadways_landing_type_id_idx`(`landing_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PublicStopsOnTheHighways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_m` DOUBLE NOT NULL,
    `end_m` DOUBLE NOT NULL,
    `bus_stop` TEXT NULL,
    `pavilion_qty` INTEGER NOT NULL,
    `distance_to_the_roadway_m` DOUBLE NOT NULL,
    `have_route` BOOLEAN NOT NULL,
    `boarding_square_m` DOUBLE NOT NULL,
    `extension_square_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `PublicStopsOnTheHighways_side_id_idx`(`side_id`),
    INDEX `PublicStopsOnTheHighways_street_id_idx`(`street_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LightingSupportTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LightingOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `on_axis_m` DOUBLE NOT NULL,
    `lighting_target` TEXT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `LightingOnRoadways_side_id_idx`(`side_id`),
    INDEX `LightingOnRoadways_street_id_idx`(`street_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Units` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Units_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FencingAndGuideTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FencingAndGuideOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_m` DOUBLE NOT NULL,
    `end_m` DOUBLE NOT NULL,
    `qty` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `fencing_guide_type_id` INTEGER NOT NULL,
    `unit_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `FencingAndGuideOnRoadways_side_id_idx`(`side_id`),
    INDEX `FencingAndGuideOnRoadways_street_id_idx`(`street_id`),
    INDEX `FencingAndGuideOnRoadways_fencing_guide_type_id_idx`(`fencing_guide_type_id`),
    INDEX `FencingAndGuideOnRoadways_unit_id_idx`(`unit_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SideStoneTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SideStoneStamps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SideStoneOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_m` DOUBLE NOT NULL,
    `end_m` DOUBLE NOT NULL,
    `length_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `side_stone_stamp_id` INTEGER NOT NULL,
    `side_stone_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `SideStoneOnRoadways_side_id_idx`(`side_id`),
    INDEX `SideStoneOnRoadways_street_id_idx`(`street_id`),
    INDEX `SideStoneOnRoadways_side_stone_stamp_id_idx`(`side_stone_stamp_id`),
    INDEX `SideStoneOnRoadways_side_stone_type_id_idx`(`side_stone_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SidewalkOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_m` DOUBLE NOT NULL,
    `end_m` DOUBLE NOT NULL,
    `length_m` DOUBLE NOT NULL,
    `width_start_m` DOUBLE NOT NULL,
    `width_end_m` DOUBLE NOT NULL,
    `square_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `side_id` INTEGER NOT NULL,
    `coverage_type_id` INTEGER NOT NULL,
    `position_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `SidewalkOnRoadways_side_id_idx`(`side_id`),
    INDEX `SidewalkOnRoadways_street_id_idx`(`street_id`),
    INDEX `SidewalkOnRoadways_coverage_type_id_idx`(`coverage_type_id`),
    INDEX `SidewalkOnRoadways_position_id_idx`(`position_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedestrianCrossingTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedestrianCrossingPositions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PedestrianCrossingOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `adress_length_m` DOUBLE NOT NULL,
    `bus_stop_has_pedestrian` BOOLEAN NOT NULL,
    `street_id` INTEGER NOT NULL,
    `pedestrian_crossing_type_id` INTEGER NOT NULL,
    `pedestrian_crossing_position_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `PedestrianCrossingOnRoadways_street_id_idx`(`street_id`),
    INDEX `PedestrianCrossingOnRoadways_pedestrian_crossing_type_id_idx`(`pedestrian_crossing_type_id`),
    INDEX `PedestrianCrossingOnRoadways_pedestrian_crossing_position_id_idx`(`pedestrian_crossing_position_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BarrierTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FlooringConditions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RailwayTransferOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `location_m` DOUBLE NOT NULL,
    `location_km` DOUBLE NOT NULL,
    `path_qty` DOUBLE NOT NULL,
    `has_barrier` BOOLEAN NOT NULL,
    `has_road_sign` BOOLEAN NOT NULL,
    `has_alarm_sign` BOOLEAN NOT NULL,
    `has_fence` BOOLEAN NOT NULL,
    `has_traffic_light` BOOLEAN NOT NULL,
    `has_security` BOOLEAN NOT NULL,
    `visible_distance_length` INTEGER NOT NULL,
    `street_id` INTEGER NOT NULL,
    `barrier_type_id` INTEGER NOT NULL,
    `floor_condition_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `RailwayTransferOnRoadways_street_id_idx`(`street_id`),
    INDEX `RailwayTransferOnRoadways_barrier_type_id_idx`(`barrier_type_id`),
    INDEX `RailwayTransferOnRoadways_floor_condition_id_idx`(`floor_condition_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WidthRoadwayOnHighways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_of_region_km` DOUBLE NOT NULL,
    `start_of_region_m` DOUBLE NOT NULL,
    `end_of_region_km` DOUBLE NOT NULL,
    `end_of_region_m` DOUBLE NOT NULL,
    `reverse_width_m` DOUBLE NOT NULL,
    `both_width_m` DOUBLE NOT NULL,
    `straight_width_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `WidthRoadwayOnHighways_street_id_idx`(`street_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LongitudinalProfileOfTheRoads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_of_region_km` DOUBLE NOT NULL,
    `start_of_region_m` DOUBLE NOT NULL,
    `end_of_region_km` DOUBLE NOT NULL,
    `end_of_region_m` DOUBLE NOT NULL,
    `length_m` DOUBLE NOT NULL,
    `slope` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `LongitudinalProfileOfTheRoads_street_id_idx`(`street_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LandscapingCondition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LandscapingOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `start_location_right_km` DOUBLE NOT NULL,
    `start_location_right_m` DOUBLE NOT NULL,
    `end_location_right_km` DOUBLE NOT NULL,
    `end_location_right_m` DOUBLE NOT NULL,
    `start_location_left_km` DOUBLE NOT NULL,
    `start_location_left_m` DOUBLE NOT NULL,
    `end_location_left_km` DOUBLE NOT NULL,
    `end_location_left_m` DOUBLE NOT NULL,
    `two_row_m` DOUBLE NOT NULL,
    `three_row_m` DOUBLE NOT NULL,
    `four_row_m` DOUBLE NOT NULL,
    `five_row_m` DOUBLE NOT NULL,
    `six_row_m` DOUBLE NOT NULL,
    `eight_row_m` DOUBLE NOT NULL,
    `total_length_m` DOUBLE NOT NULL,
    `decorative_length_km` DOUBLE NOT NULL,
    `length_to_edge_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `landscaping_condition_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `LandscapingOnRoadways_street_id_idx`(`street_id`),
    INDEX `LandscapingOnRoadways_landscaping_condition_id_idx`(`landscaping_condition_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IntersectionAndJunctionOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `location_right_km` DOUBLE NOT NULL,
    `location_right_m` DOUBLE NOT NULL,
    `location_left_km` DOUBLE NOT NULL,
    `location_left_m` DOUBLE NOT NULL,
    `has_transiotional_high_speed_lanes` BOOLEAN NOT NULL,
    `has_road_sign` BOOLEAN NOT NULL,
    `has_tube` BOOLEAN NOT NULL,
    `has_signal_pole` BOOLEAN NOT NULL,
    `has_safety_island` BOOLEAN NOT NULL,
    `street_id` INTEGER NOT NULL,
    `coverage_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `IntersectionAndJunctionOnRoadways_street_id_idx`(`street_id`),
    INDEX `IntersectionAndJunctionOnRoadways_coverage_type_id_idx`(`coverage_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommunicationTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommunicationWithinTheBandOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `location_start_km` DOUBLE NOT NULL,
    `location_start_m` DOUBLE NOT NULL,
    `location_end_km` DOUBLE NOT NULL,
    `location_end_m` DOUBLE NOT NULL,
    `distance_edge_left_m` DOUBLE NOT NULL,
    `distance_edge_right_m` DOUBLE NOT NULL,
    `place_of_intersection_km` DOUBLE NOT NULL,
    `place_of_itersection_m` DOUBLE NOT NULL,
    `street_id` INTEGER NOT NULL,
    `communication_type_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `CommunicationWithinTheBandOnRoadways_street_id_idx`(`street_id`),
    INDEX `CommunicationWithinTheBandOnRoadways_communication_type_id_idx`(`communication_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoadSigns` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `normative_act` TEXT NOT NULL,
    `sign_number` TEXT NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoadSignConditions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoadSignMaterials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_ru` TEXT NOT NULL,
    `title_kk` TEXT NOT NULL,
    `title_en` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoadSingOnRoadways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `location_km` DOUBLE NOT NULL,
    `location_m` DOUBLE NOT NULL,
    `has_left_adjunctions_location` BOOLEAN NOT NULL,
    `has_left_direct_location` BOOLEAN NOT NULL,
    `has_left_reverse_location` BOOLEAN NOT NULL,
    `has_right_adjunctions_location` BOOLEAN NOT NULL,
    `has_right_direct_location` BOOLEAN NOT NULL,
    `has_right_reverse_location` BOOLEAN NOT NULL,
    `has_berm` BOOLEAN NOT NULL,
    `street_id` INTEGER NOT NULL,
    `road_sign_id` INTEGER NOT NULL,
    `road_sign_condition_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `RoadSingOnRoadways_street_id_idx`(`street_id`),
    INDEX `RoadSingOnRoadways_road_sign_id_idx`(`road_sign_id`),
    INDEX `RoadSingOnRoadways_road_sign_condition_id_idx`(`road_sign_condition_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `Permissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LengthOfTheRoadSurfaces` ADD CONSTRAINT `LengthOfTheRoadSurfaces_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LengthOfTheRoadSurfaces` ADD CONSTRAINT `LengthOfTheRoadSurfaces_coverage_type_id_fkey` FOREIGN KEY (`coverage_type_id`) REFERENCES `CoverageTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Roadways` ADD CONSTRAINT `Roadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Roadways` ADD CONSTRAINT `Roadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Roadways` ADD CONSTRAINT `Roadways_coverage_type_id_fkey` FOREIGN KEY (`coverage_type_id`) REFERENCES `CoverageTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Roadways` ADD CONSTRAINT `Roadways_category_of_highway_id_fkey` FOREIGN KEY (`category_of_highway_id`) REFERENCES `CategoryOfHighways`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpillwayInfrastructures` ADD CONSTRAINT `SpillwayInfrastructures_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpillwayInfrastructures` ADD CONSTRAINT `SpillwayInfrastructures_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpillwayInfrastructures` ADD CONSTRAINT `SpillwayInfrastructures_well_type_id_fkey` FOREIGN KEY (`well_type_id`) REFERENCES `WellsTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InformationOfRoadMarkings` ADD CONSTRAINT `InformationOfRoadMarkings_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InformationOfRoadMarkings` ADD CONSTRAINT `InformationOfRoadMarkings_road_marking_id_fkey` FOREIGN KEY (`road_marking_id`) REFERENCES `RoadMarkings`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InformationOfRoadMarkings` ADD CONSTRAINT `InformationOfRoadMarkings_road_marking_material_id_fkey` FOREIGN KEY (`road_marking_material_id`) REFERENCES `RoadMarkingMaterials`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArchitecturalFormOnRoadways` ADD CONSTRAINT `ArchitecturalFormOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArchitecturalFormOnRoadways` ADD CONSTRAINT `ArchitecturalFormOnRoadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArchitecturalFormOnRoadways` ADD CONSTRAINT `ArchitecturalFormOnRoadways_architectural_form_id_fkey` FOREIGN KEY (`architectural_form_id`) REFERENCES `ArchitecturalForms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrafficLightOnRoadways` ADD CONSTRAINT `TrafficLightOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrafficLightOnRoadways` ADD CONSTRAINT `TrafficLightOnRoadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrafficLightOnRoadways` ADD CONSTRAINT `TrafficLightOnRoadways_traffic_light_type_id_fkey` FOREIGN KEY (`traffic_light_type_id`) REFERENCES `TypeTrafficLights`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LandingTypeOnRoadways` ADD CONSTRAINT `LandingTypeOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LandingTypeOnRoadways` ADD CONSTRAINT `LandingTypeOnRoadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LandingTypeOnRoadways` ADD CONSTRAINT `LandingTypeOnRoadways_landing_type_id_fkey` FOREIGN KEY (`landing_type_id`) REFERENCES `LandingTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PublicStopsOnTheHighways` ADD CONSTRAINT `PublicStopsOnTheHighways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PublicStopsOnTheHighways` ADD CONSTRAINT `PublicStopsOnTheHighways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LightingOnRoadways` ADD CONSTRAINT `LightingOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LightingOnRoadways` ADD CONSTRAINT `LightingOnRoadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FencingAndGuideOnRoadways` ADD CONSTRAINT `FencingAndGuideOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FencingAndGuideOnRoadways` ADD CONSTRAINT `FencingAndGuideOnRoadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FencingAndGuideOnRoadways` ADD CONSTRAINT `FencingAndGuideOnRoadways_fencing_guide_type_id_fkey` FOREIGN KEY (`fencing_guide_type_id`) REFERENCES `FencingAndGuideTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FencingAndGuideOnRoadways` ADD CONSTRAINT `FencingAndGuideOnRoadways_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `Units`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SideStoneOnRoadways` ADD CONSTRAINT `SideStoneOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SideStoneOnRoadways` ADD CONSTRAINT `SideStoneOnRoadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SideStoneOnRoadways` ADD CONSTRAINT `SideStoneOnRoadways_side_stone_stamp_id_fkey` FOREIGN KEY (`side_stone_stamp_id`) REFERENCES `SideStoneStamps`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SideStoneOnRoadways` ADD CONSTRAINT `SideStoneOnRoadways_side_stone_type_id_fkey` FOREIGN KEY (`side_stone_type_id`) REFERENCES `SideStoneTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SidewalkOnRoadways` ADD CONSTRAINT `SidewalkOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SidewalkOnRoadways` ADD CONSTRAINT `SidewalkOnRoadways_side_id_fkey` FOREIGN KEY (`side_id`) REFERENCES `Sides`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SidewalkOnRoadways` ADD CONSTRAINT `SidewalkOnRoadways_coverage_type_id_fkey` FOREIGN KEY (`coverage_type_id`) REFERENCES `CoverageTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SidewalkOnRoadways` ADD CONSTRAINT `SidewalkOnRoadways_position_id_fkey` FOREIGN KEY (`position_id`) REFERENCES `Positions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedestrianCrossingOnRoadways` ADD CONSTRAINT `PedestrianCrossingOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedestrianCrossingOnRoadways` ADD CONSTRAINT `PedestrianCrossingOnRoadways_pedestrian_crossing_type_id_fkey` FOREIGN KEY (`pedestrian_crossing_type_id`) REFERENCES `PedestrianCrossingTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedestrianCrossingOnRoadways` ADD CONSTRAINT `PedestrianCrossingOnRoadways_pedestrian_crossing_position_i_fkey` FOREIGN KEY (`pedestrian_crossing_position_id`) REFERENCES `PedestrianCrossingPositions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RailwayTransferOnRoadways` ADD CONSTRAINT `RailwayTransferOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RailwayTransferOnRoadways` ADD CONSTRAINT `RailwayTransferOnRoadways_barrier_type_id_fkey` FOREIGN KEY (`barrier_type_id`) REFERENCES `BarrierTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RailwayTransferOnRoadways` ADD CONSTRAINT `RailwayTransferOnRoadways_floor_condition_id_fkey` FOREIGN KEY (`floor_condition_id`) REFERENCES `FlooringConditions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WidthRoadwayOnHighways` ADD CONSTRAINT `WidthRoadwayOnHighways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LongitudinalProfileOfTheRoads` ADD CONSTRAINT `LongitudinalProfileOfTheRoads_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LandscapingOnRoadways` ADD CONSTRAINT `LandscapingOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LandscapingOnRoadways` ADD CONSTRAINT `LandscapingOnRoadways_landscaping_condition_id_fkey` FOREIGN KEY (`landscaping_condition_id`) REFERENCES `LandscapingCondition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IntersectionAndJunctionOnRoadways` ADD CONSTRAINT `IntersectionAndJunctionOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IntersectionAndJunctionOnRoadways` ADD CONSTRAINT `IntersectionAndJunctionOnRoadways_coverage_type_id_fkey` FOREIGN KEY (`coverage_type_id`) REFERENCES `CoverageTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommunicationWithinTheBandOnRoadways` ADD CONSTRAINT `CommunicationWithinTheBandOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommunicationWithinTheBandOnRoadways` ADD CONSTRAINT `CommunicationWithinTheBandOnRoadways_communication_type_id_fkey` FOREIGN KEY (`communication_type_id`) REFERENCES `CommunicationTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoadSingOnRoadways` ADD CONSTRAINT `RoadSingOnRoadways_street_id_fkey` FOREIGN KEY (`street_id`) REFERENCES `Streets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoadSingOnRoadways` ADD CONSTRAINT `RoadSingOnRoadways_road_sign_id_fkey` FOREIGN KEY (`road_sign_id`) REFERENCES `RoadSigns`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoadSingOnRoadways` ADD CONSTRAINT `RoadSingOnRoadways_road_sign_condition_id_fkey` FOREIGN KEY (`road_sign_condition_id`) REFERENCES `RoadSignConditions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
