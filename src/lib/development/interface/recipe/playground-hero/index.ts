import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';
import type { SlotAiModel } from '$stylist/development/interface/slot/ai-model';

export interface RecipePlaygroundHero extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	/** Title */
	title?: string;
	/** Subtitle */
	subtitle?: string;
	/** Description */
	description?: string;
	/** Badge label */
	badgeLabel?: string;
	/** Badge href */
	badgeHref?: string;
	/** Powered by label */
	poweredByLabel?: string;
	/** AI models */
	aiModels?: SlotAiModel[];
	/** Additional CSS class */
	class?: string;
}
