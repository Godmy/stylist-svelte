import type { ABTestStatus } from '../../tokens/interaction/abtest-statuses';

export type ABTestVariant = {
  id: string;
  name: string;
  description: string;
  weight: number;
  isActive: boolean;
};

export type ABTest = {
  id: string;
  name: string;
  description: string;
  variants: ABTestVariant[];
  startDate: Date;
  endDate?: Date;
  status: ABTestStatus;
  targetAudience?: string;
  successMetrics: string[];
};

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
