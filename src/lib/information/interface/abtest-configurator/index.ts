import type { TokenTest } from '$stylist/interaction/type/token/test';

export interface ABTestVariant {
	id: string;
	name: string;
	description: string;
	weight: number;
	isActive: boolean;
}

export interface ABTest {
	id: string;
	name: string;
	description: string;
	variants: ABTestVariant[];
	startDate: Date;
	endDate?: Date;
	status: TokenTest;
	targetAudience?: string;
	successMetrics: string[];
}

export interface IABTestConfiguratorProps {
	initialTest?: ABTest;
	onSave?: (test: ABTest) => void;
	onStart?: (testId: string) => void;
	onPause?: (testId: string) => void;
	onComplete?: (testId: string) => void;
	class?: string;
	headerClass?: string;
	formClass?: string;
	variantClass?: string;
	footerClass?: string;
}
