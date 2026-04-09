/**
 * ProductDemoContract — демо-блок продукта.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок демо)
 *   ICaptionSlot      (information) — description (описание)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';

export interface ProductDemoContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]> {
	/** Demo content snippet */
	demoContent: Snippet;
	/** List of features */
	features?: string[];
	/** Demo callback */
	onDemo?: () => void;
}
