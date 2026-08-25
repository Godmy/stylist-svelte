import type { DomainComponentIntervalMetric } from '$stylist/domain/type/object/domain-component-interval-metric';
import type { DomainComponentIntervalsTotals } from '$stylist/domain/type/object/domain-component-intervals-totals';
export type DomainComponentIntervalsManifest = {
	domains: DomainComponentIntervalMetric[];
	totals: DomainComponentIntervalsTotals;
};
