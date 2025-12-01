/**
 * Типы для компонента AccountProgressTracker
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Пропсы компонента AccountProgressTracker */
export interface IAccountProgressTrackerProps {
  steps: string[];
  currentStep?: number;
  class?: string;
}