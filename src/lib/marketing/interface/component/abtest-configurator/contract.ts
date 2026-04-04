import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenTest } from '$stylist/interaction/type/record/test';
import type { RecordMarketingMerge } from '$stylist/marketing/type/record';

export interface ABTestVariantData {
	id: string;
	name: string;
	description: string;
	weight: number;
	isActive: boolean;
}

export interface ABTestData {
	id: string;
	name: string;
	description: string;
	variants: ABTestVariantData[];
	startDate: Date;
	endDate?: Date;
	status: TokenTest;
	targetAudience?: string;
	successMetrics: string[];
}

export type ABTestConfiguratorContract = RecordArchitectureMerge<
	[
		{
			initialTest?: ABTestData;
			onSave?: (test: ABTestData) => void;
			onStart?: (testId: string) => void;
			onPause?: (testId: string) => void;
			onComplete?: (testId: string) => void;
			headerClass?: string;
			formClass?: string;
			variantClass?: string;
			footerClass?: string;
		},
		HTMLAttributes<HTMLDivElement>
	]
>;

export type { ABTestVariantData as ABTestVariant, ABTestData as ABTest };
