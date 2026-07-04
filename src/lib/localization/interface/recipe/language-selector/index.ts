import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotLanguageSelector } from '$stylist/localization/interface/slot/language-selector';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLanguageSelector extends ComputeIntersectAll<[SlotLanguageSelector, SlotChildren]> {}