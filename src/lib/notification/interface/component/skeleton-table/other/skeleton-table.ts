import type { ITableSkeletonProps } from '$stylist/notification/interface/component/notification/other';

export interface SkeletonTableProps extends ITableSkeletonProps {
	rows?: number;
	columns?: number;
	class?: string;
}
