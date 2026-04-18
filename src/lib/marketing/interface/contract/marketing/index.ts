import type { SlotABTestConfigurator as ABTestConfiguratorContract } from '$stylist/marketing/interface/slot/ab-test-configurator';
import type { ConversionFunnelContract } from '$stylist/marketing/type/struct/conversion-funnel-contract';
import type { CtaBannerContract } from '$stylist/marketing/type/struct/cta-banner-contract';
import type { SlotHero as HeroContract } from '$stylist/marketing/interface/slot/hero';
import type { TestResultsViewerContract } from '$stylist/marketing/type/struct/test-results-viewer-contract';
import type { TrafficAnalyticsContract } from '$stylist/marketing/type/struct/traffic-analytics-contract';
import type { UserBehaviorMetricsContract } from '$stylist/marketing/type/struct/user-behavior-metrics-contract';

export interface ContractMarketing {
	ABTestConfigurator: ABTestConfiguratorContract;
	ConversionFunnel: ConversionFunnelContract;
	CtaBanner: CtaBannerContract;
	Hero: HeroContract;
	TestResultsViewer: TestResultsViewerContract;
	TrafficAnalytics: TrafficAnalyticsContract;
	UserBehaviorMetrics: UserBehaviorMetricsContract;
}
