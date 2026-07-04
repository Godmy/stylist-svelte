import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotMockDataSelector } from '$stylist/development/interface/slot/mock-data-selector';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeMockDataSelector extends ComputeIntersectAll<[SlotMockDataSelector, SlotChildren]> {}