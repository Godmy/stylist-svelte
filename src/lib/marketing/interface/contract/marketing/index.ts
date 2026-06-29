import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { SlotABTestConfigurator as ABTestConfiguratorContract } from '$stylist/marketing/interface/slot/ab-test-configurator';
import type { SlotHero as HeroContract } from '$stylist/marketing/interface/slot/hero';

export interface ContractMarketing {
	ABTestConfigurator: ABTestConfiguratorContract;
	ConversionFunnel: AnyProperty;
	CtaBanner: AnyProperty;
	Hero: HeroContract;
	TestResultsViewer: AnyProperty;
	TrafficAnalytics: AnyProperty;
	UserBehaviorMetrics: AnyProperty;
}
