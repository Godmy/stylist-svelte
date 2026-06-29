import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { CenteredLayoutAxis } from '$stylist/layout/type/alias/centered-layout-axis';

export type CenteredLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
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

