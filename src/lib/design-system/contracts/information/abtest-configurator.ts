import type { ABTestStatus } from '$stylist/design-system/tokens/interaction/statuses';

import type { ABTest } from '../../types/information/abtest-configurator';
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


