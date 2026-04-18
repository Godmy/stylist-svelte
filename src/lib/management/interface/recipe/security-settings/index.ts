import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSecuritySettings as SecuritySettingsProps } from '$stylist/form/interface/slot/security-settings';

export interface SecuritySettingsStateProps extends StructIntersectAll<[SecuritySettingsProps]> {}
