import type { TokenTest } from '$stylist/interaction/type/record/test';
import type { SlotABTest } from '$stylist/marketing/interface/slot/ab-test';

export interface SlotABTestConfigurator {
	initialTest?: SlotABTest;
	onSave?: (test: SlotABTest) => void;
	onStart?: (testId: string) => void;
	onPause?: (testId: string) => void;
	onComplete?: (testId: string) => void;
	class?: string;
	headerClass?: string;
	formClass?: string;
	variantClass?: string;
	footerClass?: string;
}
