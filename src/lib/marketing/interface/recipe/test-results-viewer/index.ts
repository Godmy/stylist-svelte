import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

import type { TestResult } from '$stylist/marketing/type/object/test-results-viewer/testresult';

export interface RecipeTestResultsViewer extends HTMLAttributes<HTMLDivElement>, SlotThemeBorder, SlotTypography {
testResults: TestResult[];
	testOverview: {
	testName: string;
	startDate: Date;
	endDate?: Date;
	status: 'running' | 'completed' | 'paused';
	winningVariant?: string;
	confidence: number;
};
	title?: string;
	description?: string;
	showCharts?: boolean;
	showStatisticalSignificance?: boolean;
	class?: string;
	headerClass?: string;
	resultsClass?: string;
	chartClass?: string;
	footerClass?: string;
}
