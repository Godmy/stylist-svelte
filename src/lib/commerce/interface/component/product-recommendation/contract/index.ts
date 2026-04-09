/**
 * ProductRecommendationContract — блок рекомендаций.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок блока)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RecommendationProductContract {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}

export interface ProductRecommendationEventsContract {
	onProductClick?: (id: string) => void;
}

export interface ProductRecommendationContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>, ProductRecommendationEventsContract {
	/** List of recommended products */
	products: RecommendationProductContract[];
}
