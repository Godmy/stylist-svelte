import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFeatureToggle as FeatureToggleProps } from '$stylist/management/interface/slot/feature-toggle';

export interface FeatureToggleStateProps extends StructIntersectAll<[FeatureToggleProps]> {}
