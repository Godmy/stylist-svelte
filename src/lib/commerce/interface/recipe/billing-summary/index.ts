import type { SlotBillingSummary } from '$stylist/commerce/interface/slot/billing-summary';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeBillingSummary
	extends ComputeIntersectAll<[SlotBillingSummary, SlotTheme, SlotText, SlotText]> {}
