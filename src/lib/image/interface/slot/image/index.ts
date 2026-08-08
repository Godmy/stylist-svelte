export interface SlotImage {
	src?: string;
	alt?: string;
	thumbnail?: string;
	srcSet?: string;
	fallback?: string;
	loading?: 'eager' | 'lazy';
}
