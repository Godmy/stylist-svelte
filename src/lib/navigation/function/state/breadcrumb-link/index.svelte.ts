import type { BreadcrumbLinkRecipe } from '$stylist/navigation/interface/recipe/breadcrumb-link';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createBreadcrumbLinkState(props: BreadcrumbLinkRecipe & { current?: boolean; href?: string; class?: string }) {
	const linkClass = $derived(joinClassNames('breadcrumb-link', props.current ? 'current' : 'not-current', props.class ?? ''));

	return {
		get linkClass() {
			return linkClass;
		}
	};
}

export default createBreadcrumbLinkState;
