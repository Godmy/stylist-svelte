import type { CaseItem } from '$stylist/landing/type/object/case-item';
export interface RecipeCasesSection {
	id?: string;
	ariaLabel: string;
	eyebrow: string;
	title: string;
	items: CaseItem[];
	class?: string;
}
