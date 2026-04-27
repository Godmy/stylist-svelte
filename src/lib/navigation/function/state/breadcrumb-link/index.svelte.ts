import type { BreadcrumbLinkRecipe } from '$stylist/navigation/interface/recipe/breadcrumb-link';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createBreadcrumbLinkState(props: BreadcrumbLinkRecipe & { current?: boolean; href?: string; class?: string }) {
	const linkClass = $derived(
		joinClassNames(
			'inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-colors',
			props.current
				? 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
				: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-primary-600)]',
			props.class ?? ''
		)
	);

	return {
		get linkClass() {
			return linkClass;
		}
	};
}

export default createBreadcrumbLinkState;
