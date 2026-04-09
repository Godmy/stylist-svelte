export interface LoadingSpecificProps {
	type?: 'spinner' | 'bar' | 'minimal' | 'overlay';
	progress?: number;
	indeterminate?: boolean;
	showLabel?: boolean;
	showPercentage?: boolean;
}
