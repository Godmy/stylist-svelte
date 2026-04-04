/** Data model for dashboard metrics. UI contract lives in interface/recipe. */
export interface Metric {
  id: string;
  title: string;
  value: string | number;
  change: number; // Percentage change
  changeType: 'positive' | 'negative';
  icon: any;
  color: string;
}





