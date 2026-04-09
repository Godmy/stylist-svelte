import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface FunnelStep {
	id: string;
	name: string;
	value: number;
	color?: string;
}

export type ConversionFunnelContract = RecordArchitectureMerge<
	[
		{
			title?: string;
			subtitle?: string;
			steps: FunnelStep[];
			showPercentage?: boolean;
			showValues?: boolean;
			showTrend?: boolean;
			showConversionRate?: boolean;
			height?: number;
			headerClass?: string;
			stepClass?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
