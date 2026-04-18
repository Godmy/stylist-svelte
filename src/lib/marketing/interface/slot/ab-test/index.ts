import type { TokenTest } from '$stylist/interaction/type/record/test';
import type { SlotABTestVariant } from '$stylist/marketing/interface/slot/ab-test-variant';

export interface SlotABTest {
	id: string;
	name: string;
	description: string;
	variants: SlotABTestVariant[];
	startDate: Date;
	endDate?: Date;
	status: TokenTest;
	targetAudience?: string;
	successMetrics: string[];
}
