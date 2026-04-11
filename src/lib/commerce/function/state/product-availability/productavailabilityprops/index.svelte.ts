export type ProductAvailabilityProps = {
	available?: boolean;
	stock?: number;
	location?: string;
	estimatedRestock?: string;
	onNotifyMe?: () => void;
	className?: string;
};
