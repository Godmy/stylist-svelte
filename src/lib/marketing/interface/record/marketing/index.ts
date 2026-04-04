import type { ABTestConfiguratorContract } from '$stylist/marketing/interface/component/abtest-configurator/contract';
import type { ConversionFunnelContract } from '$stylist/marketing/interface/component/conversion-funnel/contract';
import type { CtaBannerContract } from '$stylist/marketing/interface/component/cta-banner/contract';
import type { HeroContract } from '$stylist/marketing/interface/component/hero/contract';
import type { TestResultsViewerContract } from '$stylist/marketing/interface/component/test-results-viewer/contract';
import type { TrafficAnalyticsContract } from '$stylist/marketing/interface/component/traffic-analytics/contract';
import type { UserBehaviorMetricsContract } from '$stylist/marketing/interface/component/user-behavior-metrics/contract';

export interface MapMarketingContract {
	ABTestConfigurator: ABTestConfiguratorContract;
	ConversionFunnel: ConversionFunnelContract;
	CtaBanner: CtaBannerContract;
	Hero: HeroContract;
	TestResultsViewer: TestResultsViewerContract;
	TrafficAnalytics: TrafficAnalyticsContract;
	UserBehaviorMetrics: UserBehaviorMetricsContract;
}
