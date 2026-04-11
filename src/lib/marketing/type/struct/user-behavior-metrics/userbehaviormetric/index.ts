export type UserBehaviorMetric = {
  id: string;
  name: string;
  value: string | number;
  previousValue?: string | number;
  change?: number;
  changeType?: 'positive' | 'negative';
  description: string;
};
