import type { InformationHTMLAttributes } from '$stylist/information';
import type { TestOverview } from '../testoverview';
import type { TestResult } from '../testresult';

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
} & InformationHTMLAttributes<HTMLDivElement>;
