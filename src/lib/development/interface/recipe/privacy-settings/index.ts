import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotPrivacySettings } from '$stylist/development/interface/slot/privacy-settings';

export interface RecipePrivacySettings extends StructIntersectAll<[SlotPrivacySettings]> {}
