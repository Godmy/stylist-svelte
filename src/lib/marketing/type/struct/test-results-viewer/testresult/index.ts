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
