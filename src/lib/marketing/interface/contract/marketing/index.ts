import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { SlotABTestConfigurator } from '$stylist/marketing/interface/slot/ab-test-configurator';
import type { SlotHero } from '$stylist/marketing/interface/slot/hero';
export interface ContractMarketing {
	ABTestConfigurator: SlotABTestConfigurator;
	ConversionFunnel: AnyProperty;
	CtaBanner: AnyProperty;
	Hero: SlotHero;
	TestResultsViewer: AnyProperty;
	TrafficAnalytics: AnyProperty;
	UserBehaviorMetrics: AnyProperty;
}
