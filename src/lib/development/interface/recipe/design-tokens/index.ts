import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotDesignTokens } from '$stylist/development/interface/slot/design-tokens';

export interface RecipeDesignTokens extends StructIntersectAll<[SlotDesignTokens]> {}
