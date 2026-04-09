import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type TestResult = {
  id: string;
  testName: string;
  variantName: string;
  visitors: number;
  conversions: number;
  conversionRate: number;
  statisticalSignificance: number;
  improvement: number;
  status: 'winning' | 'losing' | 'inconclusive';
};

export type TestOverview = {
  testName: string;
  startDate: Date;
  endDate?: Date;
  status: 'running' | 'completed' | 'paused';
  winningVariant?: string;
  confidence: number;
};

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
