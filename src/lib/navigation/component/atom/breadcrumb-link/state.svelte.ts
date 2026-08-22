import { ClassNamesManager } from '$stylist/layout/class/manager/class-names';
import type { RecipeBreadcrumbLink } from '$stylist/navigation/interface/recipe/breadcrumb-link';

export function createBreadcrumbLinkState(
	props: RecipeBreadcrumbLink & { current?: boolean; href?: string; class?: string }
) {
	const linkClass = $derived(
		ClassNamesManager.join(
			'c-breadcrumb-link',
			props.current ? 'c-breadcrumb-link--current' : '',
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
