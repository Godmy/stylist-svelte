import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TestOverview } from '$stylist/marketing/type/struct/test-results-viewer/testoverview';
import type { TestResult } from '$stylist/marketing/type/struct/test-results-viewer/testresult';

export type TestResultsViewerProps = {
	testResults: TestResult[];
	testOverview: TestOverview;
	title?: string;
	description?: string;
	showCharts?: boolean;
	showStatisticalSignificance?: boolean;
	class?: string;
	headerClass?: string;
	resultsClass?: string;
	chartClass?: string;
	footerClass?: string;
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography;
