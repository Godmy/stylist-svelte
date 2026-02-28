export const ABTEST_STATUSES = ['draft', 'running', 'completed', 'paused'] as const;

export type ABTestStatus = (typeof ABTEST_STATUSES)[number];
