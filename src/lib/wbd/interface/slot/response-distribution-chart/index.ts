import type { StructWbdResponseDistributionBin } from '$stylist/wbd/type/struct/response-distribution-bin';

export interface SlotWbdResponseDistributionChart {
	bins: StructWbdResponseDistributionBin[];
	title?: string;
	class?: string;
}
