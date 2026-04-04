import type { ITableSkeletonProps } from '$stylist/feedback/interface/component/feedback/other';

export interface SkeletonTableProps extends ITableSkeletonProps {
	rows?: number;
	columns?: number;
	class?: string;
}
