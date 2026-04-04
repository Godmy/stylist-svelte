/**
 * ProductTourContract — интерактивный тур по продукту.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductTourStepContract {
	title: string;
	content: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
}

export interface ProductTourEventsContract {
	onComplete?: () => void;
}

export interface ProductTourContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, ProductTourEventsContract {
	/** List of tour steps */
	steps: ProductTourStepContract[];
	/** Current step index */
	currentStep?: number;
	/** Show tour */
	showTour?: boolean;
}
