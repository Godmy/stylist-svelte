import type { RecipeBreadcrumbLink } from '$stylist/navigation/interface/recipe/breadcrumb-link';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createBreadcrumbLinkState(
	props: RecipeBreadcrumbLink & { current?: boolean; href?: string; class?: string }
) {
	const linkClass = $derived(
		joinClassNames(
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
