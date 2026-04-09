import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { CenteredLayoutAxis } from '$stylist/layout/class/style-manager/centered-layout';

export type CenteredLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	/** Ось центрирования */
	axis?: CenteredLayoutAxis;
	/** Растягивает wrapper на всю высоту */
	fillHeight?: boolean;
	/** Растягивает wrapper на всю ширину */
	fillWidth?: boolean;
	/** Ограничивает ширину внутреннего контента (CSS value, напр. '640px', '40rem') */
	maxWidth?: string;
};
