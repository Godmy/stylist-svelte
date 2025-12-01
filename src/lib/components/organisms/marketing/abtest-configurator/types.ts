/**
 * Типы для компонента ABTestConfigurator
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Вариант теста */
export type ABTestVariant = {
  id: string;
  name: string;
  description: string;
  weight: number; // Процент трафика (0-100)
  isActive: boolean;
};

/** A/B тест */
export type ABTest = {
  id: string;
  name: string;
  description: string;
  variants: ABTestVariant[];
  startDate: Date;
  endDate?: Date;
  status: 'draft' | 'running' | 'completed' | 'paused';
  targetAudience?: string;
  successMetrics: string[];
};

/** Пропсы компонента ABTestConfigurator */
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