import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotButtonCore } from '$stylist/button/interface/slot/button-core';
import type { SlotButtonDom } from '$stylist/button/interface/slot/button-dom';
import type { SlotButtonElement } from '$stylist/button/interface/slot/button-element';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeButtonElement
	extends ComputeIntersectAll<
		[SlotButtonElement, Omit<SlotButtonCore, 'children'>, SlotButtonDom, SlotChildren]
	> {}
