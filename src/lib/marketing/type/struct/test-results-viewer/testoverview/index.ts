export type TestOverview = {
  testName: string;
  startDate: Date;
  endDate?: Date;
  status: 'running' | 'completed' | 'paused';
  winningVariant?: string;
  confidence: number;
};
