import { FOUNDATION_AXES, FOUNDATION_AXIS_DIRECTIONS, FOUNDATION_AXIS_ORIENTATIONS } from '$stylist/architecture/const/token/axes';

export type FoundationAxis = (typeof FOUNDATION_AXES)[number];

export type FoundationAxisDirection = (typeof FOUNDATION_AXIS_DIRECTIONS)[number];

export type FoundationAxisOrientation = (typeof FOUNDATION_AXIS_ORIENTATIONS)[number];
