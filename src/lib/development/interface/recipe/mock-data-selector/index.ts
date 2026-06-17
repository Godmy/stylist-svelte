import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMockDataSelector } from '$stylist/development/interface/slot/mock-data-selector';

export interface RecipeMockDataSelector extends StructIntersectAll<[SlotMockDataSelector]> {}
